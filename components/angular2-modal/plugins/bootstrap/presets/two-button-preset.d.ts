import { ResolvedReflectiveProvider } from '@angular/core';
import { FluentAssignMethod } from '../../../framework/fluent-assign';
import { Modal } from '../../../providers';
import { MessageModalPresetBuilder } from './message-modal-preset';
import { OneButtonPreset } from './one-button-preset';
export interface TwoButtonPreset extends OneButtonPreset {
    /**
     * Caption for the Cancel button.
     * Default: Cancel
     */
    cancelBtn: string;
    /**
     * A Class for the Cancel button.
     * Default: btn btn-default
     */
    cancelBtnClass: string;
}
/**
 * A Preset for a classic 2 button modal window.
 */
export declare class TwoButtonPresetBuilder extends MessageModalPresetBuilder<TwoButtonPreset> {
    okBtn: FluentAssignMethod<string, this>;
    okBtnClass: FluentAssignMethod<string, this>;
    cancelBtn: FluentAssignMethod<string, this>;
    cancelBtnClass: FluentAssignMethod<string, this>;
    constructor(modal: Modal, defaultValues?: TwoButtonPreset);
    $$beforeOpen(config: TwoButtonPreset): ResolvedReflectiveProvider[];
}
