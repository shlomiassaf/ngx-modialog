import {Component, ViewEncapsulation} from 'angular2/core';

import {ModalComponent} from '../../models/tokens';
import {DialogRef} from '../../models/dialog-ref';
import {DropInPreset, DROP_IN_TYPE} from './presets/dropin-preset';


@Component({
    selector: 'modal-dialog',
    encapsulation: ViewEncapsulation.None,
    template:
    /* tslint:disable */
`
<form class="vex-dialog-form">
    <div class="vex-dialog-message">{{context.message}}</div>
    <div *ngIf="showInput" class="vex-dialog-input">
        <input name="vex" 
               type="text" 
               class="vex-dialog-prompt-input"
               [(ngModel)]="promptValue" 
               placeholder="{{context.placeholder}}">
    </div>
    <div class="vex-dialog-buttons">
        <button type="button" 
                class="vex-dialog-button-primary vex-dialog-button vex-first"
                (click)="onSubmit()">OK</button>
        <button *ngIf="showButtons"
                type="button" 
                class="vex-dialog-button-secondary vex-dialog-button vex-last"
                (click)="dialog.dismiss()">Cancel</button>
    </div>
</form>
`
    /* tslint:enable */
})
export class DropInModal implements ModalComponent<DropInPreset> {
    promptValue: string;
    get showInput(): boolean {
        return this.context.dropInType === DROP_IN_TYPE.prompt;
    }

    get showButtons(): boolean {
        return this.context.dropInType !== DROP_IN_TYPE.alert;
    }

    private context: DropInPreset;

    constructor(public dialog: DialogRef<DropInPreset>) {
        this.context = dialog.context;
    }

    onSubmit() {
        if (this.context.dropInType === DROP_IN_TYPE.prompt) {
            this.dialog.close(this.promptValue);
        }
        else {
            this.dialog.close(true);
        }
    }
}
