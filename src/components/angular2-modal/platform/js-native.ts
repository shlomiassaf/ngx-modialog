import {provide} from 'angular2/core';
import {ModalBackdropComponent, ModalDropInFactory, ModalRenderer} from 'angular2-modal';

import {Modal} from './js-native/modal';
import {JSNativeModalRenderer} from './js-native/js-native-modal-renderer';
import {JSNativePresetBuilder} from './js-native/presets/js-native-preset';
import {JS_NATIVE_DIALOG_TYPE} from './js-native/modal-context';

export {Modal} from './js-native/modal';
export {
    JS_NATIVE_DIALOG_TYPE,
    JSNativeModalContext,
    JSNativeModalContextBuilder
} from './js-native/modal-context';
export {JSNativeModalRenderer} from './js-native/js-native-modal-renderer';
export {JSNativePresetBuilder} from './js-native/presets/js-native-preset';


export const JS_NATIVE_MODAL_PROVIDERS: any[] = [
    provide(Modal, {useClass: Modal}),
    provide(ModalRenderer, {useClass: JSNativeModalRenderer}),
    provide(ModalBackdropComponent, {useValue: {}}),
    provide(ModalDropInFactory, {useValue: {
        alert: modal => new JSNativePresetBuilder(modal, JS_NATIVE_DIALOG_TYPE.alert),
        prompt: modal => new JSNativePresetBuilder(modal, JS_NATIVE_DIALOG_TYPE.prompt),
        confirm: modal => new JSNativePresetBuilder(modal, JS_NATIVE_DIALOG_TYPE.confirm),
    }})
];
