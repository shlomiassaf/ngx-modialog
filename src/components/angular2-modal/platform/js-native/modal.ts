import {Modal as BaseModal} from '../../providers/modal';
import {JSNativePresetBuilder} from './presets/js-native-preset';

interface BSModal extends BaseModal {
    alert(): JSNativePresetBuilder;
    prompt(): JSNativePresetBuilder;
    confirm(): JSNativePresetBuilder;
}

export const Modal = BaseModal;
export type Modal = BSModal;
