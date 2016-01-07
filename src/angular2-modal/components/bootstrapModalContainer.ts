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
        'class': 'in modal',
        'style': 'display: block',
        '[style.position]': 'position',
        '(body:keydown)': 'documentKeypress($event)',
        '(click)': 'onClick()'
    },
    /* tslint:disable */
    template:
    `<div class="modal-dialog"
         [class.modal-lg]="dialogInstance.config.size == \'lg\'"
         [class.modal-sm]="dialogInstance.config.size == \'sm\'">
         <div class="modal-content" (click)="onContainerClick($event)" style="display: block">
            <div style="display: none" #modalDialog></div>
         </div>
    </div>`
    //TODO: #modalDialog element is not needed but dynamicComponentLoader doesn't seem to have behavior to inject a component the way we want.
    //      We need to replace the #modalDialog element but the current implementation only adds it as a sibling.
    //      see https://github.com/angular/angular/issues/6071
    /* tslint:enable */
})
export class BootstrapModalContainer {
    dialogInstance: ModalDialogInstance;
    public position: string;

    constructor(dialogInstance: ModalDialogInstance) {
        this.dialogInstance = dialogInstance;

        if (!dialogInstance.inElement) {
            this.position = null;
        } else {
            this.position = 'absolute';
        }
    }

    onContainerClick($event) {
        $event.stopPropagation();
    }

    onClick() {
        return !this.dialogInstance.config.isBlocking && this.dialogInstance.dismiss();
    }

    documentKeypress(event: KeyboardEvent) {
        if ( this.dialogInstance.config.keyboard &&
            (<Array<number>>this.dialogInstance.config.keyboard).indexOf(event.keyCode) > -1) {
            this.dialogInstance.dismiss();
        }
    }
}
