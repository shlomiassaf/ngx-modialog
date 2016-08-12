import { ViewContainerRef, ComponentRef } from '@angular/core';
import { DialogRef } from '../../models/dialog-ref';
import { OverlayRenderer } from '../../models/tokens';
import { ModalOverlay } from '../../overlay/overlay.component';
export declare class JSNativeModalRenderer implements OverlayRenderer {
    render(dialog: DialogRef<any>, vcRef: ViewContainerRef): ComponentRef<ModalOverlay>;
}
