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

import { NiftyContext } from'./modal-context';

@Component({
  selector: 'nifty-modal-container',
  host: {
    '[attr.tabindex]': 'tabIndex',
    '[attr.role]': 'role'
  },
  encapsulation: ViewEncapsulation.None,
  styles: [ require('./modal-container.styles.css') as any ],
  template:
`<div class="nifty-modal">
  <div class="nifty-content" overlayDialogBoundary>
      <span #dlg></span>
  </div>
</div>`
})
export class NiftyContainer extends BaseDynamicComponent {
  tabIndex: number = -1;
  role: string = 'dialog';
  @ViewChild('dlg', {read: ViewContainerRef}) private vcRef: ViewContainerRef;

  constructor(public dialog: DialogRef<NiftyContext>,
              el: ElementRef, renderer: Renderer) {
    super(el, renderer);
    this.activateAnimationListener();
  }

  addComponent<T>(type: any, bindings?: ResolvedReflectiveProvider[]): ComponentRef<T> {
    return super._addComponent<T>(type, this.vcRef, bindings);
  }
}
