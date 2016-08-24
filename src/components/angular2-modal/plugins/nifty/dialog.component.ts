import {
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  ResolvedReflectiveProvider,
  ComponentRef,
  Renderer
} from '@angular/core';

import {
  createComponent,
  DialogRef,
  ModalComponent
} from '../../../../components/angular2-modal';

import { DialogPreset, NiftyButtonConfig, NiftyButtonClickEvent } from './presets/dialog-preset';

@Component({
  selector: 'nifty-dialog',
  styles: [ require('./dialog.styles.css') as string ],
  encapsulation: ViewEncapsulation.None,
  template:
`<div class="nifty-dialog">
  <div class="nifty-title">{{dialog.context.title}}</div>
  <div class="nifty-body">{{dialog.context.message}}</div>
  <nifty-buttons [buttons]="dialog.context.buttons" (onButtonClick)="onButtonClick($event)"></nifty-buttons>
</div>`
})
export class NiftyDialog implements ModalComponent<DialogPreset> {

  constructor(public dialog: DialogRef<DialogPreset>) {}

  onButtonClick($event: NiftyButtonClickEvent) {
    $event.btn.onClick(this, $event.$event);
  }
}

/**
 * A Dialog is a
 *
 */
@Component({
  selector: 'nifty-buttons',
  encapsulation: ViewEncapsulation.None,
  template: `<div class="nifty-buttons">
    <button type="button" 
         *ngFor="let btn of buttons;"
         [class]="btn.cssClass"
         (click)="onClick(btn, $event)">{{btn.caption}}</button>
</div>`
})
export class NiftyButtons {

  /**
   * A collection of button configurations, each configuration is a button to display.
   */
  @Input() public buttons: NiftyButtonConfig[];

  /**
   * Emitted when a button was clicked
   * @type {EventEmitter<VEXButtonClickEvent>}
   */
  @Output() public onButtonClick = new EventEmitter<NiftyButtonClickEvent>();

  onClick(btn: any, $event: MouseEvent) {
    $event.stopPropagation();
    this.onButtonClick.emit({btn, $event});
  }
}