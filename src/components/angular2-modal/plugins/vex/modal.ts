import {Modal as BaseModal} from '../../providers/modal';
import {DropInPresetBuilder} from './presets/dropin-preset';

export interface VEXModal extends BaseModal {
    alert(): DropInPresetBuilder;
    prompt(): DropInPresetBuilder;
    confirm(): DropInPresetBuilder;
}

export const Modal = BaseModal;
export type Modal = VEXModal;
