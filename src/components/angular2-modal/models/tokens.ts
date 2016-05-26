import {
    ViewContainerRef,
    ResolvedReflectiveProvider,
    Type
} from '@angular/core';

import {Modal} from '../providers/modal';
import {DialogRef} from './dialog-ref';
import {ModalControllingContextBuilder} from '../models/modal-context';

export enum DROP_IN_TYPE {
    alert,
    prompt,
    confirm
}

export interface ModalComponent<T> {
    dialog: DialogRef<T>;

    /**
     * Invoked before a modal is dismissed.
     * @return true or a promise that resolves to true to cancel dismissal.
     */
    beforeDismiss?(): boolean | Promise<boolean>;

    /**
     * Invoked before a modal is closed.
     * @return true or a promise that resolves to true to cancel closing.
     */
    beforeClose?(): boolean | Promise<boolean>;
}

export class ModalCompileConfig {
    constructor(public component: Type, public bindings: ResolvedReflectiveProvider[]) {}
}

export abstract class ModalRenderer {
    public abstract render(type: Type,
           viewContainer: ViewContainerRef,
           bindings: ResolvedReflectiveProvider[],
           dialog: DialogRef<any>
    ): Promise<DialogRef<any>>;
}

export abstract class ModalBackdropComponent extends Type {}

export class ModalDropInFactory {
    alert: <T>(modal: Modal) => ModalControllingContextBuilder<T>;
    prompt: <T>(modal: Modal) => ModalControllingContextBuilder<T>;
    confirm: <T>(modal: Modal) => ModalControllingContextBuilder<T>;
}
