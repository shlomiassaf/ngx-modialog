import {Provider} from '@angular/core';
import {ModalRenderer} from './models/tokens';
import {Modal} from './providers/modal';
import {DOMModalRenderer} from './providers/dom-modal-renderer';

export * from './framework/fluent-assign';
export * from './models/tokens';
// Fixes https://github.com/shlomiassaf/angular2-modal/issues/79
// export * from './models/dialog-ref';
export * from './models/modal-context';
export * from './models/modal-open-context';
export {Modal} from './providers/modal';
export {DOMModalRenderer} from './providers/dom-modal-renderer';

export const MODAL_PROVIDERS: any[] = [
    new Provider(Modal, {useClass: Modal}),
    new Provider(ModalRenderer, {useClass: DOMModalRenderer})
];

import * as bootstrap from './plugins/bootstrap/index';
import * as vex from './plugins/vex/index';
export const plugins = { bootstrap, vex };
