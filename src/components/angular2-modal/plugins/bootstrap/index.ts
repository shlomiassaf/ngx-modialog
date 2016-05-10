import {provide} from '@angular/core';
import {ModalBackdropComponent, ModalDropInFactory, MODAL_PROVIDERS} from '../../angular2-modal';

import {BSModalBackdrop} from './modal-backdrop';
import {OneButtonPresetBuilder} from './presets/one-button-preset';
import {TwoButtonPresetBuilder} from './presets/two-button-preset';
import {Modal} from './modal';

export {BootstrapModalSize, BSModalContext, BSModalContextBuilder} from './modal-context';
export {BSModalBackdrop} from './modal-backdrop';
export {BSModalContainer} from './modal-container';
export {BSMessageModal} from './message-modal';
export {BSModalFooter} from './modal-footer';

export {
    MessageModalPreset,
    MessageModalPresetBuilder
} from './presets/message-modal-preset';
export {ModalOpenContext, ModalOpenContextBuilder} from './../../models/modal-open-context';
export {OneButtonPreset, OneButtonPresetBuilder} from './presets/one-button-preset';
export {TwoButtonPreset, TwoButtonPresetBuilder} from './presets/two-button-preset';
export {BSModal, Modal} from './modal';

export const BS_MODAL_PROVIDERS: any[] = [
    ...MODAL_PROVIDERS,
    provide(Modal, {useClass: Modal}),
    provide(ModalBackdropComponent, {useValue: BSModalBackdrop}),
    provide(ModalDropInFactory, {useValue: {
        alert: modal => new OneButtonPresetBuilder(modal, <any>{isBlocking: false}),
        prompt: modal => new OneButtonPresetBuilder(modal, <any>{isBlocking: true, keyboard: null}),
        confirm: modal => new TwoButtonPresetBuilder(modal, <any>{isBlocking: true, keyboard: null})
    }})
];
