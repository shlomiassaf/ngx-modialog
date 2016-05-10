import {Component, ViewEncapsulation, OnDestroy} from '@angular/core';
import {DialogRef} from '../../models/dialog-ref';

import {BSModalContainer} from './modal-container';
import {BSModalContext} from './modal-context';

let dialogRefCount = 0;

/**
 * Represents the modal backdrop.
 */
@Component({
    selector: 'modal-backdrop',
    host: {
        '[style.position]': 'position',
        '[style.height]': 'size',
        '[style.width]': 'size',
        '[style.top]': 'point',
        '[style.left]': 'point',
        '[style.right]': 'point',
        '[style.bottom]': 'point'
    },
    directives: [BSModalContainer],
    encapsulation: ViewEncapsulation.None,
    template:
`<div [style.position]="position" class="modal-backdrop fade in"></div>
<modal-container></modal-container>`
})
export class BSModalBackdrop implements OnDestroy {
    private position: string;
    private size: string;
    private point: string;
    
    constructor(dialog: DialogRef<BSModalContext>) {
        dialogRefCount++;
        document.body.classList.add('modal-open');

        if (!dialog.inElement) {
            this.position = this.size = this.point = null;
        } else {
            this.position = 'absolute';
            this.size = '100%';
            this.point = '0';
        }
    }
    
    ngOnDestroy() {
        if (--dialogRefCount === 0) {
            document.body.classList.remove('modal-open');
        }
    }
}
