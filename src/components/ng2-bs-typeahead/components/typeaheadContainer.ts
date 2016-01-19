import {
    Component,
    Renderer,
    Inject,
    ElementRef,
    ViewChild,
    AfterViewInit,
    OnDestroy
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
            <li *ngFor="#match of matches$ | async"
                [class.active]="isActive(match)">
                <a>{{match}}</a>
            </li>
        </ul>`
})
export class TypeaheadContainer implements AfterViewInit {
    @ViewChild ('thContainer') private listEl: ElementRef;
    public active: any;

    constructor(@Inject(TH_MATCHES_TOKEN) private matches$: Observable<any>,
                @Inject(TH_NATIVE_ELEMENT_TOKEN) private thNativeElement: any[],
                private renderer: Renderer,
                private position: UiPositionUtil) {
    }

    ngAfterViewInit() {


    }

    ngAfterViewChecked() {
        this.setPosition();
        this.doS();
    }
    doS() {}

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
