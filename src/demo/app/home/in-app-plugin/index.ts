import { Provider } from '@angular/core';
import {
    MODAL_PROVIDERS,
    ModalBackdropComponent,
    ModalDropInFactory
} from '../../../../components/angular2-modal';

import { Modal } from './modal';
import { InAppModalBackdrop } from './modal-backdrop';
import { InAppModalContextBuilder } from './modal-context';
const dropInFactory: ModalDropInFactory = {
    alert: modal => new InAppModalContextBuilder(modal),
    prompt: undefined,
    confirm: undefined
};

export { Modal } from './modal';
export { InAppModalContext, InAppModalContextBuilder } from './modal-context';
export const IN_APP_MODAL_PROVIDERS: any[] = [
    ...MODAL_PROVIDERS,
    new Provider(Modal, {useClass: Modal}),
    new Provider(ModalBackdropComponent, {useValue: InAppModalBackdrop}),
    new Provider(ModalDropInFactory, {useValue: dropInFactory})
];
