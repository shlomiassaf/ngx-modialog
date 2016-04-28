import {Provider} from 'angular2/core';
import {ModalBackdropComponent} from '../models/tokens';

import {BSModalBackdrop} from './bootstrap/modal-backdrop';
export {BSModalBackdrop} from './bootstrap/modal-backdrop';

import {BSModalContainer} from './bootstrap/modal-container';
export {BSModalContainer} from './bootstrap/modal-container';

import {BSMessageModal} from './bootstrap/message-modal';
export {BSMessageModal} from './bootstrap/message-modal';

import {BSModalFooter} from './bootstrap/modal-footer';
export {BSModalFooter} from './bootstrap/modal-footer';

export const BS_MODAL_PROVIDERS: any[] = [
    new Provider(ModalBackdropComponent, {useValue: BSModalBackdrop})
];