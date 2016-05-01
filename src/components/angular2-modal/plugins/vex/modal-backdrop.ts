import {
    Component,
    ViewEncapsulation,
    OnDestroy
} from 'angular2/core';
import {DialogRef} from '../../models/dialog-ref';
import {Modal} from './modal';
import {VEXModalContext} from './modal-context';
import {VexModalContent} from './modal-content';
import {supportsKey} from '../../framework/utils';

let dialogRefCount = 0;

/**
 * Represents the modal backdrop.
 */
@Component({
    selector: 'modal-backdrop',
    host: {
        '(body:keydown)': 'documentKeypress($event)'
    },
    directives: [VexModalContent],
    encapsulation: ViewEncapsulation.None,
    template:
`<div [class]="cssClass">
    <div [class]="dialog.context.overlayClassName"></div>
    <modal-content></modal-content>    
</div>`
})
export class VexModalBackdrop implements OnDestroy {

    constructor(
        private dialog: DialogRef<VEXModalContext>,
        private _modal: Modal) {
        dialogRefCount++;
        document.body.classList.add('vex-open');
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
