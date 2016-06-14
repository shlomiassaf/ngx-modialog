import { Modal as BaseModal } from '../../providers/modal';
import { JSNativePresetBuilder } from './presets/js-native-preset';
export interface JSNativeModal extends BaseModal {
    alert(): JSNativePresetBuilder;
    prompt(): JSNativePresetBuilder;
    confirm(): JSNativePresetBuilder;
}
export declare const Modal: typeof BaseModal;
export declare type Modal = JSNativeModal;
