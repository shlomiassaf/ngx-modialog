import { VEXBuiltInThemes, Modal } from '../../../components/angular2-modal/plugins/vex';
import { ModalCommandDescriptor } from '../demo-head/index';
export declare class VexDemo {
    modal: Modal;
    modalCommands: ModalCommandDescriptor[];
    theme: VEXBuiltInThemes;
    private demoHead;
    constructor(modal: Modal);
}
