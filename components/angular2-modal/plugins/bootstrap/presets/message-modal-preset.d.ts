import { FluentAssignMethod } from '../../../framework/fluent-assign';
import { BSMessageModalButtonConfig, BSMessageModalButtonHandler } from '../message-modal.component';
import { BSModalContext, BSModalContextBuilder } from '../modal-context';
/**
 * Data definition
 */
export interface MessageModalPreset extends BSModalContext {
    /**
     * A Class for the header (title) container.
     * Default: modal-header
     */
    headerClass: string;
    /**
     * Caption for the title, enclosed in a H3 container.
     */
    title: string;
    /**
     * HTML for the title, if set overrides title property.
     * The HTML is wrapped in a DIV element, inside the header container.
     * Example:
     <div class="modal-header">
     <div> HTML CONTENT INSERTED HERE </div>
     </div>
     * Note: HTML is not compiled.
     */
    titleHtml: string;
    /**
     * aliased by 'body'
     * @aliasedBy body
     */
    message: string;
    /**
     * The body of the modal.
     * Can be either text or HTML.
     * Note: When using HTML, the template is not compiled. (binding and expression will not parse)
     * @aliasOf message
     */
    body: string;
    /**
     * A Class for the body container.
     * Default: modal-body
     */
    bodyClass: string;
    /**
     * A Class for the footer container.
     * Default: modal-footer
     */
    footerClass: string;
    buttons: BSMessageModalButtonConfig[];
}
/**
 * A Preset representing the configuration needed to open MessageModal.
 * This is an abstract implementation with no concrete behaviour.
 * Use derived implementation.
 */
export declare abstract class MessageModalPresetBuilder<T extends MessageModalPreset> extends BSModalContextBuilder<T> {
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
     * aliased by 'body'
     * @aliasedBy body
     */
    message: FluentAssignMethod<string, this>;
    /**
     * The body of the modal.
     * Can be either text or HTML.
     * Note: When using HTML, the template is not compiled. (binding and expression will not parse)
     * @aliasOf message
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
    constructor(defaultValues?: T, initialSetters?: string[], baseType?: new () => T);
    addButton(css: string, caption: string, onClick: BSMessageModalButtonHandler): this;
}
