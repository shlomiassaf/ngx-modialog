import { ComponentRef, ResolvedReflectiveProvider } from '@angular/core';
import { Overlay } from '../overlay';
import { Class, Maybe } from '../framework/utils';
import { OverlayConfig } from '../models/tokens';
import { DialogRef } from '../angular2-modal';
import { ModalControllingContextBuilder } from '../models/overlay-context';
export declare class UnsupportedDropInError extends Error {
    constructor(dropInName: string);
}
export declare abstract class Modal {
    overlay: Overlay;
    constructor(overlay: Overlay);
    alert(): ModalControllingContextBuilder<any>;
    prompt(): ModalControllingContextBuilder<any>;
    confirm(): ModalControllingContextBuilder<any>;
    /**
     * Opens a modal window inside an existing component.
     * @param componentType The angular Component to render as the modal content.
     * @param config Additional settings.
     * @returns {Promise<DialogRef>}
     */
    open(componentType: any, config?: OverlayConfig): Promise<DialogRef<any>>;
    /**
     * A Hook that enables derived classes to add content to the overlay.
     * @param dialogRef
     * @param type
     * @param bindings
     * @returns {MaybeDialogRef<any>}
     */
    protected abstract create(dialogRef: DialogRef<any>, type: any, bindings?: ResolvedReflectiveProvider[]): Maybe<DialogRef<any>>;
    /**
     * A helper function for derived classes to create backdrop & container
     * @param dialogRef
     * @param backdrop
     * @param container
     * @returns { backdropRef: ComponentRef<B>, containerRef: ComponentRef<C> }
     */
    protected createModal<B, C>(dialogRef: DialogRef<any>, backdrop: Class<B>, container: Class<C>): {
        backdropRef: ComponentRef<B>;
        containerRef: ComponentRef<C>;
    };
}
