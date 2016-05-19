import { ResolvedReflectiveProvider } from '@angular/core';
import { DROP_IN_TYPE } from '../../../models/tokens';
import { FluentAssignMethod } from '../../../framework/fluent-assign';
import { Modal } from '../modal';
import { DialogFormModal as component,  FormDropIn as content } from '../dialog-form-modal';
import { DialogPreset, DialogPresetBuilder } from './dialog-preset';

import { extend } from '../../../framework/utils';

const DEFAULT_SETTERS = [
    'okBtn',
    'cancelBtn',
    'placeholder',
    'showCloseButton'
];

/**
 * Data definition
 */
export class DropInPreset extends DialogPreset {

    /**
     * the message to display on the modal.
     */
    message: string;

    /**
     * The default Ok button caption.
     */
    okBtn: string = 'Yep';

    /**
     * The default Cancel button caption.
     */
    cancelBtn: string = 'Nope';

    /**
     * A placeholder for the input element.
     * Valid only for prompt modal.
     */
    placeholder: string;

    dropInType: DROP_IN_TYPE;

    get showInput(): boolean {
        return this.dropInType === DROP_IN_TYPE.prompt;
    }
}

/**
 * A Preset representing all 3 drop ins (alert, prompt, confirm)
 */
export class DropInPresetBuilder extends DialogPresetBuilder<DropInPreset> {

    /**
     * the message to display on the modal.
     */
    message: FluentAssignMethod<string, this>;

    /**
     * The default Ok button caption.
     */
    okBtn: FluentAssignMethod<string, this>;

    /**
     * The default Cancel button caption.
     */
    cancelBtn: FluentAssignMethod<string, this>;

    /**
     * A placeholder for the input element.
     * Valid only for prompt modal.
     */
    placeholder: FluentAssignMethod<string, this>;

    constructor(modal: Modal, dropInType: DROP_IN_TYPE, defaultValues: DropInPreset = undefined) {
        super(
            modal,
            extend<any>({modal, component, content, dropInType}, defaultValues || {}),
            DEFAULT_SETTERS,
            DropInPreset
        );
    }

    $$beforeOpen(config: DropInPreset): ResolvedReflectiveProvider[] {
        this.addOkButton(config.okBtn);

        switch (config.dropInType) {
            case DROP_IN_TYPE.prompt:
                config.defaultResult = undefined;
            case DROP_IN_TYPE.confirm:
                this.addCancelButton(config.cancelBtn);
                break;
        }
        return super.$$beforeOpen(config);
    }
}
