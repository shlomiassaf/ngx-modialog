import {Modal as BaseModal} from '../../../../components/angular2-modal';
import {JSNativePresetBuilder} from './presets/js-native-preset';

export interface JSNativeModal extends BaseModal {
    alert(): JSNativePresetBuilder;
    prompt(): JSNativePresetBuilder;
    confirm(): JSNativePresetBuilder;
}

export const Modal = BaseModal;
export type Modal = JSNativeModal;
