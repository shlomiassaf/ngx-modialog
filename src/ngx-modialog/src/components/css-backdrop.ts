import {
  Component,
  ElementRef,
  ViewEncapsulation,
  Renderer2
} from '@angular/core';

import { BaseDynamicComponent } from './base-dynamic-component';

/**
 * Represents the modal backdrop shaped by CSS.
 */
@Component({
  selector: 'css-backdrop',
  host: {
    '[attr.class]': 'cssClass',
    '[attr.style]': 'styleStr'
  },
  encapsulation: ViewEncapsulation.None,
  template: ``
})
export class CSSBackdrop extends BaseDynamicComponent {
  public cssClass: string;
  public styleStr: string;

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    this.activateAnimationListener();

    const style = {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%'
    };
    Object.keys(style).forEach( k => this.setStyle(k, style[k]) );
  }
}
