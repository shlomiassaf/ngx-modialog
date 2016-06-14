import { OnDestroy } from '@angular/core';
import { DialogRef } from '../../angular2-modal';
import { BSModalContext } from './modal-context';
/**
 * Represents the modal backdrop.
 */
export declare class BSModalBackdrop implements OnDestroy {
    private hs;
    constructor(dialog: DialogRef<BSModalContext>);
    ngOnDestroy(): void;
}
