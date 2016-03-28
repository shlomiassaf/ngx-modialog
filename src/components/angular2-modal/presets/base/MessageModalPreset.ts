import {FluentAssignMethod} from '../../framework/FluentAssign';
import {ModalAwarePreset, ModalAwarePresetData} from './ModalAwarePreset';
import {MessageModal, MessageModalContext} from '../../modals/MessageModal';
import {extend, arrayUnion} from '../../framework/Utils';


const DEFAULT_CONFIG_VALUES = {
    component: MessageModal,
    headerClass: 'modal-header',
    bodyClass: 'modal-body',
    footerClass: 'modal-footer'
};

const DEFAULT_INITIAL_SETTERS = [
    'headerClass',
    'title',
    'titleHtml',
    'body',
    'bodyClass',
    'footerClass'
];

export interface MessageModalPresetData extends MessageModalContext, ModalAwarePresetData {}

/**
 * A Preset representing the configuration needed to open MessageModal.
 * This is an abstract implementation with no concrete behaviour.
 * Use derived implementation.
 */
export abstract class MessageModalPreset<T extends MessageModalPresetData>
                                                                    extends ModalAwarePreset<T> {

    constructor(defaultValues: T = undefined, initialSetters: string[] = undefined) {
        super(extend<any>(DEFAULT_CONFIG_VALUES, defaultValues || {}),
            arrayUnion<string>(DEFAULT_INITIAL_SETTERS, initialSetters || []));
    }

    headerClass: FluentAssignMethod<string, this>;
    title: FluentAssignMethod<string, this>;
    titleHtml: FluentAssignMethod<string, this>;
    body: FluentAssignMethod<string, this>;
    bodyClass: FluentAssignMethod<string, this>;
    footerClass: FluentAssignMethod<string, this>;
}
