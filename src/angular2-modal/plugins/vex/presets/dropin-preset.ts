import { ResolvedReflectiveProvider } from '@angular/core';
import {
  DROP_IN_TYPE,
  FluentAssignMethod,
  extend
} from 'angular2-modal';
import { Modal } from '../modal';
import { DialogFormModal as component, FormDropIn as content } from '../dialog-form-modal';
import { DialogPreset, DialogPresetBuilder } from './dialog-preset';

const DEFAULT_VALUES = {
  component,
  content,
  okBtn: 'OK',
  cancelBtn: 'Cancel'
};

const DEFAULT_SETTERS = [
  'okBtn',
  'cancelBtn',
  'placeholder'
];

/**
 * Data definition
 */
export class DropInPreset extends DialogPreset {

  /**
   * the message to display on the modal.
   */
  message: string;

  /**
   * OK button caption.
   * Default: OK
   * Set to false ('', undefined, null, false) to remove button.
   */
  okBtn: string;

  /**
   * Cancel button caption.
   * Default: Cancel
   * Set to false ('', undefined, null, false) to remove button.
   */
  cancelBtn: string;

  /**
   * A placeholder for the input element.
   * Valid only for prompt modal.
   */
  placeholder: string;

  dropInType: DROP_IN_TYPE;

  get showInput(): boolean {
    return this.dropInType === DROP_IN_TYPE.prompt;
  }
}

/**
 * A Preset representing all 3 drop ins (alert, prompt, confirm)
 */
export class DropInPresetBuilder extends DialogPresetBuilder<DropInPreset> {

  /**
   * the message to display on the modal.
   */
  message: FluentAssignMethod<string, this>;

  /**
   * The default Ok button caption.
   */
  okBtn: FluentAssignMethod<string, this>;

  /**
   * The default Cancel button caption.
   */
  cancelBtn: FluentAssignMethod<string, this>;

  /**
   * A placeholder for the input element.
   * Valid only for prompt modal.
   */
  placeholder: FluentAssignMethod<string, this>;

  constructor(modal: Modal, dropInType: DROP_IN_TYPE, defaultValues: DropInPreset = undefined) {
    super(
      modal,
      extend<any>(extend({modal, dropInType}, DEFAULT_VALUES), defaultValues || {}),
      DEFAULT_SETTERS,
      DropInPreset
    );
  }

  $$beforeOpen(config: DropInPreset): ResolvedReflectiveProvider[] {
    if (config.okBtn) {
      this.addOkButton(config.okBtn);
    }

    switch (config.dropInType) {
      case DROP_IN_TYPE.prompt:
        config.defaultResult = undefined;
      case DROP_IN_TYPE.confirm:
        if (config.cancelBtn) {
          this.addCancelButton(config.cancelBtn);
        }
        break;
    }
    return super.$$beforeOpen(config);
  }
}
