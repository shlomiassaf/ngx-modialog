import {
  ViewContainerRef,
  ComponentRef,
  Injector,
  Injectable,
  ReflectiveInjector
} from '@angular/core';

import { createComponent } from '../framework/createComponent';
import { DialogRef } from '../models/dialog-ref';
import { OverlayRenderer } from '../models/tokens';
import { ModalOverlay } from '../overlay/index';

@Injectable()
export class DOMOverlayRenderer implements OverlayRenderer {

  render(dialog: DialogRef<any>, vcRef: ViewContainerRef, injector?: Injector): ComponentRef<ModalOverlay> {
    const bindings = ReflectiveInjector.resolve([
      { provide: DialogRef, useValue: dialog }
    ]);

    const cmpRef = createComponent({
      component: ModalOverlay,
      vcRef,
      injector,
      bindings
    });

    if (dialog.inElement) {
      vcRef.element.nativeElement.appendChild(cmpRef.location.nativeElement);
    } else {
      document.body.appendChild(cmpRef.location.nativeElement);
    }

    return cmpRef;
  }
}

