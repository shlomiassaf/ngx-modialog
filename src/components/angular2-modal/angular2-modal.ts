import {Provider} from 'angular2/core';

import {BackdropRenderer} from './models/tokens';
export * from './models/tokens';

export * from './models/modal-context';
export * from './models/dialog-ref';

import {Modal} from './providers/modal';
export {Modal} from './providers/modal';

import {DOMBackdropRenderer} from './providers/dom-backdrop-renderer';
export {DOMBackdropRenderer} from './providers/dom-backdrop-renderer';

export * from './framework/fluent-assign';

export const MODAL_PROVIDERS: any[] = [
    new Provider(Modal, {useClass: Modal}),
    new Provider(BackdropRenderer, {useClass: DOMBackdropRenderer})
];
