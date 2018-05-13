import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { CSSDialogContainer, ModalOverlay } from 'ngx-modialog';


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
  template: `<div #clickBoundary class="{{dialog.context.contentClassName}}"><ng-content></ng-content></div>`
})
export class VexCSSDialogContainer extends CSSDialogContainer {
  /**
   * The div that wraps the content of the modal, by default use the class `vex-content`
   */
  @ViewChild('clickBoundary', {read: ElementRef}) public vexContentContainer: ElementRef;


  apply(overlay: ModalOverlay): void {
    overlay.setClickBoundary(this.vexContentContainer.nativeElement);

    if (this.dialog.inElement) {
      this.setStyle('padding', '20px 0 0 0');


      if (this.dialog.context.className === 'bottom-right-corner') {
        this.setStyle('overflow-y', 'hidden');
        this.renderer.setStyle(this.vexContentContainer.nativeElement, 'position', 'absolute');
      }
    }

  }
}
