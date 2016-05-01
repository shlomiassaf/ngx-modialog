import {Provider} from 'angular2/core';
import {Modal} from './vex/modal';
import {MODAL_PROVIDERS, ModalBackdropComponent, ModalDropInFactory} from 'angular2-modal';

export {Modal} from './vex/modal';

import {VexModalBackdrop} from './vex/modal-backdrop';
export {VexModalBackdrop} from './vex/modal-backdrop';

import {VexModalContent} from './vex/modal-content';
export {VexModalContent} from './vex/modal-content';

import {VEXBuiltInThemes, VEXModalContext, VEXModalContextBuilder} from './vex/modal-context';
export {VEXBuiltInThemes, VEXModalContext, VEXModalContextBuilder} from './vex/modal-context';

import {DropInModal} from './vex/dropin-modal';
export {DropInModal} from './vex/dropin-modal';

import {DROP_IN_TYPE, DropInPreset, DropInPresetBuilder} from './vex/presets/dropin-preset';
export {DROP_IN_TYPE, DropInPreset, DropInPresetBuilder} from './vex/presets/dropin-preset';


export const VEX_MODAL_PROVIDERS: any[] = [
    ...MODAL_PROVIDERS,
    new Provider(Modal, {useClass: Modal}),
    new Provider(ModalBackdropComponent, {useValue: VexModalBackdrop}),
    new Provider(ModalDropInFactory, {useValue: {
        alert: modal => new DropInPresetBuilder(modal, <any>{isBlocking: false, dropInType: DROP_IN_TYPE.alert}),
        prompt: modal => new DropInPresetBuilder(modal, <any>{isBlocking: true, keyboard: null, dropInType: DROP_IN_TYPE.prompt}),
        confirm: modal => new DropInPresetBuilder(modal, <any>{isBlocking: true, keyboard: null, dropInType: DROP_IN_TYPE.confirm})
    }})
];
