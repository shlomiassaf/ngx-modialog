import { Provider } from '@angular/core';
import { Modal } from './modal';

import {
    MODAL_PROVIDERS,
    Modal as BaseModal,
    ModalBackdropComponent,
    ModalDropInFactory,
    DROP_IN_TYPE as DIType
} from '../../angular2-modal';

import { VexModalBackdrop } from './modal-backdrop';
import { DropInPresetBuilder as Builder } from './presets/dropin-preset';

export { Modal } from './modal';
export { VexModalBackdrop } from './modal-backdrop';
export { VexModalContent } from './modal-content';
export { VEXBuiltInThemes, VEXModalContext, VEXModalContextBuilder } from './modal-context';
export { DropInPreset, DropInPresetBuilder } from './presets/dropin-preset';
export {
    DialogFormModal,
    FormDropIn,
    VEXButtonClickEvent,
    VEXButtonConfig,
    VEXButtonHandler,
    VEXDialogButtons
} from './dialog-form-modal';
export {DialogPreset, DialogPresetBuilder} from './presets/dialog-preset';

const dropInFactory: ModalDropInFactory = {
    alert: modal => new Builder(modal, DIType.alert, <any>{isBlocking: false}),
    prompt: modal => new Builder(modal, DIType.prompt, <any>{isBlocking: true, keyboard: null}),
    confirm: modal => new Builder(modal, DIType.confirm, <any>{isBlocking: true, keyboard: null})
};

export const VEX_MODAL_PROVIDERS: any[] = [
    ...MODAL_PROVIDERS,
    new Provider(BaseModal, { useClass: Modal }),
    new Provider(Modal, { useClass: Modal }),
    new Provider(ModalBackdropComponent, { useValue: VexModalBackdrop }),
    new Provider(ModalDropInFactory, { useValue: dropInFactory })
];
