import {FluentAssignMethod} from '../../../framework/fluent-assign';
import {VEXModalContext, VEXModalContextBuilder} from '../modal-context';
import {Modal} from '../modal';
import {DropInModal} from '../dropin-modal';
import {extend} from '../../../framework/utils';

export enum DROP_IN_TYPE {
    alert,
    prompt,
    confirm
}

const DEFAULT_SETTERS = [
    'message',
    'placeholder',
    'showCloseButton'
];

/**
 * Data definition
 */
export interface DropInPreset extends VEXModalContext {

    /**
     * the message to display on the modal.
     */
    message: string;

    /**
     * A placeholder for the input element.
     * Valid only for prompt modal.
     */
    placeholder: string;

    showCloseButton: boolean;

    dropInType: DROP_IN_TYPE;

} 

/**
 * A Preset representing the configuration needed to open MessageModal.
 * This is an abstract implementation with no concrete behaviour.
 * Use derived implementation.
 */
export class DropInPresetBuilder extends VEXModalContextBuilder<DropInPreset> {

    constructor(modal: Modal, defaultValues: DropInPreset = undefined) {
        super(
            extend<any>( { modal: modal, component: DropInModal}, defaultValues || {}),
            DEFAULT_SETTERS
        );
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

    showCloseButton: FluentAssignMethod<boolean, this>;
}
