import { ViewContainerRef, ResolvedReflectiveProvider, Type } from '@angular/core';
import { Modal } from '../providers/modal';
import { DialogRef } from './dialog-ref';
import { ModalControllingContextBuilder } from '../models/modal-context';
export declare enum DROP_IN_TYPE {
    alert = 0,
    prompt = 1,
    confirm = 2,
}
export interface ModalComponent<T> {
    dialog: DialogRef<T>;
    /**
     * Invoked before a modal is dismissed, return true to cancel dismissal.
     */
    beforeDismiss?(): boolean;
    /**
     * Invoked before a modal is closed, return true to cancel closing.
     */
    beforeClose?(): boolean;
}
export declare class ModalCompileConfig {
    component: Type;
    bindings: ResolvedReflectiveProvider[];
    constructor(component: Type, bindings: ResolvedReflectiveProvider[]);
}
export declare abstract class ModalRenderer {
    abstract render(type: Type, viewContainer: ViewContainerRef, bindings: ResolvedReflectiveProvider[], dialog: DialogRef<any>): Promise<DialogRef<any>>;
}
export declare abstract class ModalBackdropComponent extends Type {
}
export declare class ModalDropInFactory {
    alert: <T>(modal: Modal) => ModalControllingContextBuilder<T>;
    prompt: <T>(modal: Modal) => ModalControllingContextBuilder<T>;
    confirm: <T>(modal: Modal) => ModalControllingContextBuilder<T>;
}
