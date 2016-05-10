import { Modal as BaseModal } from '../../../../components/angular2-modal';
import { InAppModalContextBuilder } from './modal-context';
export interface InAppModal extends BaseModal {
    alert(): InAppModalContextBuilder;
}
export declare const Modal: typeof BaseModal;
export declare type Modal = InAppModal;
