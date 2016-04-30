import {Provider} from 'angular2/core';

import {ModalRenderer} from './models/tokens';
export * from './models/tokens';

export * from './models/modal-context';
export * from './models/dialog-ref';

import {Modal} from './providers/modal';
export {Modal} from './providers/modal';

import {DOMModalRenderer} from './providers/dom-modal-renderer';
export {DOMModalRenderer} from './providers/dom-modal-renderer';

export * from './framework/fluent-assign';

export const MODAL_PROVIDERS: any[] = [
    new Provider(Modal, {useClass: Modal}),
    new Provider(ModalRenderer, {useClass: DOMModalRenderer})
];
