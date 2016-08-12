import {
  Component,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild,
  ViewEncapsulation,
  AfterViewInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import {
  createComponent,
  DialogRef,
  ModalComponent
} from '../../../../components/angular2-modal';

import { DialogPreset } from './presets/dialog-preset';
import { DropInPreset } from './presets/dropin-preset';

export interface VEXButtonHandler {
  (cmp: ModalComponent<DialogPreset>, $event: MouseEvent): void;
}

/**
 * Interface for button definition
 */
export interface VEXButtonConfig {
  cssClass: string;
  caption: string;
  onClick: VEXButtonHandler;
}

export interface VEXButtonClickEvent {
  btn: VEXButtonConfig;
  $event: MouseEvent;
}

/**
 * A Dialog is a
 */
@Component({
  selector: 'vex-dialog-buttons',
  encapsulation: ViewEncapsulation.None,
  template: `<div class="vex-dialog-buttons">
    <button type="button" 
         *ngFor="let btn of buttons;"
         [class]="btn.cssClass"
         (click)="onClick(btn, $event)">{{btn.caption}}</button>
</div>`
})
export class VEXDialogButtons {

  /**
   * A collection of button configurations, each configuration is a button to display.
   */
  @Input() public buttons: VEXButtonConfig[];

  /**
   * Emitted when a button was clicked
   * @type {EventEmitter<VEXButtonClickEvent>}
   */
  @Output() public onButtonClick = new EventEmitter<VEXButtonClickEvent>();

  onClick(btn: any, $event: MouseEvent) {
    $event.stopPropagation();
    this.onButtonClick.emit({btn, $event});
  }
}

/**
 * A Dialog with customized buttons wrapped in a form.
 *
 */
@Component({
  selector: 'modal-dialog',
  encapsulation: ViewEncapsulation.None,
  template: `<form class="vex-dialog-form">
    <div style="display: none" #modalDialog></div> 
    <vex-dialog-buttons [buttons]="context.buttons"
                        (onButtonClick)="onButtonClick($event)"></vex-dialog-buttons>
</form>`
})
export class DialogFormModal implements AfterViewInit, ModalComponent<DialogPreset> {
  private context: DialogPreset;
  @ViewChild('modalDialog', {read: ViewContainerRef}) private _viewContainer: ViewContainerRef;

  constructor(public dialog: DialogRef<DialogPreset>,
              private _cr: ComponentFactoryResolver) {
    this.context = dialog.context;
  }

  ngAfterViewInit() {
    /*  TODO:
     In RC5 dynamic component creation is no longer async.
     Somewhere down the pipe of the created component a value change happens that fires
     a CD exception. setTimeout is a workaround that mimics the async behavior.
     Find out the error and remove setTimeout.
     */
    setTimeout( () => {
        createComponent(
          this._cr,
          this.context.content,
          this._viewContainer,
          []
        );
    });
  }

  onButtonClick($event: VEXButtonClickEvent) {
    $event.btn.onClick(this, $event.$event);
  }
}

@Component({
  selector: 'drop-in-dialog',
  encapsulation: ViewEncapsulation.None,
  template:
`<div class="vex-dialog-message">{{context.message}}</div>
 <div *ngIf="context.showInput" class="vex-dialog-input">
   <input #input
          autofocus
          name="vex" 
          type="text" 
          class="vex-dialog-prompt-input"
           (change)="context.defaultResult = input.value" 
          placeholder="{{context.placeholder}}">
 </div>
 <div *ngIf="context.showCloseButton" 
      [class]="context.closeClassName"
      (click)="dialog.dismiss()"></div>`
})
export class FormDropIn implements ModalComponent<DropInPreset> {
  private context: DropInPreset;

  constructor(public dialog: DialogRef<DropInPreset>) {
    this.context = dialog.context;
  }
}
