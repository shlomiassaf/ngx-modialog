import {provide} from '@angular/core';
import {ModalBackdropComponent, ModalDropInFactory, MODAL_PROVIDERS} from '../angular2-modal';

import {BSModalBackdrop} from './bootstrap/modal-backdrop';
import {OneButtonPresetBuilder} from './bootstrap/presets/one-button-preset';
import {TwoButtonPresetBuilder} from './bootstrap/presets/two-button-preset';
import {Modal} from './bootstrap/modal';

export {BootstrapModalSize, BSModalContext, BSModalContextBuilder} from './bootstrap/modal-context';
export {BSModalBackdrop} from './bootstrap/modal-backdrop';
export {BSModalContainer} from './bootstrap/modal-container';
export {BSMessageModal} from './bootstrap/message-modal';
export {BSModalFooter} from './bootstrap/modal-footer';

export {
    MessageModalPreset,
    MessageModalPresetBuilder
} from './bootstrap/presets/message-modal-preset';
export {ModalOpenContext, ModalOpenContextBuilder} from './../models/modal-open-context';
export {OneButtonPreset, OneButtonPresetBuilder} from './bootstrap/presets/one-button-preset';
export {TwoButtonPreset, TwoButtonPresetBuilder} from './bootstrap/presets/two-button-preset';
export {BSModal, Modal} from './bootstrap/modal';

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
