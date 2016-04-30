import {Modal} from '../../../providers/modal';
import {ModalAwarePreset, ModalAwarePresetBuilder} from './modal-aware-preset';
import {JS_NATIVE_DIALOG_TYPE} from '../modal-context';

export class JSNativePresetBuilder extends ModalAwarePresetBuilder<ModalAwarePreset> {
    
    constructor(modal: Modal, dialogType: JS_NATIVE_DIALOG_TYPE) {
        super(<any>{modal, dialogType});
    }

}

