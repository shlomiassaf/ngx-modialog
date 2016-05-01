import {
    Component,
    ViewEncapsulation,
    Renderer,
    ViewChild,
    AfterViewInit,
    ElementRef,
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
`<div #backdrop class="vex">
    <div class="vex-overlay" (click)="onClick()"></div>
    <modal-content></modal-content>    
</div>`
})
export class VexModalBackdrop implements AfterViewInit, OnDestroy {
    @ViewChild('backdrop') private _backdropEl: ElementRef;

    constructor(
        private dialog: DialogRef<VEXModalContext>,
        private _modal: Modal,
        private renderer: Renderer) {
        dialogRefCount++;
        document.body.classList.add('vex-open');
    }

    ngAfterViewInit() {
        // class is not bindable.
        this.renderer.setElementClass(this._backdropEl.nativeElement, `vex-theme-${this.dialog.context.className}`, true);
    }

    ngOnDestroy() {
        if (--dialogRefCount === 0) {
            document.body.classList.remove('vex-open');
        }
    }

    onClick() {
        return !this.dialog.context.isBlocking && this.dialog.dismiss();
    }

    documentKeypress(event: KeyboardEvent) {
        // check that this modal is the last in the stack.
        if (!this._modal.isTopMost(this.dialog)) return;

        if (supportsKey(event.keyCode, <any>this.dialog.context.keyboard)) {
            this.dialog.dismiss();
        }
    }
}
