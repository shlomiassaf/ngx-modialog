import {Provider} from '@angular/core';
import {Modal} from './vex/modal';
import {MODAL_PROVIDERS, ModalBackdropComponent, ModalDropInFactory} from '../angular2-modal';
import {VexModalBackdrop} from './vex/modal-backdrop';
import {DROP_IN_TYPE as DIType, DropInPresetBuilder as Builder} from './vex/presets/dropin-preset';

export {Modal} from './vex/modal';
export {VexModalBackdrop} from './vex/modal-backdrop';
export {VexModalContent} from './vex/modal-content';
export {VEXBuiltInThemes, VEXModalContext, VEXModalContextBuilder} from './vex/modal-context';
export {DROP_IN_TYPE, DropInPreset, DropInPresetBuilder} from './vex/presets/dropin-preset';
export {
    DialogFormModal,
    FormDropIn,
    VEXButtonClickEvent,
    VEXButtonConfig,
    VEXButtonHandler,
    VEXDialogButtons
} from './vex/dialog-form-modal';
export {DialogPreset, DialogPresetBuilder} from './vex/presets/dialog-preset';

const dropInFactory: ModalDropInFactory = {
    alert: modal => new Builder(modal, DIType.alert, <any>{isBlocking: false}),
    prompt: modal => new Builder(modal, DIType.prompt, <any>{isBlocking: true, keyboard: null}),
    confirm: modal => new Builder(modal, DIType.confirm, <any>{isBlocking: true, keyboard: null})
};

export const VEX_MODAL_PROVIDERS: any[] = [
    ...MODAL_PROVIDERS,
    new Provider(Modal, {useClass: Modal}),
    new Provider(ModalBackdropComponent, {useValue: VexModalBackdrop}),
    new Provider(ModalDropInFactory, {useValue: dropInFactory})
];
