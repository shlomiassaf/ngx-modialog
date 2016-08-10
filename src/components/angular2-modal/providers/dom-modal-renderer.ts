import {
  ViewContainerRef,
  ComponentFactoryResolver,
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
  constructor(private _cr: ComponentFactoryResolver) {
  }

  render(type: any,
         viewContainer: ViewContainerRef,
         bindings: ResolvedReflectiveProvider[],
         dialog: DialogRef<any>): DialogRef<any> {


    const cmpRef = this.createComponent(type, viewContainer, bindings);

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

  private createComponent(type: any,
                          viewContainer: ViewContainerRef,
                          bindings: ResolvedReflectiveProvider[]): ComponentRef<any> {
    return viewContainer.createComponent(
      this._cr.resolveComponentFactory(type),
      viewContainer.length,
      this.getInjector(viewContainer, bindings)
    );
  }

  private getInjector(viewContainer: ViewContainerRef, bindings: ResolvedReflectiveProvider[]) {
    const ctxInjector = viewContainer.parentInjector;
    return Array.isArray(bindings) && bindings.length > 0 ?
      ReflectiveInjector.fromResolvedProviders(bindings, ctxInjector) : ctxInjector;

  }
}

