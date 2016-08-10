import {
  ViewContainerRef,
  ComponentFactoryResolver,
  ResolvedReflectiveProvider,
  Injectable
} from '@angular/core';

import createComponent from '../framework/createComponent';
import { DialogRef } from '../models/dialog-ref';
import { ModalRenderer } from '../models/tokens';

@Injectable()
export class DOMModalRenderer implements ModalRenderer {
  constructor(private _cr: ComponentFactoryResolver) {
  }

  render(type: any,
         viewContainer: ViewContainerRef,
         bindings: ResolvedReflectiveProvider[],
         dialog: DialogRef<any>): DialogRef<any> {


    const cmpRef = createComponent(this._cr, type, viewContainer, bindings);

    if (dialog.inElement) {
      viewContainer.element.nativeElement.appendChild(cmpRef.location.nativeElement);
    } else {
      document.body.appendChild(cmpRef.location.nativeElement);
    }

    dialog.onDestroy.subscribe( () => {
      if (typeof cmpRef.instance.canDestroy === 'function') {
        cmpRef.instance.canDestroy().then ( () => cmpRef.destroy() );
      } else {
        cmpRef.destroy();
      }
    });

    return dialog;
  }
}

