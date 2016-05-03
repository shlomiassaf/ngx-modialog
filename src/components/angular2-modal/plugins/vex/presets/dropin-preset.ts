import {ResolvedReflectiveProvider} from '@angular/core';
import {FluentAssignMethod} from '../../../framework/fluent-assign';
import {Modal} from '../modal';
import {DialogModal as component} from '../dialog-modal';
import {DialogPreset, DialogPresetBuilder} from './dialog-preset';

import {extend} from '../../../framework/utils';

export enum DROP_IN_TYPE {
    alert,
    prompt,
    confirm
}

const DEFAULT_SETTERS = [
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

    constructor(modal: Modal, dropInType: DROP_IN_TYPE, defaultValues: DropInPreset = undefined) {
        super(
            modal,
            extend<any>({modal, component, dropInType}, defaultValues || {}),
            DEFAULT_SETTERS,
            DropInPreset
        );
    }

    $$beforeOpen(config: DropInPreset): ResolvedReflectiveProvider[] {
        this.addOkButton('Yep');

        switch (config.dropInType) {
            case DROP_IN_TYPE.prompt:
                config.defaultResult = undefined;
            case DROP_IN_TYPE.confirm:
                this.addCancelButton('Nope');
                break;
        }
        return super.$$beforeOpen(config);
    }

    /**
     * the message to display on the modal.
     */
    message: FluentAssignMethod<string, this>;

    /**
     * A placeholder for the input element.
     * Valid only for prompt modal.
     */
    placeholder: FluentAssignMethod<string, this>;
}
