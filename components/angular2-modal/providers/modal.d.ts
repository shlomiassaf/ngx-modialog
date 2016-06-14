import { Type, ViewContainerRef, ResolvedReflectiveProvider } from '@angular/core';
import { ModalRenderer, ModalBackdropComponent, ModalDropInFactory } from '../models/tokens';
import { DialogRef } from '../angular2-modal';
import { ModalContext, ModalControllingContextBuilder } from '../models/modal-context';
export declare class Modal {
    private _modalRenderer;
    private _backdrop;
    /**
     * A Default view container ref, usually the app root container ref.
     * Make sure not to provide something that might get destroyed, it will destroy the modals too.
     * The container is used as logical view holder, elements might be moved.
     * Has to be set manually until we can find a way to get it automatically.
     */
    defaultViewContainer: ViewContainerRef;
    private _dropIn;
    constructor(_modalRenderer: ModalRenderer, _backdrop: ModalBackdropComponent, _dropIn: ModalDropInFactory);
    alert(): ModalControllingContextBuilder<any>;
    prompt(): ModalControllingContextBuilder<any>;
    confirm(): ModalControllingContextBuilder<any>;
    /**
     * Opens a modal window inside an existing component.
     * If
     * @param componentType The angular Component to render as the modal content.
     * @param bindings Resolved providers that will inject into the component provided.
     * @param context The context for the modal, attached to the dialog instance, DialogRef.context.
     *        Default: {}
     * @param viewContainer The element to block using the modal.
     *        Default: The value set in defaultViewContainer.
     * @param inside If true, render's the component inside the ViewContainerRef,
     *        otherwise render's the component in the root element (body in DOM)
     *        Default: true if ViewContainer supplied, false if not supplied.
     * @returns {Promise<DialogRef>}
     */
    open(componentType: Type, context?: ModalContext, bindings?: ResolvedReflectiveProvider[], viewContainer?: ViewContainerRef, inside?: boolean): Promise<DialogRef<any>>;
    /**
     * Check if a given DialogRef is the top most ref in the stack.
     * TODO: distinguish between body modal vs in element modal.
     * @param dialogRef
     * @returns {boolean}
     */
    isTopMost(dialogRef: DialogRef<any>): boolean;
    stackPosition(dialogRef: DialogRef<any>): number;
    stackLength: number;
}
