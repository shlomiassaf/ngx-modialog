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
import {NgIf,NgFor} from 'angular2/common';

import {UiPositionUtil} from 'ng2-bs-core';
import {TypeaheadMatchItem} from './typeahead';

function buildTemplate(meta: TypeaheadContainerTemplateMeta): string {
    return meta.containerHead + meta.loading + meta.matchContainerHead +
        meta.match + meta.matchContainerFoot + meta.containerFoot;
}

const DEFAULT_TEMPLATE_META: TypeaheadContainerTemplateMeta = {
    containerHead: `<ul #thContainer class="dropdown-menu">`,
    loading: `<li class="text-center" *ngIf="showLoading"><span>Loading...</span></li>`,
    matchContainerHead: `<li *ngFor="#match of matches" [class.active]="isActive(match)">`,
    match: `<a href="#" tabindex="-1" (click)="onMatchSelect($event, match)" [innerHtml]="match.key"></a>`,
    matchContainerFoot: `</li>`,
    containerFoot: `</ul>`
};
const DEFAULT_TEMPLATE = buildTemplate(DEFAULT_TEMPLATE_META);

export interface TypeaheadContainerTemplateMeta {
    containerHead?: string;
    containerFoot?: string;
    matchContainerHead?: string;
    matchContainerFoot?: string;
    loading?: string;
    match?: string;
}

/**
 * Generate a template for the TypeaheadContainer.
 * @param meta
 * @returns {string}
 */
export function generateTemplate(meta: TypeaheadContainerTemplateMeta): string {
    return buildTemplate(
        {
            containerHead: meta.containerHead || DEFAULT_TEMPLATE_META.containerHead,
            containerFoot: meta.containerFoot || DEFAULT_TEMPLATE_META.containerFoot,
            matchContainerHead: meta.matchContainerHead || DEFAULT_TEMPLATE_META.matchContainerHead,
            matchContainerFoot: meta.matchContainerFoot || DEFAULT_TEMPLATE_META.matchContainerFoot,
            loading: meta.loading || DEFAULT_TEMPLATE_META.loading,
            match: meta.match || DEFAULT_TEMPLATE_META.match
        }
    );
}

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
    public selectedMatch: any;
    public active: any;
    public matches: TypeaheadMatchItem<any>[] = [];
    @Output() public matchSelect:EventEmitter<any> = new EventEmitter();

    private showLoading: boolean;
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

    /**
     * Hide the popup container.
     * TODO: Returns a promise to support animations in the future.
     * @returns {Promise<void>}
     */
    hide(): Promise<any> {
        // TODO: on implementation save state so animation will not run when running or when hidden
        // the same promise should return if animation is running.
        this.renderer.setElementStyle( this.listEl.nativeElement, 'display', 'none');
        return Promise.resolve();
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
        this.selectedMatch = match;

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
