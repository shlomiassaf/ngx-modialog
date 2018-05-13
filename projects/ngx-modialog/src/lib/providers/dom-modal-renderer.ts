import {
  ApplicationRef,
  ViewContainerRef,
  ComponentRef,
  Injector,
  Injectable
} from '@angular/core';

import { createComponent } from '../framework/createComponent';
import { DialogRef } from '../models/dialog-ref';
import { OverlayRenderer } from '../models/tokens';
import { ModalOverlay } from '../overlay/index';

@Injectable()
export class DOMOverlayRenderer implements OverlayRenderer {

  private isDoc: boolean = !(typeof document === 'undefined' || !document);

  constructor(private appRef: ApplicationRef, private injector: Injector) { }

  render(dialog: DialogRef<any>, vcRef: ViewContainerRef, injector?: Injector): ComponentRef<ModalOverlay> {
    if (!injector) {
      injector = this.injector;
    }

    const cmpRef = createComponent({
      component: ModalOverlay,
      vcRef,
      injector: Injector.create([
        { provide: DialogRef, useValue: dialog }
      ], injector)
    });

    if (!vcRef) {
      this.appRef.attachView(cmpRef.hostView);

      // TODO: doesn't look like this is needed, explore. leaving now to be on the safe side.
      dialog.onDestroy.subscribe( () => this.appRef.detachView(cmpRef.hostView) );
    }

    if (vcRef && dialog.inElement) {
      vcRef.element.nativeElement.appendChild(cmpRef.location.nativeElement);
    } else if (this.isDoc) {
      document.body.appendChild(cmpRef.location.nativeElement);
    }

    return cmpRef;
  }
}

