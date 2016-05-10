import { ResolvedReflectiveProvider } from '@angular/core';
import { DROP_IN_TYPE } from '../../../models/tokens';
import { FluentAssignMethod } from '../../../framework/fluent-assign';
import { Modal } from '../modal';
import { DialogPreset, DialogPresetBuilder } from './dialog-preset';
/**
 * Data definition
 */
export declare class DropInPreset extends DialogPreset {
    /**
     * the message to display on the modal.
     */
    message: string;
    /**
     * A placeholder for the input element.
     * Valid only for prompt modal.
     */
    placeholder: string;
    dropInType: DROP_IN_TYPE;
    showInput: boolean;
}
/**
 * A Preset representing all 3 drop ins (alert, prompt, confirm)
 */
export declare class DropInPresetBuilder extends DialogPresetBuilder<DropInPreset> {
    /**
     * the message to display on the modal.
     */
    message: FluentAssignMethod<string, this>;
    /**
     * A placeholder for the input element.
     * Valid only for prompt modal.
     */
    placeholder: FluentAssignMethod<string, this>;
    constructor(modal: Modal, dropInType: DROP_IN_TYPE, defaultValues?: DropInPreset);
    $$beforeOpen(config: DropInPreset): ResolvedReflectiveProvider[];
}
