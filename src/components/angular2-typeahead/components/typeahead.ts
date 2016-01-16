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
    properties: [
        'data:typeahead'
    ]
})
export class Typeahead {
    public results;
    private data:any;
    private resultContainer: Promise<ComponentRef>;

    constructor(private componentLoader: DynamicComponentLoader,
                private renderer:Renderer,
                private element:ElementRef) {
    }

    ngOnInit() {
        this.results = this.data;
        this.show();
    }

    show() {

        let binding = Injector.resolve([ provide(Typeahead, {useValue: this}) ]);

        this.resultContainer = this.componentLoader
            .loadNextToLocation(TypeaheadResultContainer, this.element, binding)
            .then((componentRef:ComponentRef) => {
                return componentRef;
            });
    }

}