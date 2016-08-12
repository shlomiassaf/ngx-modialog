import { DialogRef, ModalComponent } from '../../../angular2-modal';
import { MessageModalPreset } from './presets/message-modal-preset';
export interface BSMessageModalButtonHandler {
    (cmp: ModalComponent<MessageModalPreset>, $event: MouseEvent): void;
}
/**
 * Interface for button definition
 */
export interface BSMessageModalButtonConfig {
    cssClass: string;
    caption: string;
    onClick: BSMessageModalButtonHandler;
}
export declare class BSMessageModalTitle {
    dialog: DialogRef<MessageModalPreset>;
    context: MessageModalPreset;
    constructor(dialog: DialogRef<MessageModalPreset>);
    titleHtml: number;
}
export declare class BSMessageModalBody {
    dialog: DialogRef<MessageModalPreset>;
    constructor(dialog: DialogRef<MessageModalPreset>);
}
/**
 * Represents the modal footer for storing buttons.
 */
export declare class BSModalFooter {
    dialog: DialogRef<MessageModalPreset>;
    constructor(dialog: DialogRef<MessageModalPreset>);
    onClick(btn: BSMessageModalButtonConfig, $event: MouseEvent): void;
}
/**
 * A Component representing a generic bootstrap modal content element.
 *
 * By configuring a MessageModalContext instance you can:
 *
 *  Header:
 *      - Set header container class (default: modal-header)
 *      - Set title text (enclosed in H3 element)
 *      - Set title html (overrides text)
 *
 *  Body:
 *      - Set body container class.  (default: modal-body)
 *      - Set body container HTML.
 *
 *  Footer:
 *      - Set footer class.  (default: modal-footer)
 *      - Set button configuration (from 0 to n)
 */
export declare class BSMessageModal implements ModalComponent<MessageModalPreset> {
    dialog: DialogRef<MessageModalPreset>;
    constructor(dialog: DialogRef<MessageModalPreset>);
}
