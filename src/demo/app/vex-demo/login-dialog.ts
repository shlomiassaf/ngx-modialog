import {    
    Component,
    ViewEncapsulation
} from '@angular/core';

import {ModalComponent, DialogRef} from '../../../components/angular2-modal';

import {
    DialogPreset,
    VEXDialogButtons
} from '../../../components/angular2-modal/plugins/vex/index';

@Component({
    selector: 'login-dialog',
    directives: [VEXDialogButtons],
    encapsulation: ViewEncapsulation.None,
    template:
        `<div class="vex-dialog-message">{{context.message}}</div>
    <div *ngIf="context.showInput" class="vex-dialog-input">
        <input name="vex" 
               type="text" 
               class="vex-dialog-prompt-input"
               [(ngModel)]="context.defaultResult" 
               placeholder="{{context.placeholder}}">
    </div>`
})

export class LoginDialog implements ModalComponent<DialogPreset> {
    private context: DialogPreset;

    constructor(public dialog: DialogRef<DialogPreset>) {
        this.context = dialog.context;
    }
}
