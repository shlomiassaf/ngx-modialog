import {Component, provide, ElementRef, Injector} from 'angular2/core';
import {NgIf} from 'angular2/common';


import {ICustomModal, ICustomModalComponent} from '../models/ICustomModal';
import {ModalDialogInstance} from '../models/ModalDialogInstance';

/**
 * Data definition
 */
export class YesNoModalContent {
    constructor(
        public title: string = 'Hello World Title',
        public body: string = 'Hello World Body!',
        public hideNo: boolean = false,
        public yesText: string = 'YES',
        public noText: string = 'NO'
    ) {}
}

/**
 * A 2 state bootstrap modal window, representing 2 possible answer, true/false.
 */
@Component({
    selector: 'modal-content',
    directives: [ NgIf ],
    /* tslint:disable */ template:
    `<div class="modal-header">
        <h3 class="modal-title">{{context.title}}</h3>
        </div>
        <div class="modal-body">{{context.body}}</div>
        <div class="modal-footer">
            <button class="btn btn-primary" (click)="ok($event)">{{context.yesText}}</button>
            <button *ngIf="!context.hideNo" class="btn btn-warning" (click)="cancel()">{{context.noText}}</button>
        </div>`
})
export class YesNoModal implements ICustomModalComponent {
    dialog: ModalDialogInstance;
    context: YesNoModalContent;

    constructor(dialog: ModalDialogInstance, modelContentData: ICustomModal) {
        this.dialog = dialog;
        this.context = <YesNoModalContent>modelContentData;
    }

    ok($event) {
        $event.stopPropagation();
        this.dialog.close(true);
    }

    cancel() {
        this.dialog.dismiss();
    }
}
