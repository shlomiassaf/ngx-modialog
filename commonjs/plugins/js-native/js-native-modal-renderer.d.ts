import { ViewContainerRef, ResolvedReflectiveProvider, Type } from '@angular/core';
import { DialogRef } from '../../models/dialog-ref';
import { ModalRenderer } from '../../models/tokens';
import { JSNativeModalContext } from './modal-context';
export declare class JSNativeModalRenderer implements ModalRenderer {
    render(type: Type, viewContainer: ViewContainerRef, bindings: ResolvedReflectiveProvider[], dialog: DialogRef<JSNativeModalContext>): Promise<DialogRef<any>>;
}
