import { Component, ViewEncapsulation, OnDestroy } from '@angular/core';
import { DialogRef } from '../../models/dialog-ref';

import { BSModalContainer } from './modal-container';
import { BSModalContext } from './modal-context';

let dialogRefCount = 0;

/**
 * Represents the modal backdrop.
 */
@Component({
    selector: 'modal-backdrop',
    host: {
        '[style.position]': 'hs.ps',
        '[style.height]': 'hs.sz',
        '[style.width]': 'hs.sz',
        '[style.top]': 'hs.pt',
        '[style.left]': 'hs.pt',
        '[style.right]': 'hs.pt',
        '[style.bottom]': 'hs.pt'
    },
    directives: [BSModalContainer],
    encapsulation: ViewEncapsulation.None,
    template:
`<div [style.position]="hs.ps" class="modal-backdrop fade in"></div>
<modal-container></modal-container>`
})
export class BSModalBackdrop implements OnDestroy {
    private hs = { ps: null, sz: null, pt: null };

    constructor(dialog: DialogRef<BSModalContext>) {
        dialogRefCount++;
        document.body.classList.add('modal-open');

        if (dialog.inElement) {
            this.hs.ps = 'absolute';
            this.hs.sz = '100%';
            this.hs.pt = '0';
        }
    }
    
    ngOnDestroy() {
        if (--dialogRefCount === 0) {
            document.body.classList.remove('modal-open');
        }
    }
}
