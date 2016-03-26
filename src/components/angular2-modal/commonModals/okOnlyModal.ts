import {Component, provide, ElementRef, Injector} from 'angular2/core';

import {ICustomModal, ICustomModalComponent} from '../models/ICustomModal';
import {ModalDialogInstance} from '../models/ModalDialogInstance';

/**
 * @deprecated
 */
export class OKOnlyContent {
    constructor(
        public title: string = 'Hello World Title',
        public body: string = 'Hello World Body!',
        public okText: string = 'OK'
    ) {}
}

/**
 * @deprecated
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
        console.warn('DEPRECATED: OKOnlyModal will not be available in next version of ' +
            'angular2-modal, please move to the preset API.');
    }

    ok() {
        this.dialog.close(true);
    }
}
