import { OnDestroy } from '@angular/core';
import { DialogRef } from '../../angular2-modal';
import { BSModalContext } from './modal-context';
/**
 * Represents the modal backdrop.
 */
export declare class BSModalBackdrop implements OnDestroy {
    fadeState: 'in' | 'out';
    private hs;
    constructor(dialog: DialogRef<BSModalContext>);
    /**
     * Temp workaround for animation where destruction of the top level component does not
     * trigger child animations. Solution should be found either in animation module or in design
     * of the modal component tree.
     * @returns {Promise<void>}
     */
    canDestroy(): Promise<void>;
    ngOnDestroy(): void;
}
