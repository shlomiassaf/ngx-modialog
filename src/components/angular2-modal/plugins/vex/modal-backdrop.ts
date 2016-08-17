import {
    Component,
    ViewEncapsulation,
    OnDestroy
} from '@angular/core';
import { DialogRef, supportsKey } from '../../../../components/angular2-modal';
import { Modal } from './modal';
import { VEXModalContext } from './modal-context';

let dialogRefCount = 0;

/**
 * Represents the modal backdrop.
 */
@Component({
    selector: 'modal-backdrop',
    host: {
        '[class.in-element]': 'dialog.inElement',
        '[style.position]': 'hs.ps',
        '[style.height]': 'hs.sz',
        '[style.width]': 'hs.sz',
        '[style.top]': 'hs.pt',
        '[style.left]': 'hs.pt',
        '[style.right]': 'hs.pt',
        '[style.bottom]': 'hs.pt',
        '(body:keydown)': 'documentKeypress($event)'
    },
    styleUrls: [
        'components/angular2-modal/plugins/vex/modal-backdrop.css'
    ],
    encapsulation: ViewEncapsulation.None,
    template:
`<div [class]="cssClass">
    <div [class]="dialog.context.overlayClassName"></div>
    <modal-content></modal-content>    
</div>`
})
export class VexModalBackdrop implements OnDestroy {
    private hs: any = {};

    constructor(
        private dialog: DialogRef<VEXModalContext>,
        private _modal: Modal) {
        dialogRefCount++;
        document.body.classList.add('vex-open');

        if (dialog.inElement) {
            this.hs.ps = 'absolute';
            this.hs.sz = '100%';
            this.hs.pt = 0;
        }
    }

    get cssClass(): string {
        return `vex vex-theme-${this.dialog.context.className}`;
    }

    ngOnDestroy() {
        if (--dialogRefCount === 0) {
            document.body.classList.remove('vex-open');
        }
    }

    documentKeypress(event: KeyboardEvent) {
        // check that this modal is the last in the stack.
        if (!this._modal.isTopMost(this.dialog)) return;

        if (supportsKey(event.keyCode, <any>this.dialog.context.keyboard)) {
            this.dialog.dismiss();
        }
    }
}
