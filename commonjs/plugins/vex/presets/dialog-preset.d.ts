import { Type } from '@angular/core';
import { FluentAssignMethod } from '../../../framework/fluent-assign';
import { VEXModalContext, VEXModalContextBuilder } from '../modal-context';
import { Modal } from '../modal';
import { VEXButtonHandler, VEXButtonConfig } from '../dialog-form-modal';
/**
 * Data definition
 */
export declare class DialogPreset extends VEXModalContext {
    defaultResult: any;
    content: Type;
    buttons: VEXButtonConfig[];
}
/**
 * A Preset representing the configuration needed to open MessageModal.
 * This is an abstract implementation with no concrete behaviour.
 * Use derived implementation.
 */
export declare class DialogPresetBuilder<T extends DialogPreset> extends VEXModalContextBuilder<T> {
    /**
     * the message to display on the modal.
     */
    content: FluentAssignMethod<Type, this>;
    constructor(modal: Modal, defaultValues?: T, initialSetters?: string[], baseType?: new () => T);
    addButton(css: string, caption: string, onClick: VEXButtonHandler): this;
    addOkButton(text?: string): this;
    addCancelButton(text?: string): this;
}
