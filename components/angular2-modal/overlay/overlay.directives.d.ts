import { ElementRef, ViewContainerRef, OnDestroy } from '@angular/core';
import { DialogRef } from '../models/dialog-ref';
/**
 * A directive use to signal the overlay that the host of this directive
 * is a dialog boundary, i.e: over click outside of the element should close the modal
 * (if non blocking)
 */
export declare class OverlayDialogBoundary {
    constructor(el: ElementRef, dialogRef: DialogRef<any>);
}
export declare class OverlayTarget implements OnDestroy {
    private vcRef;
    targetKey: string;
    private _targetKey;
    constructor(vcRef: ViewContainerRef);
    ngOnDestroy(): void;
}
