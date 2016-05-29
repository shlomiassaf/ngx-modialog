import { Provider } from '@angular/core';

import { Modal } from './modal';
import { JSNativeModalRenderer } from './js-native-modal-renderer';
import { JSNativePresetBuilder } from './presets/js-native-preset';

import {
    Modal as BaseModal,
    MODAL_PROVIDERS,
    ModalBackdropComponent,
    ModalDropInFactory,
    ModalRenderer,
    DROP_IN_TYPE
} from '../../angular2-modal';

export { Modal, JSNativeModal } from './modal';
export {
    JSNativeModalContext,
    JSNativeModalContextBuilder
} from './modal-context';
export { JSNativeModalRenderer } from './js-native-modal-renderer';
export { JSNativePresetBuilder } from './presets/js-native-preset';


export const JS_NATIVE_MODAL_PROVIDERS: any[] = [
    ...MODAL_PROVIDERS,
    new Provider(BaseModal, { useClass: Modal }),
    new Provider(Modal, { useClass: Modal }),
    new Provider(ModalRenderer, { useClass: JSNativeModalRenderer }),
    new Provider(ModalBackdropComponent, { useValue: {} }),
    new Provider(ModalDropInFactory, { useValue: {
        alert: modal => new JSNativePresetBuilder(modal, DROP_IN_TYPE.alert),
        prompt: modal => new JSNativePresetBuilder(modal, DROP_IN_TYPE.prompt),
        confirm: modal => new JSNativePresetBuilder(modal, DROP_IN_TYPE.confirm)
    } })
];
