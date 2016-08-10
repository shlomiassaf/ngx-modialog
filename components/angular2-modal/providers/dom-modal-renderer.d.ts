import { ViewContainerRef, ComponentFactoryResolver, ResolvedReflectiveProvider } from '@angular/core';
import { DialogRef } from '../models/dialog-ref';
import { ModalRenderer } from '../models/tokens';
export declare class DOMModalRenderer implements ModalRenderer {
    private _cr;
    constructor(_cr: ComponentFactoryResolver);
    render(type: any, viewContainer: ViewContainerRef, bindings: ResolvedReflectiveProvider[], dialog: DialogRef<any>): DialogRef<any>;
}
