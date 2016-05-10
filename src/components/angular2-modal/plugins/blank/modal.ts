import { Modal as BaseModal } from '../../../../components/angular2-modal';

import { BlankModalContextBuilder } from './modal-context';

export interface BlankModal extends BaseModal {
    alert(): BlankModalContextBuilder;
    prompt(): BlankModalContextBuilder;
    confirm(): BlankModalContextBuilder;
}

export const Modal = BaseModal;
export type Modal = BlankModal;
