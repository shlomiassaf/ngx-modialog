import { ViewContainerRef, ResolvedReflectiveProvider } from '@angular/core';
import { DialogRef, DROP_IN_TYPE } from '../../../../../components/angular2-modal';
import { Modal } from '../modal';
import { JSNativeModalContext, JSNativeModalContextBuilder } from '../modal-context';
export declare class JSNativePresetBuilder extends JSNativeModalContextBuilder<JSNativeModalContext> {
    constructor(modal: Modal, dialogType: DROP_IN_TYPE);
    /**
     * Hook to alter config and return bindings.
     * @param config
     */
    protected $$beforeOpen(config: JSNativeModalContext): ResolvedReflectiveProvider[];
    /**
     * Open a modal window based on the configuration of this config instance.
     * @param viewContainer If set opens the modal inside the supplied viewContainer
     * @returns Promise<DialogRef>
     */
    open(viewContainer?: ViewContainerRef): Promise<DialogRef<JSNativeModalContext>>;
}
