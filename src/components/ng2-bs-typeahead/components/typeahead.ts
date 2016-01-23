import {
    Directive,
    DynamicComponentLoader,
    HostListener,
    Input,
    Output,
    ElementRef,
    ComponentRef,
    Injectable,
    Injector,
    provide,
    OnDestroy,
    OnInit,
    Injector,
    ViewResolver,
    EventEmitter,
    ApplicationRef
} from 'angular2/core';

import {TemplateCompiler} from 'angular2/compiler';
import {NgModel} from 'angular2/common';

import {
    TypeaheadContainer,
    TH_MATCHES_TOKEN,
    TH_NATIVE_ELEMENT_TOKEN
} from './typeaheadContainer';

import {Observable, Subscription, Subscriber} from 'rxjs/Rx';

/**
 * Transforms matches into a normalized object for usage with all data types (object vs string)
 * @param source
 * @param mapOrProp
 * @returns {any}
 */
function transformSource<T>(source: any[],
                            mapOrProp: string| Function): TypeaheadMatchItem<any>[] {
    if (typeof mapOrProp === 'string') {
        return source.map(value => {
            return {
                key: value[mapOrProp],
                value: value
            };
        });
    } else if (typeof mapOrProp === 'function') {
        return source.map(value => {
            return {
                key: mapOrProp(value),
                value: value
            };
        });
    } else {
        return source.map(value => {
            return {
                key: value,
                value: value
            };
        });
    }
}

function filterMatch(search, value) {
    return value.toLowerCase().indexOf(search.toLowerCase()) >= 0;
}

/**
 * A normalized match item that points to a display value and a search subject (key) and the actual
 * value (value).
 */
export interface TypeaheadMatchItem<T> {
    key: string,
    value: T
}

@Directive({
    selector: '[typeahead][ngModel]'
})
export class Typeahead implements OnDestroy, OnInit {
    /**
     * The data source to show matches from.
     * Can be Array, Observable<Array> or a function returning those.
     * In case of a function:
     *      The signature is (search: string) => Array<any> | Observable<any>
     *      Returned value is not filtered.
     */
    @Input('typeahead') public source: any;

    /**
     * The number (in milliseconds) to wait after last character typed before typeahead kicks-in.
     * @default 0
     */
    @Input() public typeaheadWaitMs: number;

    /**
     * A template for the container.
     * You can supply you own or use the generation to change parts of it.
     * See the template for available bindings.
     */
    @Input() public typeaheadTemplate: string;

    /**
     * Minimal no of characters that needs to be entered before typeahead kicks-in.
     * Must be greater than or equal to 0
     * @default 1
     */
    @Input() public typeaheadMinLength: number;

    /**
     * Maximal no of match results to display.
     * Must be greater than or equal to 0
     * @default infinity
     */
    @Input() public typeaheadLimit: number;

    /**
     * Custom comparison instruction. Use when source items are not primitives (usually objects)
     * Can be either a string pointing to the member on the item to compare against,
     * or a function that acts as a map, getting the item returns the value to compare against.
     * Note the difference, string = member, function = value.
     * When using a string (member), there is no drill down
     * you can not use dot notation, use the function instead.
     */
    @Input() public typeaheadFieldMap:  string | ((obj: string) => string);

    /**
     * Should the typeahead popup be appended to root component instead of the parent element?
     * If so, supply an anchor to append after.
     * For example, if your root component is called app:
     * <app>
     *     <span #someAnchorId></span>
     *     <!-- Typeahead container popups will be palced here. -->
     * </app>
     * Notice the use of the term Body in the property to avoid confusion,
     * but it will append to the root component.
     */
    @Input() public typeaheadAppendToBody: string;

    /**
     * Should the first match automatically be focused as you type?
     * @default false
     */
    @Input() public typeaheadFocusFirst: boolean;

    /**
     * Should the container pop up when a new search comes in and show a loading message, then
     * once results are in remove the loading message?
     *
     * You can also alter the loading message in the template.
     * @default false
     */
    @Input() public typeaheadShowLoading: boolean;

    /**
     * Emits an event each time a match is selected by the user.
     * @type {EventEmitter}
     */
    @Output() public typeaheadMatchSelected: EventEmitter<any> = new EventEmitter();

    private containerComponentRef: Promise<ComponentRef>;
    private containerInstance: TypeaheadContainer;
    private matches: TypeaheadMatchItem<any>[] = [];
    private matchesSubscription: Subscription<any>;
    private matchesObserver: Subscriber<TypeaheadMatchItem<any>[]>;
    private matches$: Observable<any>;

    constructor(private componentLoader: DynamicComponentLoader,
                private injector: Injector,
                private element: ElementRef,
                private model: NgModel) {
    }


    ngOnInit() {
       this.initObservable();
    }

    ngOnDestroy() {
        this.unsubscribe();
    }

    nextActiveMatch() {
        if (this.containerInstance) {
            let index = this.matches.indexOf(this.containerInstance.active);
            this.containerInstance.active = this.matches[index + 1 > this.matches.length - 1 ? 0 : index + 1];
        }
    }

    prevActiveMatch() {
        if (this.containerInstance) {
            let index = this.matches.indexOf(this.containerInstance.active);
            this.containerInstance.active = this.matches[index - 1 < 0 ? this.matches.length - 1 : index - 1];
        }
    }

    /**
     * Notifies all listeners to new incoming matches collection about a new collection.
     * @param matches The collection to send.
     */
    emitMatchesUpdate(matches: TypeaheadMatchItem<any>[]) {
        this.matchesObserver && this.matchesObserver.next(matches);
        if (this.typeaheadFocusFirst) {
            this.containerInstance.active = this.matches[0];
        }
    }

    @HostListener('blur')
    onBlur() {
        /*
        We cant destroy on spot, blur might happen from a match selection (click/tap).
        The order is blur -> focus -> click.
        TODO: Doesn't seem like a stable logic, might vary by device.
        Can use document click listener but it DOM specific...
         */
        setTimeout(()=> {
            if (this.containerInstance && !this.containerInstance.selectedMatch) {
                this.destroyContainer();
            }
        }, 150);
    }

    @HostListener('focus')
    onFocus() {
        this.subscribe();
    }

    @HostListener('keyup', ['$event'])
    onKeyup(event: KeyboardEvent): any {
        if (event.keyCode === 27)
            return this.destroyContainer();

        switch (event.keyCode) {
            case 38: // UP
                return this.prevActiveMatch();
            case 40: // DOWN
                return this.nextActiveMatch();
            case 13: // ENTER
                return this.containerInstance.selectActive();

        }
    }

    createContainer(): Promise<ComponentRef> {
        if (this.containerComponentRef) {
            return this.containerComponentRef;
        }

        let binding = Injector.resolve([
            provide(TH_MATCHES_TOKEN, {useValue: new Observable(observer => this.matchesObserver = observer)}),
            provide(TH_NATIVE_ELEMENT_TOKEN, {useValue: this.element.nativeElement})
        ]);


        let template = this.injector.get(ViewResolver).resolve(TypeaheadContainer).template;
        if (!this.typeaheadTemplate && TypeaheadContainer.DEFAULT_TEMPLATE != template) {
            this.updateTemplate(TypeaheadContainer, TypeaheadContainer.DEFAULT_TEMPLATE);
        } else if (this.typeaheadTemplate && this.typeaheadTemplate != template) {
            this.updateTemplate(TypeaheadContainer, this.typeaheadTemplate);
        }

        if (this.typeaheadAppendToBody) {
            /*
                We need access to the root components (body in HTML) and there isn't a public one.
                We use the less intrusive way, we could also use:
                import {APP_COMPONENT_REF_PROMISE} from 'angular2/src/core/application_tokens';
                return this.containerComponentRef = this.injector.get(APP_COMPONENT_REF_PROMISE)
                     .then(appCmpRf => {
                            .. code here ..
                     }) ;
             */
            // TODO: Remove private access when solution is possible.
            let appCmpRf = this.injector.get(ApplicationRef)._rootComponents[0];
            return this.containerComponentRef = this.componentLoader
                .loadIntoLocation(<any>TypeaheadContainer, appCmpRf.location, this.typeaheadAppendToBody, binding)
                .then( componentRef => this.onContainerCreated(componentRef));
        } else {
            return this.containerComponentRef = this.componentLoader
                .loadNextToLocation(<any>TypeaheadContainer, this.element, binding)
                .then( componentRef => this.onContainerCreated(componentRef));
        }
    }

    destroyContainer(): Promise<ComponentRef> {
        if (this.containerComponentRef) {
            let ref = this.containerComponentRef;
            this.containerComponentRef = this.containerInstance = undefined;
            return ref.then((componentRef: ComponentRef) => {
                return componentRef.instance.hide().then(() => {
                    this.matchesObserver.complete();
                    componentRef.dispose();
                    return componentRef;
                });
            });
        }
        return Promise.resolve(null);
    }

    private onContainerCreated(componentRef: ComponentRef): ComponentRef | Promise<ComponentRef> {
        this.containerInstance = componentRef.instance;

        this.containerInstance.matchSelect.subscribe(match => {  //TODO: Dispose.
            this.destroyContainer().then( () => {
                this.unsubscribe();
                this.model.update.emit(match.key);
                this.typeaheadMatchSelected.emit({match: match.value});
            });
        });
        return componentRef;
    }


    private initObservable() {
        this.typeaheadWaitMs = (this.typeaheadWaitMs > 0) ? this.typeaheadWaitMs : 0;
        this.typeaheadMinLength = (this.typeaheadMinLength > 0) ? this.typeaheadMinLength : 0;

        this.matches$ = this.model.control.valueChanges
            .debounceTime<string>(this.typeaheadWaitMs)
            .map(value => value.length >= this.typeaheadMinLength ? value : '')
            .distinctUntilChanged()
            .do( (value) => {
                if (value && this.typeaheadShowLoading) {
                    this.createContainer()
                        .then(compRef => {
                            // changing some state, how devastating...
                            compRef.instance.showLoading = true;
                            this.emitMatchesUpdate([]);
                            return compRef;
                        });
                }
            })
            .switchMap(search => {
                // main transformation and query functor.
                // Makes sure the final processing is done on an Observable.
                // Logic could be done at build time (rather then stream time) but since
                // all logic runs on the input value stream code clarity was more important.
                if (!search || !this.source) {
                    return Observable.of([]);
                } else {
                    let source: any, applyFilter: boolean = true;
                    if (typeof this.source === 'function') { // user supplied function
                        applyFilter = false;
                        source = this.source(search); // can be observable / promise / array
                    }  else {
                        source = this.source; // user supplied observable / promise / array.
                    }

                    if (Array.isArray(source)) {
                        source = Observable.of(source);
                    } else if (source instanceof Promise) {
                        source = Observable.fromPromise(source);
                    } else if (!(source instanceof Observable)) {
                        throw new Error("Invalid source supplied.");
                    }

                    return source.map(source => {
                        let transformed$ = transformSource(source, this.typeaheadFieldMap);

                        if (applyFilter) {
                            transformed$ = transformed$.filter(kvp => filterMatch(search, kvp.key));
                        }

                        if (this.typeaheadLimit > 0) {
                            transformed$ = transformed$.slice(0, this.typeaheadLimit);
                        }

                        return transformed$;
                    });
                }
            })
            .do( (values) => {
                if (values.length && this.typeaheadShowLoading) {
                    this.createContainer()
                        .then(compRef => {
                            // changing some state, how devastating...
                            compRef.instance.showLoading = false;
                            return compRef;
                        });
                }
            });
    }

    /**
     * Subscribes to the observable stream coming from search values to search results.
     */
    private subscribe() {
        if (this.matchesSubscription && !this.matchesSubscription.isUnsubscribed) return;
        this.matchesSubscription = this.matches$
            .subscribe( (values: TypeaheadMatchItem<any>[]) => {
                this.matches = values;
                if (values.length === 0) {
                    this.destroyContainer();
                } else if (!this.containerInstance) {
                    this.createContainer()
                        .then(compRef => {
                            this.emitMatchesUpdate(this.matches);
                            return compRef;
                        });
                } else {
                    this.emitMatchesUpdate(this.matches);
                }
            });
    }

    private unsubscribe() {
        if (this.matchesSubscription && !this.matchesSubscription.isUnsubscribed ) {
            this.matchesSubscription.unsubscribe();
        }
    }

    private updateTemplate(component: any, template: string) {
        //TODO : fix when public API is more flexible.
        //       see https://github.com/angular/angular/issues/6591
        let templateCompiler: any = this.injector.get(TemplateCompiler); // avoid TS screaming
        templateCompiler._compiledTemplateCache.delete(component);
        templateCompiler._compiledTemplateDone.delete(component);
        templateCompiler._hostCacheKeys.delete(component);
        templateCompiler._runtimeMetadataResolver._directiveCache.delete(component);

        this.injector.get(ViewResolver).resolve(component).template = template;
    }
}
