import { ComponentRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Overlay, ModalOverlay } from '../overlay';
import { CloseGuard } from '../models/tokens';
/**
 * API to an open modal window.
 */
export declare class DialogRef<T> {
    overlay: Overlay;
    context: T;
    /**
     * Reference to the overlay component ref.
     * @return {ComponentRef<ModalOverlay>}
     */
    overlayRef: ComponentRef<ModalOverlay>;
    /**
     * States if the modal is inside a specific element.
     */
    inElement: boolean;
    destroyed: boolean;
    /**
     * Fired before dialog is destroyed.
     * No need to unsubscribe, done automatically.
     * Note: Always called.
     * When called, overlayRef might or might not be destroyed.
     */
    onDestroy: Observable<void>;
    private _resultDeferred;
    private _onDestroy;
    private closeGuard;
    constructor(overlay: Overlay, context?: T);
    /**
     * A Promise that is resolved on a close event and rejected on a dismiss event.
     * @returns {Promise<T>|any|*|Promise<any>}
     */
    result: Promise<any>;
    /**
     * Set a close/dismiss guard
     * @param g
     */
    setCloseGuard(guard: CloseGuard): void;
    /**
     *  Close the modal with a return value, i.e: result.
     */
    close(result?: any): void;
    /**
     *  Close the modal without a return value, i.e: cancelled.
     *  This call is automatically invoked when a user either:
     *  - Presses an exit keyboard key (if configured).
     *  - Clicks outside of the modal window (if configured).
     *  Usually, dismiss represent a Cancel button or a X button.
     */
    dismiss(): void;
    /**
     * Gracefully close the overlay/dialog with a rejected result.
     * Does not trigger canDestroy on the overlay.
     */
    bailOut(): void;
    destroy(): void;
    private _fireHook<T>(name);
}
