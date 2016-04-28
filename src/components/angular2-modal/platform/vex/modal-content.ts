import {
    Component,
    DynamicComponentLoader,
    ViewContainerRef,
    ViewChild,
    ViewEncapsulation,
    AfterViewInit
} from 'angular2/core';

import {ModalCompileConfig} from '../../models/tokens';
import {DialogRef} from '../../models/dialog-ref';
import {Modal} from '../../providers/modal';

/**
 * A component that acts as a top level container for an open modal window.
 */
@Component({
    selector: 'modal-content',
    encapsulation: ViewEncapsulation.None,
    /* tslint:disable */
    template:
`<div class="vex-content">
    <div style="display: none" #modalDialog></div>    
    <div class="vex-close"></div>
</div>`
})
export class VexModalContent implements AfterViewInit {
    
    @ViewChild('modalDialog', {read: ViewContainerRef}) private _viewContainer: ViewContainerRef;

    constructor(public dialogRef: DialogRef,
                private _compileConfig: ModalCompileConfig,
                private _modal: Modal,
                private _dlc: DynamicComponentLoader) {
    }

    ngAfterViewInit() {
        this._dlc
            .loadNextToLocation(this._compileConfig.component,
                this._viewContainer,
                this._compileConfig.bindings)
            .then(contentRef => this.dialogRef.contentRef = contentRef);
    }

    onContainerClick($event: any) {
        $event.stopPropagation();
    }

    onClick() {
        return !this.dialogRef.config.isBlocking && this.dialogRef.dismiss();
    }

    documentKeypress(event: KeyboardEvent) {
        // check that this modal is the last in the stack.
        if (!this._modal.isTopMost(this.dialogRef)) return;


        if (this.dialogRef.config.supportsKey(event.keyCode)) {
            this.dialogRef.dismiss();
        }
    }
}
