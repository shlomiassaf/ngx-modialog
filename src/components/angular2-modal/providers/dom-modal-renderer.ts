import {
    ViewContainerRef,
    DynamicComponentLoader,
    Renderer,
    ResolvedReflectiveProvider,
    Injectable,
    Type
} from 'angular2/core';

import {DialogRef} from '../models/dialog-ref';
import {ModalRenderer} from '../models/tokens';

@Injectable()
export class DOMModalRenderer implements ModalRenderer {
    constructor(private _dlc: DynamicComponentLoader,
                private _renderer: Renderer) {}

    render(type: Type,
           viewContainer: ViewContainerRef,
           bindings: ResolvedReflectiveProvider[],
           dialog: DialogRef<any>): Promise<DialogRef<any>> {
        return this._dlc.loadNextToLocation(type, viewContainer, bindings)
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

