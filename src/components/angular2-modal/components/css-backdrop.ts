import {
  Component,
  ElementRef,
  ViewEncapsulation
} from '@angular/core';
import { DomSanitizationService } from '@angular/platform-browser';

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

  constructor(el: ElementRef, sanitizer: DomSanitizationService) {
    super(sanitizer, el);
    this.activateAnimationListener();

    this.style = {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%'
    } as any;
    this.applyStyle();
  }
}
