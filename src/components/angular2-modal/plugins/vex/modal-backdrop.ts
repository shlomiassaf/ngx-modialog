import {
    Component,
    ViewEncapsulation,
    OnDestroy
} from '@angular/core';
import { DialogRef } from '../../models/dialog-ref';
import { Modal } from './modal';
import { VEXModalContext } from './modal-context';
import { VexModalContent } from './modal-content';
import { supportsKey, toStyleString } from '../../framework/utils';

let dialogRefCount = 0;

/**
 * Represents the modal backdrop.
 */
@Component({
    selector: 'modal-backdrop',
    host: {
        '[class.in-element]': 'dialog.inElement',
        '[style]': 'hostStyle',
        '(body:keydown)': 'documentKeypress($event)'
    },
    styles: [`
.in-element .vex.vex-theme-default,
.in-element .vex.vex-theme-os,
.in-element .vex.vex-theme-plain,
.in-element .vex.vex-theme-wireframe ,
.in-element .vex.vex-theme-flat-attack,
.in-element .vex.vex-theme-top,
.in-element .vex.vex-theme-bottom-right-corner {
    position: relative;
    padding: 0px;
    width: 100%;
    height: 100%;
}

.in-element .vex-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
}

.in-element modal-content {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding-top: 20px;
    overflow-x: hidden;
    overflow-y: auto
}

.in-element .vex.vex-theme-bottom-right-corner, 
.in-element .vex.vex-theme-bottom-right-corner modal-content {
    overflow-y: hidden
}
.in-element .vex.vex-theme-bottom-right-corner .vex-content {
    position: absolute;
}`
    ],
    directives: [VexModalContent],
    encapsulation: ViewEncapsulation.None,
    template:
`<div [class]="cssClass">
    <div [class]="dialog.context.overlayClassName"></div>
    <modal-content></modal-content>    
</div>`
})
export class VexModalBackdrop implements OnDestroy {
    private hostStyle: string;

    constructor(
        private dialog: DialogRef<VEXModalContext>,
        private _modal: Modal) {
        dialogRefCount++;
        document.body.classList.add('vex-open');

        if (dialog.inElement) {
            this.hostStyle = toStyleString({
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0'
            });
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
