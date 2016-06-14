import { OnDestroy } from '@angular/core';
import { DialogRef } from '../../models/dialog-ref';
import { Modal } from './modal';
import { VEXModalContext } from './modal-context';
/**
 * Represents the modal backdrop.
 */
export declare class VexModalBackdrop implements OnDestroy {
    private dialog;
    private _modal;
    private hs;
    constructor(dialog: DialogRef<VEXModalContext>, _modal: Modal);
    cssClass: string;
    ngOnDestroy(): void;
    documentKeypress(event: KeyboardEvent): void;
}
