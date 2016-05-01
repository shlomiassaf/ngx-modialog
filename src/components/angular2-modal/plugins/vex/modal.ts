import {Modal as BaseModal} from '../../providers/modal';
import {DropInPresetBuilder} from './presets/dropin-preset';

interface BSModal extends BaseModal {
    alert(): DropInPresetBuilder;
    prompt(): DropInPresetBuilder;
    confirm(): DropInPresetBuilder;
}

export const Modal = BaseModal;
export type Modal = BSModal;
