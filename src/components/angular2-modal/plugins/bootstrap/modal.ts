import {Modal as BaseModal} from '../../providers/modal';
import {OneButtonPresetBuilder} from './../bootstrap/presets/one-button-preset';
import {TwoButtonPresetBuilder} from './../bootstrap/presets/two-button-preset';

interface BSModal extends BaseModal {
    alert(): OneButtonPresetBuilder;
    prompt(): OneButtonPresetBuilder;
    confirm(): TwoButtonPresetBuilder;
}

export const Modal = BaseModal;
export type Modal = BSModal;
