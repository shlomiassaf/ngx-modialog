import { Component } from 'angular2/core';

import {ModalDialogInstance} from '../models/ModalDialogInstance';

/**
 * A component that acts as a top level container for an open modal window.
 */
@Component({
    selector: 'bootstrap-modal',
    host: {
        'tabindex': '0',
        'role': 'dialog',
        '(body:keydown)': 'documentKeypress($event)',
        '(click)': 'onClick()'
    },
    template:
    `<div class="modal-dialog"
         [class.modal-lg]="dialogInstance.config.size == \'lg\'"
         [class.modal-sm]="dialogInstance.config.size == \'sm\'"></div>`
})
export class BootstrapModalContainer {
    dialogInstance: ModalDialogInstance;

    constructor(dialogInstance: ModalDialogInstance) {
        this.dialogInstance = dialogInstance;
    }

    onClick() {
        !this.dialogInstance.config.isBlocking && this.dialogInstance.dismiss();
    }

    documentKeypress(event: KeyboardEvent) {
        if ( this.dialogInstance.config.keyboard &&
            (<Array<number>>this.dialogInstance.config.keyboard).indexOf(event.keyCode) > -1) {
            this.dialogInstance.dismiss();
        }
    }
}