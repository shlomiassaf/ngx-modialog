import {Provider} from '@angular/core';
import {ModalRenderer} from './models/tokens';
import {Modal} from './providers/modal';
import {DOMModalRenderer} from './providers/dom-modal-renderer';

export * from './framework/fluent-assign';
export * from './models/tokens';
export * from './models/dialog-ref';
export * from './models/modal-context';
export {Modal} from './providers/modal';
export {DOMModalRenderer} from './providers/dom-modal-renderer';

export const MODAL_PROVIDERS: any[] = [
    new Provider(Modal, {useClass: Modal}),
    new Provider(ModalRenderer, {useClass: DOMModalRenderer})
];