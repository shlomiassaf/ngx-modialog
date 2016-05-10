import { ViewContainerRef, ComponentResolver, Renderer, ResolvedReflectiveProvider, Type } from '@angular/core';
import { DialogRef } from '../models/dialog-ref';
import { ModalRenderer } from '../models/tokens';
export declare class DOMModalRenderer implements ModalRenderer {
    private _cr;
    private _renderer;
    constructor(_cr: ComponentResolver, _renderer: Renderer);
    render(type: Type, viewContainer: ViewContainerRef, bindings: ResolvedReflectiveProvider[], dialog: DialogRef<any>): Promise<DialogRef<any>>;
}
