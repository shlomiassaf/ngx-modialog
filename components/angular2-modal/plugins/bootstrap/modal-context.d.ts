import { ModalOpenContext, ModalOpenContextBuilder } from '../../models/modal-open-context';
import { FluentAssignMethod } from './../../framework/fluent-assign';
export declare type BootstrapModalSize = 'sm' | 'lg';
export declare class BSModalContext extends ModalOpenContext {
    /**
     * A Class for the modal dialog container.
     * Default: modal-dialog
     */
    dialogClass: string;
    /**
     * Size of the modal.
     * 'lg' or 'sm' only.
     * NOTE: No validation.
     * Default to ''
     */
    size: BootstrapModalSize;
    /**
     * When true, show a close button on the top right corner.
     */
    showClose: boolean;
    normalize(): void;
}
export declare class BSModalContextBuilder<T extends BSModalContext> extends ModalOpenContextBuilder<T> {
    /**
     * Size of the modal.
     * 'lg' or 'sm' only.
     * NOTE: No validation.
     * Default to 'lg'
     */
    size: FluentAssignMethod<string, this>;
    /**
     * A Class for the modal dialog container.
     * Default: modal-dialog
     */
    dialogClass: FluentAssignMethod<BootstrapModalSize, this>;
    /**
     * When true, show a close button on the top right corner.
     */
    showClose: FluentAssignMethod<boolean, this>;
    constructor(defaultValues?: T, initialSetters?: string[], baseType?: new () => T);
}
