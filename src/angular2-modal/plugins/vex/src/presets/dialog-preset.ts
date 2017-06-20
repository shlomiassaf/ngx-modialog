import { Type } from '@angular/core';
import {
  FluentAssignMethod,
  privateKey,
  extend,
  arrayUnion
} from 'angular2-modal';
import { VEXModalContext, VEXModalContextBuilder } from '../modal-context';
import { Modal } from '../modal';
import {
  DialogFormModal as component,
  VEXButtonHandler,
  VEXButtonConfig
} from '../dialog-form-modal';


const DEFAULT_SETTERS = [
  'content'
];

/**
 * Data definition
 */
export class DialogPreset extends VEXModalContext {
  defaultResult: any;
  content: Type<any>;
  buttons: VEXButtonConfig[];
  showInput: any;
}

/**
 * A Preset representing the configuration needed to open MessageModal.
 * This is an abstract implementation with no concrete behaviour.
 * Use derived implementation.
 */
export class DialogPresetBuilder<T extends DialogPreset>
extends VEXModalContextBuilder<T> {
  /**
   * the message to display on the modal.
   */
  content: FluentAssignMethod<Type<any>, this>;

  constructor(modal: Modal,
              defaultValues: T = undefined,
              initialSetters: string[] = undefined,
              baseType: new () => T = undefined) {
    super(
      extend<any>({modal, component, buttons: [], defaultResult: true}, defaultValues || {}),
      arrayUnion<string>(DEFAULT_SETTERS, initialSetters || []),
      baseType || <any>DialogPreset // https://github.com/Microsoft/TypeScript/issues/7234
    );
  }

  addButton(css: string, caption: string, onClick: VEXButtonHandler): this {
    let btn = {
      cssClass: css,
      caption: caption,
      onClick: onClick
    };

    let key = privateKey('buttons');
    (this[key] as VEXButtonConfig[]).push(btn);

    return this;
  }

  addOkButton(text: string = 'OK'): this {
    this.addButton(
      'vex-dialog-button-primary vex-dialog-button vex-first',
      text,
      (cmp: component, $event: MouseEvent) => cmp.dialog.close(cmp.dialog.context.defaultResult)
    );
    return this;
  }

  addCancelButton(text: string = 'CANCEL'): this {
    this.addButton(
      'vex-dialog-button-secondary vex-dialog-button vex-last',
      text,
      (cmp: component, $event: MouseEvent) => cmp.dialog.dismiss()
    );
    return this;
  }
}
