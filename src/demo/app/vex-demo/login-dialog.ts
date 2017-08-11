import { Component, ViewEncapsulation } from '@angular/core';

import { ModalComponent, DialogRef } from 'ngx-modialog';
import { DialogPreset } from 'ngx-modialog/plugins/vex';

@Component({
  selector: 'login-dialog',
  encapsulation: ViewEncapsulation.None,
  template: `<div class="vex-dialog-message">{{context.message}}</div>
    <div *ngIf="context.showInput" class="vex-dialog-input">
        <input name="vex" 
               type="text" 
               class="vex-dialog-prompt-input"
               [(ngModel)]="context.defaultResult" 
               placeholder="{{context.placeholder}}">
    </div>`
})

export class LoginDialog implements ModalComponent<DialogPreset> {
  public context: DialogPreset;

  constructor(public dialog: DialogRef<DialogPreset>) {
    this.context = dialog.context;
  }
}
