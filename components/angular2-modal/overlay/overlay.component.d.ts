import { ComponentRef, ElementRef, ResolvedReflectiveProvider } from '@angular/core';
import { DomSanitizationService } from '@angular/platform-browser';
import { DialogRef } from '../models/dialog-ref';
import { BaseDynamicComponent } from '../components';
/**
 * Represents the modal overlay.
 */
export declare class ModalOverlay extends BaseDynamicComponent {
    private dialogRef;
    private beforeDestroyHandlers;
    private vcRef;
    constructor(dialogRef: DialogRef<any>, el: ElementRef, sanitizer: DomSanitizationService);
    addComponent<T>(type: any, bindings?: ResolvedReflectiveProvider[]): ComponentRef<T>;
    fullscreen(): void;
    insideElement(): void;
    /**
     * Define an element that click inside it will not trigger modal close.
     * Since events bubble, clicking on a dialog will bubble up to the overlay, a plugin
     * must define an element that represent the dialog, the overlay will make sure no to close when
     * it was clicked.
     * @param element
     */
    setClickBoundary(element: Element): void;
    /**
     * Temp workaround for animation where destruction of the top level component does not
     * trigger child animations. Solution should be found either in animation module or in design
     * of the modal component tree.
     * @returns {Promise<void>}
     */
    canDestroy(): Promise<void>;
    /**
     * A handler running before destruction of the overlay
     * use to delay destruction due to animation.
     * This is part of the workaround for animation, see canDestroy.
     *
     * NOTE: There is no guarantee that the listeners will fire, use dialog.onDestory for that.
     * @param fn
     */
    beforeDestroy(fn: () => Promise<void>): void;
    documentKeypress(event: KeyboardEvent): void;
    ngOnDestroy(): void;
}
