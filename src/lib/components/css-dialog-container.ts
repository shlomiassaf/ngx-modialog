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
    'tabindex': '-1',
    'role': 'dialog'
  },
  encapsulation: ViewEncapsulation.None,
  template: `<ng-content></ng-content>`
})
export class CSSDialogContainer extends BaseDynamicComponent {

  constructor(public dialog: DialogRef<any>,
              el: ElementRef, renderer: Renderer) {
    super(el, renderer);
    this.activateAnimationListener();
  }
}
