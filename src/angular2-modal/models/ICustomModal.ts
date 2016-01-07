import {ModalDialogInstance} from '../models/ModalDialogInstance';

/**
 * A Type used as a binding key for dialog window Components
 */
export class ICustomModal {}

export interface ICustomModalComponent {
    dialog: ModalDialogInstance;

    /**
     * Invoked before a modal is dismissed, return true to cancel dismissal.
     */
    beforeDismiss?(): boolean;

    /**
     * Invoked before a modal is closed, return true to cancel closing.
     */
    beforeClose?(): boolean;
}
