import {
  Directive,
  Input,
  ElementRef,
  ViewContainerRef,
  OnDestroy
} from '@angular/core';

import { DialogRef } from '../models/dialog-ref';
import { vcRefStore } from '../models/vc-ref-store';
import { Overlay } from "./overlay.service";

/**
 * A directive use to signal the overlay that the host of this directive
 * is a dialog boundary, i.e: over click outside of the element should close the modal
 * (if non blocking)
 */
@Directive({
  selector: '[overlayDialogBoundary]'
})
export class OverlayDialogBoundary {
  constructor(el: ElementRef, dialogRef: DialogRef<any>) {
    if (dialogRef && el.nativeElement) {
      dialogRef.overlayRef.instance.setClickBoundary(el.nativeElement);
    }
  }

}

@Directive({
  selector: '[overlayTarget]'
})
export class OverlayTarget implements OnDestroy {
  @Input('overlayTarget') set targetKey(value: string) {
    this._targetKey = value;
    if (value) {
      vcRefStore.setVCRef(value, this.vcRef);
    }
  }

  private _targetKey: string;

  constructor(private vcRef: ViewContainerRef) {}

  ngOnDestroy() {
    if (this._targetKey) {
      vcRefStore.delVCRef(this._targetKey, this.vcRef);
    }
  }
}
