import {
  ViewContainerRef,
  ComponentResolver,
  ComponentRef,
  ResolvedReflectiveProvider,
  ReflectiveInjector,
  Injectable,
  Type
} from '@angular/core';


import { DialogRef } from '../models/dialog-ref';
import { ModalRenderer } from '../models/tokens';

@Injectable()
export class DOMModalRenderer implements ModalRenderer {
  constructor(private _cr: ComponentResolver) {
  }

  render(type: Type,
         viewContainer: ViewContainerRef,
         bindings: ResolvedReflectiveProvider[],
         dialog: DialogRef<any>): Promise<DialogRef<any>> {

    return this._cr.resolveComponent(type)
      .then(cmpFactory => {
        const ctxInjector = viewContainer.parentInjector;
        const childInjector = Array.isArray(bindings) && bindings.length > 0 ?
          ReflectiveInjector.fromResolvedProviders(bindings, ctxInjector) : ctxInjector;
        return viewContainer.createComponent(cmpFactory, viewContainer.length, childInjector);
      })
      .then((cmpRef: ComponentRef<any>) => {
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
      });
  }
}

