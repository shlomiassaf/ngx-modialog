import {
  Component,
  ElementRef,
  ViewEncapsulation,
  Renderer
} from '@angular/core';

import { BaseDynamicComponent, DialogRef } from 'angular2-modal';

import { MessageModalPreset } from'./presets/message-modal-preset';

@Component({
  selector: 'bs-modal-container',
  host: {
    'tabindex': '-1',
    'role': 'dialog',
    'class': 'modal fade',
    'style': 'position: absolute; display: block'
  },
  encapsulation: ViewEncapsulation.None,
  template:
`<div [ngClass]="dialog.context.dialogClass" 
      [class.modal-lg]="dialog.context.size == \'lg\'"
      [class.modal-sm]="dialog.context.size == \'sm\'">
  <div class="modal-content" style="display:block" role="document" overlayDialogBoundary>
    <ng-content></ng-content>
  </div>    
</div>`
})
export class BSModalContainer extends BaseDynamicComponent {
   constructor(public dialog: DialogRef<MessageModalPreset>,
              el: ElementRef, renderer: Renderer) {
    super(el, renderer);
    this.activateAnimationListener();
  }
}
