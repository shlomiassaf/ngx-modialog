import { ResolvedReflectiveProvider } from '@angular/core';
import { Modal, FluentAssignMethod, extend } from 'angular2-modal';
import { BSMessageModal } from '../message-modal.component';
import { MessageModalPresetBuilder, MessageModalPreset } from './message-modal-preset';

export interface OneButtonPreset extends MessageModalPreset {
  /**
   * Caption for the OK button.
   * Default: OK
   */
  okBtn: string;

  /**
   * A Class for the OK button.
   * Default: btn btn-primary
   */
  okBtnClass: string;
}

/**
 * A Preset for a classic 1 button modal window.
 */
export class OneButtonPresetBuilder extends MessageModalPresetBuilder<OneButtonPreset> {
  okBtn: FluentAssignMethod<string, this>;
  okBtnClass: FluentAssignMethod<string, this>;

  constructor(modal: Modal, defaultValues: OneButtonPreset = undefined) {
    super(extend<any>({
      modal: modal,
      okBtn: 'OK',
      okBtnClass: 'btn btn-primary'
    }, defaultValues || {}), [
      'okBtn',
      'okBtnClass'
    ]);
  }

  $$beforeOpen(config: OneButtonPreset): ResolvedReflectiveProvider[] {
    this.addButton(
      config.okBtnClass,
      config.okBtn,
      (cmp: BSMessageModal, $event: MouseEvent) => cmp.dialog.close(true)
    );
    return super.$$beforeOpen(config);
  }
}

