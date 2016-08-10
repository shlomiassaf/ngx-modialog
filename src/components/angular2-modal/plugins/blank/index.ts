import { Provider } from '@angular/core';
import {
    ModalBackdropComponent,
    ModalDropInFactory
} from '../../../../components/angular2-modal';

import { Modal } from './modal';
import { BlankModalBackdrop } from './modal-backdrop';
import { BlankModalContextBuilder } from './modal-context';
const dropInFactory: ModalDropInFactory = {
    alert: modal => new BlankModalContextBuilder(modal),
    prompt: modal => new BlankModalContextBuilder(modal),
    confirm: modal => new BlankModalContextBuilder(modal)
};

export { Modal } from './modal';
export { BlankModalContext, BlankModalContextBuilder } from './modal-context';
export const BLANK_MODAL_PROVIDERS: any[] = [
    new Provider(Modal, {useClass: Modal}),
    new Provider(ModalBackdropComponent, {useValue: BlankModalBackdrop}),
    new Provider(ModalDropInFactory, {useValue: dropInFactory})
];