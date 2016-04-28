import {
    ComponentRef,
    ViewContainerRef,
    ResolvedReflectiveProvider,
    Type
} from 'angular2/core';

import {DialogRef} from './dialog-ref';

/**
 * A Type used as a binding key for dialog window Components
 */
export class ModalContext {}

export interface ModalComponent {
    dialog: DialogRef;

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
    constructor(public component: Type, public bindings: ResolvedReflectiveProvider[]){}
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