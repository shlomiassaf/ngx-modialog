import {Provider} from 'angular2/core';
import {ModalBackdropComponent} from '../models/tokens';

import {VexModalBackdrop} from './vex/modal-backdrop';
export {VexModalBackdrop} from './vex/modal-backdrop';

import {VexModalContent} from './vex/modal-content';
export {VexModalContent} from './vex/modal-content';

import {VexMessageModal} from './vex/message-modal';
export {VexMessageModal} from './vex/message-modal';

export const VEX_MODAL_PROVIDERS: any[] = [
    new Provider(ModalBackdropComponent, {useValue: VexModalBackdrop})
];
