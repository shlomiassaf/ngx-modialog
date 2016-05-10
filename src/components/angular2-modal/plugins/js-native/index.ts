import { provide} from '@angular/core';
import {
    ModalBackdropComponent,
    ModalDropInFactory,
    ModalRenderer,
    DROP_IN_TYPE
} from '../../angular2-modal';

import { Modal } from './modal';
import { JSNativeModalRenderer } from './js-native-modal-renderer';
import { JSNativePresetBuilder } from './presets/js-native-preset';

export { Modal, JSNativeModal } from './modal';
export {
    JSNativeModalContext,
    JSNativeModalContextBuilder
} from './modal-context';
export { JSNativeModalRenderer } from './js-native-modal-renderer';
export { JSNativePresetBuilder } from './presets/js-native-preset';


export const JS_NATIVE_MODAL_PROVIDERS: any[] = [
    provide(Modal, {useClass: Modal}),
    provide(ModalRenderer, {useClass: JSNativeModalRenderer}),
    provide(ModalBackdropComponent, {useValue: {}}),
    provide(ModalDropInFactory, {useValue: {
        alert: modal => new JSNativePresetBuilder(modal, DROP_IN_TYPE.alert),
        prompt: modal => new JSNativePresetBuilder(modal, DROP_IN_TYPE.prompt),
        confirm: modal => new JSNativePresetBuilder(modal, DROP_IN_TYPE.confirm),
    }})
];
