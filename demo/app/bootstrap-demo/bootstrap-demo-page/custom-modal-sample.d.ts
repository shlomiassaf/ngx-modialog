import { DialogRef, ModalComponent } from '../../../../components/angular2-modal';
import { BSModalContext } from '../../../../components/angular2-modal/plugins/bootstrap/index';
export declare class AdditionCalculateWindowData extends BSModalContext {
    num1: number;
    num2: number;
    constructor(num1: number, num2: number);
}
/**
 * A Sample of how simple it is to create a new window, with its own injects.
 */
export declare class AdditionCalculateWindow implements ModalComponent<AdditionCalculateWindowData> {
    dialog: DialogRef<AdditionCalculateWindowData>;
    context: AdditionCalculateWindowData;
    wrongAnswer: boolean;
    constructor(dialog: DialogRef<AdditionCalculateWindowData>);
    onKeyUp(value: any): void;
    beforeDismiss(): boolean;
    beforeClose(): boolean;
}
