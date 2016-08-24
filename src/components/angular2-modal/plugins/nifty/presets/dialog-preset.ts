import { Type } from '@angular/core';
import {
  FluentAssignMethod,
  privateKey,
  extend,
  arrayUnion,
  ModalComponent
} from '../../../../../components/angular2-modal';

import { NiftyContext, NiftyContextBuilder } from '../modal-context';
import { Modal } from '../modal';
import { NiftyDialog } from '../dialog.component';

const DEFAULT_SETTERS = [
  'title'
];

export interface NiftyButtonHandler {
  (cmp: ModalComponent<DialogPreset>, $event: MouseEvent): void;
}

/**
 * Interface for button definition
 */
export interface NiftyButtonConfig {
  cssClass: string;
  caption: string;
  onClick: NiftyButtonHandler;
}

export interface NiftyButtonClickEvent {
  btn: NiftyButtonConfig;
  $event: MouseEvent;
}

/**
 * Data definition
 */
export class DialogPreset extends NiftyContext {
  title: string;
  buttons: NiftyButtonConfig[];
}

/**
 * A Preset representing the configuration needed to open MessageModal.
 * This is an abstract implementation with no concrete behaviour.
 * Use derived implementation.
 */
export class DialogPresetBuilder<T extends DialogPreset> extends NiftyContextBuilder<T> {
  constructor(modal: Modal,
              defaultValues: T = undefined,
              initialSetters: string[] = undefined,
              baseType: new () => T = undefined) {
    super(
      extend<any>({modal, component: NiftyDialog, buttons: [] }, defaultValues || {}),
      arrayUnion<string>(DEFAULT_SETTERS, initialSetters || []),
      baseType || <any>DialogPreset // https://github.com/Microsoft/TypeScript/issues/7234
    );
  }

  /**
   * Caption for the title, enclosed in a H3 container.
   */
  title: FluentAssignMethod<string, this>;

  addButton(css: string, caption: string, onClick: NiftyButtonHandler): this {
    let btn = {
      cssClass: css,
      caption: caption,
      onClick: onClick
    };

    let key = privateKey('buttons');
    (this[key] as NiftyButtonConfig[]).push(btn);

    return this;
  }

}
