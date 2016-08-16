import {Provider} from '@angular/core';
import {ModalRenderer} from './models/tokens';
import { DOMModalRenderer, Modal } from './providers/index';

export * from './framework/fluent-assign';
export * from './models/tokens';
export * from './models/dialog-ref';
export * from './models/modal-context';
export * from './models/modal-open-context';
export { DOMModalRenderer, Modal } from './providers/index';

export const MODAL_PROVIDERS: any[] = [
    new Provider(Modal, {useClass: Modal}),
    new Provider(ModalRenderer, {useClass: DOMModalRenderer})
];

import * as bootstrap from './plugins/bootstrap/index';
import * as vex from './plugins/vex/index';
export const plugins = { bootstrap, vex };
