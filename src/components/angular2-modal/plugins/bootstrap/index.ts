import { Provider } from '@angular/core';

import { Modal } from './modal';
import { BSModalBackdrop } from './modal-backdrop';
import { OneButtonPresetBuilder } from './presets/one-button-preset';
import { TwoButtonPresetBuilder } from './presets/two-button-preset';

import {
    Modal as BaseModal,
    ModalBackdropComponent,
    ModalDropInFactory,
    MODAL_PROVIDERS
} from '../../angular2-modal';

export { BootstrapModalSize, BSModalContext, BSModalContextBuilder } from './modal-context';
export { BSModalBackdrop } from './modal-backdrop';
export { BSModalContainer } from './modal-container';
export { BSMessageModal } from './message-modal';
export { BSModalFooter } from './modal-footer';

export {
    MessageModalPreset,
    MessageModalPresetBuilder
} from './presets/message-modal-preset';

export { ModalOpenContext, ModalOpenContextBuilder } from './../../models/modal-open-context';
export { OneButtonPreset, OneButtonPresetBuilder } from './presets/one-button-preset';
export { TwoButtonPreset, TwoButtonPresetBuilder } from './presets/two-button-preset';
export { BSModal, Modal } from './modal';

export const BS_MODAL_PROVIDERS: any[] = [
    ...MODAL_PROVIDERS,
    new Provider(BaseModal, { useClass: Modal }),
    new Provider(Modal, { useClass: Modal }),
    new Provider(ModalBackdropComponent, { useValue: BSModalBackdrop }),
    new Provider(ModalDropInFactory, { useValue: {
        alert: modal => new OneButtonPresetBuilder(modal, <any>{isBlocking: false}),
        prompt: modal => new OneButtonPresetBuilder(modal, <any>{isBlocking: true, keyboard: null}),
        confirm: modal => new TwoButtonPresetBuilder(modal, <any>{isBlocking: true, keyboard: null})
    }})
];
