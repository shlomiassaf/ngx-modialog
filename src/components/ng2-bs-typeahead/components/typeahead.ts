import {BROWSER_APP_PROVIDERS} from 'angular2/platform/browser';

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
    EventEmitter
} from 'angular2/core';

import {TemplateCompiler} from 'angular2/compiler';
import {NgModel} from 'angular2/common';

import {
    TypeaheadContainer,
    TH_MATCHES_TOKEN,
    TH_NATIVE_ELEMENT_TOKEN
} from './typeaheadContainer';

import {Observable, Subscription, Subscriber} from 'rxjs/Rx';

@Directive({
    selector: '[typeahead][ngModel]'
})
export class Typeahead implements OnDestroy, OnInit {

    @Output() public matchSelected: EventEmitter<any> = new EventEmitter();
    @Input('typeahead') private source: any;
    @Input() private typeaheadWaitMs: number;
    @Input() private typeaheadItemTemplate: string;
    @Input() private typeaheadMinLength: number;
    @Input() private typeaheadFieldMap:  string | ((obj: string) => string);

    private containerComponentRef: Promise<ComponentRef>;
    private containerInstance: TypeaheadContainer;
    private matches: any[] = [];
    private matchesSubscription: Subscription<any>;
    private matchesObserver: Subscriber<any>;
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

    onMatchesUpdate() {
        this.matchesObserver && this.matchesObserver.next(this.matches);
    }

    processQuery(value, source) {
        return source && value ? source.filter(r => r.toLowerCase().indexOf(value.toLowerCase()) >= 0) : [];
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

    @HostListener('blur')
    onBlur() {
        //setTimeout(_=> this.destroyContainer(), 10);
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
        let binding = Injector.resolve([
            provide(TH_MATCHES_TOKEN, {useValue: new Observable(observer => this.matchesObserver = observer)}),
            provide(TH_NATIVE_ELEMENT_TOKEN, {useValue: this.element.nativeElement})
        ]);


        let template = this.injector.get(ViewResolver).resolve(TypeaheadContainer).template;
        if (!this.typeaheadItemTemplate && TypeaheadContainer.DEFAULT_TEMPLATE != template) {
            this.updateTempalte(TypeaheadContainer, TypeaheadContainer.DEFAULT_TEMPLATE);
        } else if (this.typeaheadItemTemplate && this.typeaheadItemTemplate != template) {
            this.updateTempalte(TypeaheadContainer, this.typeaheadItemTemplate);
        }

        return this.containerComponentRef = this.componentLoader
            .loadNextToLocation(TypeaheadContainer, this.element, binding)
            .then((componentRef: ComponentRef) => {
                this.containerInstance = componentRef.instance;
                this.containerInstance.matchSelect.subscribe(match => {
                    this.destroyContainer().then(_ => {
                        this.unsubscribe();
                        this.model.update.emit(match);
                        this.matchSelected.emit(match);
                    });
                });
                return componentRef;
            });
    }


    destroyContainer(): Promise<ComponentRef> {
        if (this.containerInstance) {
            return this.containerComponentRef.then((componentRef: ComponentRef) => {
                this.matchesObserver.complete();
                componentRef.dispose();
                this.containerInstance = null;
                return componentRef;
            });
        }
        return Promise.resolve(null);
    }

    private initObservable() {
        this.typeaheadWaitMs = (this.typeaheadWaitMs > 0) ? this.typeaheadWaitMs : 0;
        this.typeaheadMinLength = (this.typeaheadMinLength > 0) ? this.typeaheadMinLength : 0;

        let matches$: Observable<any> = this.model.control.valueChanges
            .debounceTime<string>(this.typeaheadWaitMs)
            .map(value => value.length >= this.typeaheadMinLength ? value : '')
            .distinctUntilChanged();


        if (this.source && this.source instanceof Observable) { // user supplied observable
            matches$ = matches$.switchMap<any>(value => value ? this.source.map(value => this.processQuery(value, this.source)) : Observable.of([]));
        } else if (typeof this.source === 'function') { // user supplied map operator
            matches$ = matches$.switchMap<any>(value => value ? this.source(value) : Observable.of([]));
        }
        else {
            matches$ = matches$.map<any>(value => this.processQuery(value, this.source));
        }

        //if (typeof this.typeaheadFieldMap === 'string') {
        //    matches$ = matches$.map<NormalizedSource>( (source: NormalizedSource) => {
        //        return {
        //            search: source.search,
        //            data: source.data.map(<any>this.typeaheadFieldMap)
        //        }
        //    });
        //} else if (typeof this.typeaheadFieldMap === 'function') {
        //    matches$ = matches$.map()
        //}

        this.matches$ = matches$;
    }

    private subscribe() {
        if (this.matchesSubscription && !this.matchesSubscription.isUnsubscribed) return;
        this.matchesSubscription = this.matches$
            .subscribe(values => {
                this.matches = values;
                if (values.length === 0) {
                    this.destroyContainer();
                } else if (!this.containerInstance) {
                    this.createContainer()
                        .then(compRef => {
                            this.onMatchesUpdate();
                            return compRef;
                        });
                } else {
                    this.onMatchesUpdate();
                }
            });
    }

    private unsubscribe() {
        this.matchesSubscription && !this.matchesSubscription.isUnsubscribed && this.matchesSubscription.unsubscribe();
    }

    private updateTempalte(component: any, template: string) {
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
