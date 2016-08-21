import { ResolvedReflectiveProvider } from '@angular/core';
import {
  FluentAssignMethod,
    extend
} from '../../../../angular2-modal';
import { Modal } from '../../../../angular2-modal';
import { BSMessageModal } from '../message-modal';
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

/**
 * A Preset for a classic 2 button modal window.
 */
export class TwoButtonPresetBuilder extends MessageModalPresetBuilder<TwoButtonPreset> {
  okBtn: FluentAssignMethod<string, this>;
  okBtnClass: FluentAssignMethod<string, this>;
  cancelBtn: FluentAssignMethod<string, this>;
  cancelBtnClass: FluentAssignMethod<string, this>;

  constructor(modal: Modal, defaultValues: TwoButtonPreset = undefined) {
    super(extend<any>({
      modal: modal,
      okBtn: 'OK',
      okBtnClass: 'btn btn-primary',
      cancelBtn: 'Cancel',
      cancelBtnClass: 'btn btn-default'
    }, defaultValues || {}), [
      'okBtn',
      'okBtnClass',
      'cancelBtn',
      'cancelBtnClass'
    ]);
  }

  $$beforeOpen(config: TwoButtonPreset): ResolvedReflectiveProvider[] {
    this.addButton(
      config.okBtnClass,
      config.okBtn,
      (cmp: BSMessageModal, $event: MouseEvent) => cmp.dialog.close(true)
    )
      .addButton(
        config.cancelBtnClass,
        config.cancelBtn,
        (cmp: BSMessageModal, $event: MouseEvent) => cmp.dialog.dismiss()
      );

    return super.$$beforeOpen(config);
  }
}

