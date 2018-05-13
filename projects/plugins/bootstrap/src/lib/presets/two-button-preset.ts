import {
  Modal,
  FluentAssignMethod,
  extend,
  arrayUnion
} from 'ngx-modialog';
import { BSMessageModal } from '../message-modal.component';
import { MessageModalPresetBuilder } from './message-modal-preset';
import { OneButtonPreset } from './one-button-preset';


export interface TwoButtonPreset extends OneButtonPreset {
  /**
   * Caption for the Cancel button.
   * Default: Cancel
   */
  cancelBtn: string;

  /**
   * A Class for the Cancel button.
   * Default: btn btn-default
   */
  cancelBtnClass: string;
}

/** Common two button preset */
export abstract class AbstractTwoButtonPresetBuilder extends MessageModalPresetBuilder<TwoButtonPreset> {
  okBtn: FluentAssignMethod<string, this>;
  okBtnClass: FluentAssignMethod<string, this>;
  cancelBtn: FluentAssignMethod<string, this>;
  cancelBtnClass: FluentAssignMethod<string, this>;

  constructor(modal: Modal, defaultValues: TwoButtonPreset = undefined,
              initialSetters: string[] = []) {
    super(extend<any>({
      modal: modal,
      okBtn: 'OK',
      okBtnClass: 'btn btn-primary',
      cancelBtn: 'Cancel',
      cancelBtnClass: 'btn btn-default'
    }, defaultValues || {}), arrayUnion<string>([
      'okBtn',
      'okBtnClass',
      'cancelBtn',
      'cancelBtnClass',
    ], initialSetters));
  }

  $$beforeOpen(config: TwoButtonPreset): void {
    super.$$beforeOpen(config);
    this.addButton(
      config.cancelBtnClass,
      config.cancelBtn,
      (cmp: BSMessageModal, $event: MouseEvent) => cmp.dialog.dismiss()
    );
  }
}

/**
 * A Preset for a classic 2 button modal window.
 */
export class TwoButtonPresetBuilder extends AbstractTwoButtonPresetBuilder {

  constructor(modal: Modal, defaultValues: TwoButtonPreset = undefined) {
    super(modal, defaultValues);
  }

  $$beforeOpen(config: TwoButtonPreset): void {
    super.$$beforeOpen(config);
    this.addButton(
      config.okBtnClass,
      config.okBtn,
      (cmp: BSMessageModal, $event: MouseEvent) => cmp.dialog.close(true)
    );
  }
}

export interface PromptPreset extends TwoButtonPreset {
  showInput: boolean;
  /** Default value shown in the prompt. */
  defaultValue: string;
  /** A placeholder for the input element. */
  placeholder: string;

}

export class PromptPresetBuilder extends AbstractTwoButtonPresetBuilder {
  placeholder: FluentAssignMethod<string, this>;
  defaultValue: FluentAssignMethod<string, this>;

  constructor(modal: Modal, defaultValues: PromptPreset = undefined) {
    super(modal, extend<any>({showInput: true, defaultValue: ''}, defaultValues || {}),
      ['placeholder', 'defaultValue']);
  }

  $$beforeOpen(config: PromptPreset): void {
    super.$$beforeOpen(config);
    this.addButton(
      config.okBtnClass,
      config.okBtn,
      (cmp: BSMessageModal, $event: MouseEvent) =>
        cmp.dialog.close((cmp.dialog.context as PromptPreset).defaultValue)
    );
  }
}

