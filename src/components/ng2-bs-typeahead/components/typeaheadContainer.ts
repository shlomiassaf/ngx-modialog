import {
    Component,
    Output,
    EventEmitter,
    Renderer,
    Inject,
    ElementRef,
    ViewChild,
    AfterViewInit,
    OnDestroy
} from 'angular2/core';

import {Observable, Subscription} from 'rxjs/Rx';
import {NgFor} from 'angular2/common';

import {UiPositionUtil} from 'ng2-bs-core';

const DEFAULT_TEMPLATE: string =
    `<ul #thContainer class="dropdown-menu">
        <li *ngFor="#match of matches"
            [class.active]="isActive(match)">
             <a href="#"
                tabindex="-1"
                (click)="onMatchSelect($event, match)"
                [innerHtml]="match"></a>
        </li>
    </ul>`;

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
    template: DEFAULT_TEMPLATE
})
export class TypeaheadContainer implements AfterViewInit, OnDestroy {
    public active: any;
    public matches = [];
    @Output() public matchSelect:EventEmitter<any> = new EventEmitter();


    private matchesSubscription: Subscription<any>;
    @ViewChild ('thContainer') private listEl: ElementRef;

    constructor(@Inject(TH_MATCHES_TOKEN) matches$: Observable<any>,
                @Inject(TH_NATIVE_ELEMENT_TOKEN) private thNativeElement: any[],
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
        this.setPosition();
    }

    selectActive() {
        this.onMatchSelect(null, this.active);
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

    private onMatchSelect(event: MouseEvent, match: any) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }

        this.matchSelect.emit(match);

        return false;
    }

    static get DEFAULT_TEMPLATE(): string {
        return DEFAULT_TEMPLATE;
    }
}
