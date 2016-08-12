import { ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { DialogRef } from '../models/dialog-ref';
import { OverlayRenderer } from '../models/tokens';
import { ModalOverlay } from '../overlay';
export declare class DOMOverlayRenderer implements OverlayRenderer {
    private _cr;
    constructor(_cr: ComponentFactoryResolver);
    render(dialog: DialogRef<any>, vcRef: ViewContainerRef): ComponentRef<ModalOverlay>;
}
