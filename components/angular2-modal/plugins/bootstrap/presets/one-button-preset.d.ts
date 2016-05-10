import { ResolvedReflectiveProvider } from '@angular/core';
import { FluentAssignMethod } from '../../../framework/fluent-assign';
import { Modal } from '../../../providers/modal';
import { MessageModalPresetBuilder, MessageModalPreset } from './message-modal-preset';
export interface OneButtonPreset extends MessageModalPreset {
    /**
     * Caption for the OK button.
     * Default: OK
     */
    okBtn: string;
    /**
     * A Class for the OK button.
     * Default: btn btn-primary
     */
    okBtnClass: string;
}
/**
 * A Preset for a classic 1 button modal window.
 */
export declare class OneButtonPresetBuilder extends MessageModalPresetBuilder<OneButtonPreset> {
    okBtn: FluentAssignMethod<string, this>;
    okBtnClass: FluentAssignMethod<string, this>;
    constructor(modal: Modal, defaultValues?: OneButtonPreset);
    $$beforeOpen(config: OneButtonPreset): ResolvedReflectiveProvider[];
}
