import { Modal, OneButtonPresetBuilder, TwoButtonPresetBuilder } from '../../../components/angular2-modal/plugins/bootstrap/index';
export declare function alert(modal: Modal): OneButtonPresetBuilder;
export declare function prompt(modal: Modal): OneButtonPresetBuilder;
export declare function confirm(modal: Modal): TwoButtonPresetBuilder;
export declare function cascading(modal: Modal): {
    open: () => any;
};
export declare function inElement(modal: Modal): OneButtonPresetBuilder;
