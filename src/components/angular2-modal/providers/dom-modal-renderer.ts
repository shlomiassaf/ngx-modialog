import {
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  Injectable,
  ReflectiveInjector
} from '@angular/core';

import createComponent from '../framework/createComponent';
import { DialogRef } from '../models/dialog-ref';
import { OverlayRenderer } from '../models/tokens';
import { ModalOverlay } from '../overlay';

@Injectable()
export class DOMOverlayRenderer implements OverlayRenderer {
  constructor(private _cr: ComponentFactoryResolver) {
  }

  render(dialog: DialogRef<any>, vcRef: ViewContainerRef): ComponentRef<ModalOverlay> {
    const b = ReflectiveInjector.resolve([
      { provide: DialogRef, useValue: dialog }
    ]);

    const cmpRef = createComponent(this._cr, ModalOverlay, vcRef, b);

    if (dialog.inElement) {
      vcRef.element.nativeElement.appendChild(cmpRef.location.nativeElement);
    } else {
      document.body.appendChild(cmpRef.location.nativeElement);
    }

    return cmpRef;
  }
}

