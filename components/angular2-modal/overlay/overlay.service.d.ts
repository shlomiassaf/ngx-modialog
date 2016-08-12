import { ViewContainerRef } from '@angular/core';
import { OverlayRenderer, OverlayConfig } from '../models/tokens';
import { DialogRef } from '../angular2-modal';
import { OverlayContext } from '../models/overlay-context';
export declare abstract class Overlay {
    private _modalRenderer;
    /**
     * A Default view container ref, usually the app root container ref.
     * Make sure not to provide something that might get destroyed, it will destroy the modals too.
     * The container is used as logical view holder, elements might be moved.
     * Has to be set manually until we can find a way to get it automatically.
     */
    defaultViewContainer: ViewContainerRef;
    stackLength: number;
    constructor(_modalRenderer: OverlayRenderer);
    /**
     * Check if a given DialogRef is the top most ref in the stack.
     * TODO: distinguish between body modal vs in element modal.
     * @param dialogRef
     * @returns {boolean}
     */
    isTopMost(dialogRef: DialogRef<any>): boolean;
    stackPosition(dialogRef: DialogRef<any>): number;
    /**
     * Opens a modal window inside an existing component.
     */
    open<T extends OverlayContext>(config: OverlayConfig): DialogRef<T>[];
    private createOverlay(renderer, vcRef, config);
}
