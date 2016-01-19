import {Component, provide, ElementRef, Injector} from 'angular2/core';

import {ICustomModal, ICustomModalComponent} from '../models/ICustomModal';
import {ModalDialogInstance} from '../models/ModalDialogInstance';

/**
 * Data definition
 */
export class OKOnlyContent {
    constructor(
        public title: string = 'Hello World Title',
        public body: string = 'Hello World Body!',
        public okText: string = 'OK'
    ) {}
}

/**
 * A 2 state bootstrap modal window, representing 2 possible answer, true/false.
 */
@Component({
    selector: 'modal-content',
    template:
    `<div class="modal-header">
        <h3 class="modal-title">{{context.title}}</h3>
        </div>
        <div class="modal-body">{{context.body}}</div>
        <div class="modal-footer">
            <button class="btn btn-primary" (click)="ok()">{{context.okText}}</button>
        </div>`
})
export class OKOnlyModal implements ICustomModalComponent {
    dialog: ModalDialogInstance;
    context: OKOnlyContent;

    constructor(dialog: ModalDialogInstance, modelContentData: ICustomModal) {
        this.dialog = dialog;
        this.context = <OKOnlyContent>modelContentData;
    }

    ok() {
        this.dialog.close(true);
    }
}
