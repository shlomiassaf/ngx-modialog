import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Modal } from './modal';

import {
  Modal as BaseModal,
  ModalBackdropComponent,
  ModalDropInFactory,
  DROP_IN_TYPE as DIType
} from '../../index';


import { DropInPresetBuilder as Builder } from './presets/dropin-preset';
import { VexModalBackdrop } from './modal-backdrop';
import { VexModalContent } from './modal-content';
import { DialogFormModal, FormDropIn, VEXDialogButtons } from './dialog-form-modal';

function getProviders(): any[] {
  return [
    { provide: BaseModal, useClass: Modal },
    { provide: Modal, useClass: Modal },
    { provide: ModalBackdropComponent, useValue: VexModalBackdrop },
    { provide: ModalDropInFactory, useValue: {
      alert: modal => new Builder(modal, DIType.alert, <any>{isBlocking: false}),
      prompt: modal => new Builder(modal, DIType.prompt, <any>{isBlocking: true, keyboard: null}),
      confirm: modal => new Builder(modal, DIType.confirm, <any>{isBlocking: true, keyboard: null})
    }}
  ];
}

@NgModule({
  imports: [ CommonModule ],
  declarations: [
    VexModalBackdrop,
    VexModalContent,
    DialogFormModal,
    FormDropIn,
    VEXDialogButtons
  ],
  providers: getProviders(),
  entryComponents: [
    VexModalBackdrop,
    DialogFormModal,
    FormDropIn
  ]
})
export class VexModalModule {

  static getProviders(): any[] {
    return getProviders();
  }

}
