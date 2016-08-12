import { ComponentRef, ElementRef, ResolvedReflectiveProvider, OnDestroy, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { DomSanitizationService, SafeStyle } from '@angular/platform-browser';
/**
 * A base class that expose customisation methods in derived components.
 * Capabilities: Add/Remove styls, Add/Remove classes, listen to animation/transition end event,
 * add components
 */
export declare class BaseDynamicComponent implements OnDestroy {
    protected sanitizer: DomSanitizationService;
    protected el: ElementRef;
    animationEnd$: Observable<'transition' | 'animation'>;
    protected animationEnd: Subject<'transition' | 'animation'>;
    protected style: {
        [prop: string]: string;
    };
    protected styleStr: SafeStyle;
    protected cssClass: SafeStyle;
    protected classArray: string[];
    private applyOnNextTurn;
    constructor(sanitizer: DomSanitizationService, el: ElementRef);
    activateAnimationListener(): void;
    /**
     * Set a specific inline style on the overlay host element.
     * @param prop The style key
     * @param value The value, undefined to remove
     * @returns {ModalOverlay}
     */
    setStyle(prop: string, value: string): this;
    /**
     * Remove's all inline styles from the overlay host element.
     */
    clearStyles(): void;
    addClass(css: string, nextTurn?: boolean): void;
    removeClass(css: string, nextTurn?: boolean): void;
    ngOnDestroy(): void;
    protected applyStyle(): void;
    protected applyClasses(nextTurn: boolean): void;
    /**
     * Add a component, supply a view container ref.
     * Note: The components vcRef will result in a sibling.
     * @param type The component to add
     * @param vcRef The container to add to
     * @param bindings Bindings to use (added on top of the ViewContainerRef)
     * @returns {Promise<ComponentRef<any>>}
     */
    protected _addComponent<T>(type: any, vcRef: ViewContainerRef, bindings?: ResolvedReflectiveProvider[]): ComponentRef<T>;
    private onEndTransition();
    private onEndAnimation();
    private _addClass(css, nextTurn?);
    private _removeClass(css, nextTurn?);
}
