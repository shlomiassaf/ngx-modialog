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
    provide
} from 'angular2/core';

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
export class Typeahead {

    @Input('typeahead') private data: any;

    private containerComponentRef: Promise<ComponentRef>;
    private containerInstance: TypeaheadContainer;
    private matches: any[];
    private matchesSubscription: Subscription<any>;
    private matchesObserver: Subscriber<any>;


    constructor(private componentLoader: DynamicComponentLoader,
                private element: ElementRef,
                private model:NgModel) {

        this.matches = [];
        this.matchesSubscription = this.model.control.valueChanges
            .map(value => this.processQuery(value))
            .subscribe(values => {
                if (values.length === 0)
                    this.destroyContainer();
                else if (!this.containerInstance) {
                    this.createContainer();
                }
                else
                    this.onMatchesUpdate();
            });
    }

    ngOnDestroy() {
        this.matchesSubscription.unsubscribe();
    }

    onMatchesUpdate() {
        this.matchesObserver && this.matchesObserver.next(this.matches);
    }

    processQuery(value) {
        return this.matches = this.data ? this.data.filter(r => r.toLowerCase().indexOf(value.toLowerCase()) >= 0) : [];
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

        return this.containerComponentRef = this.componentLoader
            .loadNextToLocation(TypeaheadContainer, this.element, binding)
            .then((componentRef: ComponentRef) => {
                this.containerInstance = componentRef.instance;

                this.containerInstance.doS = ()=> this.onMatchesUpdate();

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
