import { DialogRef, ModalComponent, CloseGuard } from '../../../../components/angular2-modal';
import { BSModalContext } from '../../../../components/angular2-modal/plugins/bootstrap/index';
export declare class CustomModalContext extends BSModalContext {
    num1: number;
    num2: number;
}
/**
 * A Sample of how simple it is to create a new window, with its own injects.
 */
export declare class CustomModal implements CloseGuard, ModalComponent<CustomModalContext> {
    dialog: DialogRef<CustomModalContext>;
    context: CustomModalContext;
    wrongAnswer: boolean;
    constructor(dialog: DialogRef<CustomModalContext>);
    onKeyUp(value: any): void;
    beforeDismiss(): boolean;
    beforeClose(): boolean;
}
