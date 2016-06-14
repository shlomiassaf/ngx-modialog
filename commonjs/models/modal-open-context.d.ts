import { ResolvedReflectiveProvider, ViewContainerRef } from '@angular/core';
import { FluentAssignMethod } from '../framework/fluent-assign';
import { ModalComponent } from './tokens';
import { Modal } from '../providers/modal';
import { DialogRef } from './dialog-ref';
import { ModalContext, ModalContextBuilder, ModalControllingContextBuilder } from './modal-context';
export declare class ModalOpenContext extends ModalContext {
    component: any;
    modal: Modal;
}
/**
 * A Modal Context that knows about the modal service, and so can open a modal window on demand.
 * Use the fluent API to configure the preset and then invoke the 'open' method to open a modal
 * based on the context.
 */
export declare abstract class ModalOpenContextBuilder<T extends ModalOpenContext> extends ModalContextBuilder<T> implements ModalControllingContextBuilder<T> {
    /**
     * A Class for the footer container.
     * Default: modal-footer
     */
    component: FluentAssignMethod<ModalComponent<T>, this>;
    constructor(defaultValues?: T, initialSetters?: string[], baseType?: new () => T);
    /**
     * Hook to alter config and return bindings.
     * @param config
     */
    protected $$beforeOpen(config: T): ResolvedReflectiveProvider[];
    /**
     * Open a modal window based on the configuration of this config instance.
     * @param viewContainer If set opens the modal inside the supplied viewContainer
     * @returns Promise<DialogRef>
     */
    open(viewContainer?: ViewContainerRef): Promise<DialogRef<T>>;
}
