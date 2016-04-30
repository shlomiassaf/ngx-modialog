import {
    ComponentRef,
    ViewContainerRef,
    ResolvedReflectiveProvider,
    Type
} from 'angular2/core';

import {Modal} from '../providers/modal';
import {DialogRef} from './dialog-ref';
import {ModalControllingContextBuilder} from '../models/modal-context';

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

export class ModalCompileConfig {
    constructor(public component: Type, public bindings: ResolvedReflectiveProvider[]) {}
}

export abstract class BackdropRenderer {
    public abstract createBackdrop(
        type: Type,
        viewContainer: ViewContainerRef,
        bindings: ResolvedReflectiveProvider[],
        inside: boolean
    ): Promise<ComponentRef>;
}

export abstract class ModalBackdropComponent extends Type {}

export class ModalDropInFactory {
    alert: <T>(modal: Modal) => ModalControllingContextBuilder<T>;
    prompt: <T>(modal: Modal) => ModalControllingContextBuilder<T>;
    confirm: <T>(modal: Modal) => ModalControllingContextBuilder<T>;
}
