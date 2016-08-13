import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Modal } from './modal';
import { BSModalBackdrop } from './modal-backdrop';
import { BSMessageModal } from './message-modal';
import { BSModalContainer } from './modal-container';
import { BSModalFooter } from './modal-footer';


import { OneButtonPresetBuilder } from './presets/one-button-preset';
import { TwoButtonPresetBuilder } from './presets/two-button-preset';

import {
  Modal as BaseModal,
  ModalBackdropComponent,
  ModalDropInFactory
} from '../../../../components/angular2-modal';

function getProviders(): any[] {
  return [
    { provide: BaseModal, useClass: Modal },
    { provide: Modal, useClass: Modal },
    { provide: ModalBackdropComponent, useValue: BSModalBackdrop },
    { provide: ModalDropInFactory, useValue: {
      alert: modal => new OneButtonPresetBuilder(modal, <any>{isBlocking: false}),
      prompt: modal => new OneButtonPresetBuilder(modal, <any>{isBlocking: true, keyboard: null}),
      confirm: modal => new TwoButtonPresetBuilder(modal, <any>{isBlocking: true, keyboard: null})
    }}
  ];
}

@NgModule({
  imports: [ CommonModule ],
  declarations: [
    BSModalBackdrop,
    BSMessageModal,
    BSModalContainer,
    BSModalFooter
  ],
  providers: getProviders(),
  entryComponents: [
    BSModalBackdrop,
    BSMessageModal
  ]
})
export class BootstrapModalModule {
  static getProviders(): any[] {
    return getProviders();
  }
}

