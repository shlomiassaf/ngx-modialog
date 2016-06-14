import { Modal } from '../../../../components/angular2-modal';
import { TwoButtonPreset } from '../../../../components/angular2-modal/plugins/bootstrap/index';
export declare class ModalCustomisationWizard {
    modal: Modal;
    type: 'alert' | 'prompt' | 'confirm';
    preset: TwoButtonPreset;
    constructor(modal: Modal);
    createModal(): void;
    code: string;
}
