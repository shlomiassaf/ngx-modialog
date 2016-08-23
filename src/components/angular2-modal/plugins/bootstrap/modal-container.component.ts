import {
  Component,
  ElementRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  ResolvedReflectiveProvider,
  ComponentRef,
  Renderer
} from '@angular/core';

import { BaseDynamicComponent, DialogRef } from '../../../../components/angular2-modal';

import { MessageModalPreset } from'./presets/message-modal-preset';

@Component({
  selector: 'bs-modal-container',
  encapsulation: ViewEncapsulation.None,
  template:
    `<div [ngClass]="dialog.context.dialogClass" 
      [class.modal-lg]="dialog.context.size == \'lg\'"
      [class.modal-sm]="dialog.context.size == \'sm\'">
  <div class="modal-content" style="display:block" role="document" overlayDialogBoundary>
    <span #dlg></span>
  </div>    
</div>`
})
export class BSModalContainer extends BaseDynamicComponent {
  @ViewChild('dlg', {read: ViewContainerRef}) private vcRef: ViewContainerRef;

  constructor(public dialog: DialogRef<MessageModalPreset>,
              el: ElementRef, renderer: Renderer) {
    super(el, renderer);
  }

  addComponent<T>(type: any, bindings?: ResolvedReflectiveProvider[]): ComponentRef<T> {
    return super._addComponent<T>(type, this.vcRef, bindings);
  }
}
