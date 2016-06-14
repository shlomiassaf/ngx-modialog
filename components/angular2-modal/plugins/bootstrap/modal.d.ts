import { Modal as BaseModal } from '../../providers/modal';
import { OneButtonPresetBuilder } from './../bootstrap/presets/one-button-preset';
import { TwoButtonPresetBuilder } from './../bootstrap/presets/two-button-preset';
export interface BSModal extends BaseModal {
    alert(): OneButtonPresetBuilder;
    prompt(): OneButtonPresetBuilder;
    confirm(): TwoButtonPresetBuilder;
}
export declare const Modal: typeof BaseModal;
export declare type Modal = BSModal;
