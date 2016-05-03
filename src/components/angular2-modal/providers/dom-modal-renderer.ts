import {
    ViewContainerRef,
    ComponentResolver,
    Renderer,
    ResolvedReflectiveProvider,
    ReflectiveInjector,
    Injectable,
    Type
} from '@angular/core';


import {DialogRef} from '../models/dialog-ref';
import {ModalRenderer} from '../models/tokens';

@Injectable()
export class DOMModalRenderer implements ModalRenderer {
    constructor(private _cr: ComponentResolver,
                private _renderer: Renderer) {}

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
            .then((cmpRef: any) => {
                if (dialog.inElement) {
                    this._renderer.invokeElementMethod(
                        viewContainer.element.nativeElement,
                        'appendChild',
                        [cmpRef.hostView.rootNodes[0]]
                    );
                } else {
                    document.body.appendChild(cmpRef.hostView.rootNodes[0]);
                }

                dialog.destroy = () => cmpRef.destroy();

                return dialog;
            });
    }
}

