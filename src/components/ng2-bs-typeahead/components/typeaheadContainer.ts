import {
    Component,
    Renderer,
    Inject,
    ElementRef,
    ViewChild,
    AfterViewInit,
    OnDestroy,
    DynamicComponentLoader, ViewResolver
} from 'angular2/core';

import {Observable, Subscription} from 'rxjs/Rx';
import {NgFor} from 'angular2/common';
import {AsyncPipe} from 'angular2/common';

import {UiPositionUtil} from 'ng2-bs-core';

/**
 * Dependency Injection resolution token for matched object.
 * @type {string}
 */
export const TH_MATCHES_TOKEN: string = 'typeaheadMatches';
/**
 * Dependency Injection resolution token for the typeahead native element.
 * @type {string}
 */
export const TH_NATIVE_ELEMENT_TOKEN: string = 'typeaheadNativeElement';


@Component({
    selector: 'typeahead-result-container',
    pipes: [AsyncPipe],
    template:
        `<ul #thContainer class="dropdown-menu">
            <li *ngFor="#match of matches"
                [class.active]="isActive(match)">
                <a>{{match}}</a>
            </li>
        </ul>`
})
export class TypeaheadContainer implements AfterViewInit, OnDestroy {
    public active: any;
    public matches = [];
    private matchesSubscription: Subscription<any>;
    @ViewChild ('thContainer') private listEl: ElementRef;

    constructor(@Inject(TH_MATCHES_TOKEN) matches$: Observable<any>,
                @Inject(TH_NATIVE_ELEMENT_TOKEN) private thNativeElement: any[],
                private elementRef: ElementRef,
                private loader: DynamicComponentLoader,
                private renderer: Renderer,
                private position: UiPositionUtil) {


        // AsyncPipe doesn't work as needed, since it register late (ngAfterViewInit)
        // the first stream is sent to nowhere and it must run after the first change anyway
        this.matchesSubscription = matches$.subscribe(m => this.matches = m);
    }

    ngOnDestroy() {
        this.matchesSubscription.unsubscribe();
    }

    ngAfterViewInit() {
        //let template =
        //    `<li *ngFor="#match of matches"
        //        [class.active]="isActive(match)">
        //        <a>{{match}}</a>
        //    </li>`;
        //this.loader.loadIntoLocation(toComponent(template), this.elementRef, 'mock').then(componentRef => componentRef.instance.matches = this.matches);

        this.setPosition();

    }

    private isActive(value: any): boolean {
        return this.active === value;
    }

    private setPosition() {
        let nativeListElement = this.listEl.nativeElement;
        let pos = this.position.positionElements(
            this.thNativeElement,
            nativeListElement,
            'bottom-left', false);

        this.renderer.setElementStyle(nativeListElement, 'top', pos.top + 'px');
        this.renderer.setElementStyle(nativeListElement, 'left', pos.left + 'px');
        this.renderer.setElementStyle(nativeListElement, 'display', 'block');
    }
}
