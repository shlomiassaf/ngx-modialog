import {Component, ViewEncapsulation, OnDestroy} from 'angular2/core';
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
        '[style.height]': 'height',
        '[style.width]': 'width',
        '[style.top]': 'top',
        '[style.left]': 'left',
        '[style.right]': 'right',
        '[style.bottom]': 'bottom'
    },
    directives: [BSModalContainer],
    encapsulation: ViewEncapsulation.None,
    template:
`<div [style.position]="position" class="modal-backdrop fade in"></div>
<modal-container></modal-container>`
})
export class BSModalBackdrop implements OnDestroy {
    public position: string;
    public height: string;
    public width: string;
    public top: string;
    public left: string;
    public right: string;
    public bottom: string;
    
    constructor(dialog: DialogRef<BSModalContext>) {
        dialogRefCount++;
        document.body.classList.add('modal-open');
        
        if (!dialog.inElement) {
            this.position = this.width = this.height = null;
            this.top = this.left = this.right = this.bottom = null;
        } else {
            this.position = 'absolute';
            this.height = '100%';
            this.width = '100%';
            this.top = this.left = this.right = this.bottom = '0';
        }
    }
    
    ngOnDestroy() {
        if (--dialogRefCount === 0) {
            document.body.classList.remove('modal-open');
        }
    }
}
