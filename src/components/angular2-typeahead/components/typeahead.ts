import {
    Directive,
    DynamicComponentLoader,
    ElementRef,
    ComponentRef,
    Renderer,
    Injectable,
    Injector,
    provide} from 'angular2/core';


import {TypeaheadResultContainer} from './typeaheadResultContainer';

@Injectable()
@Directive({
    selector: '[typeahead]',
    host: {
        '(keyup)': 'onKeyup($event)'
    },
    properties: [
        'data:typeahead'
    ]
})
export class Typeahead {
    public results;
    private data:any;
    private resultElement: Promise<ComponentRef>;
    private resultInstance: TypeaheadResultContainer;

    constructor(private componentLoader: DynamicComponentLoader,
                private renderer:Renderer,
                private _element:ElementRef) {
    }

    get element(): ElementRef {
        return this._element;
    }

    onKeyup(e:KeyboardEvent) {
        this.resultInstance && this.resultInstance.onKeyup(e);


        //this.typeaheadLoading.next(true);

        //if (this.async === true) {
        //    this.debouncer();
        //}

        //if (this.async === false) {
        //    this.processMatches();
        //    this.finalizeAsyncCall();
        //}
        this.results = this.data;
        if (!this.resultInstance && this.results.length > 0) {
            this.show();
        }
    }

    show() {
        let binding = Injector.resolve([ provide(Typeahead, {useValue: this}) ]);

        this.resultElement = this.componentLoader
            .loadNextToLocation(TypeaheadResultContainer, this.element, binding)
            .then((componentRef:ComponentRef) => {
                this.resultInstance = componentRef.instance;
                return componentRef;
            });
    }


    hide() {
        if (this.resultInstance) {
            this.resultElement.then((componentRef:ComponentRef) => {
                componentRef.dispose();
                this.resultInstance = null;
                return componentRef;
            });
        }
    }
}