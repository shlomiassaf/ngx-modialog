import {BROWSER_APP_PROVIDERS} from 'angular2/platform/browser';

import {
    Directive,
    DynamicComponentLoader,
    HostListener,
    Input,
    Output,
    ElementRef,RuntimeMetadataResolver
    ComponentRef,
    Injectable,
    Injector,
    provide,
    OnDestroy,
    Injector,
    ViewResolver, Compiler , APPLICATION_COMMON_PROVIDERS
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
export class Typeahead implements OnDestroy {

    @Input('typeahead') private source: any;
    @Input() private typeaheadWaitMs: number;
    @Input() private typeaheadMinLength: number;

    private containerComponentRef: Promise<ComponentRef>;
    private containerInstance: TypeaheadContainer;
    private matches: any[] = [];
    private matchesSubscription: Subscription<any>;
    private matchesObserver: Subscriber<any>;


    constructor(private componentLoader: DynamicComponentLoader,

                private injector: Injector,
                private compiler: Compiler,
                private templateCompiler: TemplateCompiler,
                private viewResolver: ViewResolver,


                private element: ElementRef,
                private model: NgModel) {

    }

    ngOnInit() {
        this.typeaheadWaitMs = (this.typeaheadWaitMs > 0) ? this.typeaheadWaitMs : 0;
        this.typeaheadMinLength = (this.typeaheadMinLength > 0) ? this.typeaheadMinLength : 0;

        let matches$: Observable<any> = this.model.control.valueChanges
            .debounceTime<string>(this.typeaheadWaitMs)
            .map(value => value.length >= this.typeaheadMinLength ? value : '')
            .distinctUntilChanged();

        if (typeof this.source === 'function') {
            matches$ = matches$.switchMap<any>(value => value ? this.source(value) : Observable.of([]));
        } else {
            matches$ = matches$.map<any>(value => this.processQuery(value, this.source));
        }

        this.matchesSubscription = matches$
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

    ngOnDestroy() {
        this.matchesSubscription.unsubscribe();
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
        //this.destroyContainer();
    }

    @HostListener('keyup', ['$event'])
    onKeyup(event: KeyboardEvent) {
        if (event.keyCode === 27)
            return this.destroyContainer();

        switch (event.keyCode) {
            case 38: // UP
                return this.prevActiveMatch();
            case 40: // DOWN
                return this.nextActiveMatch();
            case 13: // ENTER
                return; //this.selectActiveMatch();

        }
    }

    createContainer() {
        let binding = Injector.resolve([
            provide(TH_MATCHES_TOKEN, {useValue: new Observable(observer => this.matchesObserver = observer)}),
            provide(TH_NATIVE_ELEMENT_TOKEN, {useValue: this.element.nativeElement})
        ]);

        console.log(Injector.resolveAndCreate(APPLICATION_COMMON_PROVIDERS.concat(BROWSER_APP_PROVIDERS)).resolveAndInstantiate(TemplateCompiler));

        //this.injector.resolveAndCreateChild(APPLICATION_COMMON_PROVIDERS.concat(provide(TemplateCompiler, {useValue: new TemplateCompiler()}))).resolveAndInstantiate()
        //console.log( this.injector.resolveAndInstantiate(APPLICATION_COMMON_PROVIDERS[10]));



        //this.templateCompiler.clearCache();
        //this.templateCompiler._runtimeMetadataResolver._directiveCache.delete(TypeaheadContainer);
        //this.compiler.clearCache();

        this.viewResolver.resolve(TypeaheadContainer).template = `<ul #thContainer class="dropdown-menu">
            <li *ngFor="#match of matches"
                [class.active]="isActive(match)">
                <a>{{match}} ${new Date()}</a>
            </li>
        </ul>`;


        return this.containerComponentRef = this.componentLoader
            .loadNextToLocation(TypeaheadContainer, this.element, binding)
            .then((componentRef: ComponentRef) => {
                this.containerInstance = componentRef.instance;
                return componentRef;
            });
    }


    destroyContainer() {
        if (this.containerInstance) {
            this.containerComponentRef.then((componentRef: ComponentRef) => {
                this.matchesObserver.complete();
                componentRef.dispose();
                this.containerInstance = null;
                return componentRef;
            });
        }
    }
}
