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

    /**
     * A Class for the header (title) container.
     * Default: modal-header
     */
    headerClass: FluentAssignMethod<string, this>;

    /**
     * Caption for the title, enclosed in a H3 container.
     */
    title: FluentAssignMethod<string, this>;

    /**
     * HTML for the title, if set overrides title property.
     * The HTML is wrapped in a DIV element, inside the header container.
     * Example:
     <div class="modal-header">
     <div> HTML CONTENT INSERTED HERE </div>
     </div>
     * Note: HTML is not compiled.
     */
    titleHtml: FluentAssignMethod<string, this>;

    /**
     * The body of the message.
     * Can be either text or HTML.
     * Note: HTML is not compiled.
     */
    body: FluentAssignMethod<string, this>;

    /**
     * A Class for the body container.
     * Default: modal-body
     */
    bodyClass: FluentAssignMethod<string, this>;

    /**
     * A Class for the footer container.
     * Default: modal-footer
     */
    footerClass: FluentAssignMethod<string, this>;
}
