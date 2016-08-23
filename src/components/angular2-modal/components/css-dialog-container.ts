import {
  Component,
  ComponentRef,
  ViewContainerRef,
  ResolvedReflectiveProvider,
  ViewChild,
  ViewEncapsulation,
  ElementRef,
  Renderer
} from '@angular/core';

import { BaseDynamicComponent } from './base-dynamic-component';
import { DialogRef } from '../models/dialog-ref';
import { Class } from '../framework/utils';

/**
 * A component that acts as a top level container for an open modal window.
 */
@Component({
  selector: 'css-dialog-container',
  host: {
    '[attr.tabindex]': 'tabIndex',
    '[attr.role]': 'role',
    '[attr.class]': 'cssClass',
    '[attr.style]': 'styleStr'
  },
  encapsulation: ViewEncapsulation.None,
  template: `<span #modalDialog></span>`
})
export class CSSDialogContainer extends BaseDynamicComponent {
  tabIndex: number = -1;
  role: string = 'dialog';
  
  @ViewChild('modalDialog', {read: ViewContainerRef}) private vcRef: ViewContainerRef;

  constructor(public dialog: DialogRef<any>,
              el: ElementRef, renderer: Renderer) {
    super(el, renderer);
    this.activateAnimationListener();
  }

  addComponent<T>(type: Class<T>, bindings?: ResolvedReflectiveProvider[]): ComponentRef<T> {
    return super._addComponent<T>(type, this.vcRef, bindings);
  }

}
