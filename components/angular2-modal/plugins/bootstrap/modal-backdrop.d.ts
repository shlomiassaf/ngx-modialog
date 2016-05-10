import { OnDestroy } from '@angular/core';
import { DialogRef } from '../../models/dialog-ref';
import { BSModalContext } from './modal-context';
/**
 * Represents the modal backdrop.
 */
export declare class BSModalBackdrop implements OnDestroy {
    private position;
    private size;
    private point;
    constructor(dialog: DialogRef<BSModalContext>);
    ngOnDestroy(): void;
}
