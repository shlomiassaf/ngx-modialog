import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalModule, Modal as BaseModal } from '../../../../components/angular2-modal';

import { Modal } from './modal';
import { BSModalContainer } from './modal-container.component';
import {
  BSMessageModal,
  BSMessageModalTitle,
  BSMessageModalBody,
  BSModalFooter
} from './message-modal.component';

function getProviders(): any[] {
  return [
    { provide: BaseModal, useClass: Modal },
    { provide: Modal, useClass: Modal }
  ];
}

@NgModule({
  imports: [ ModalModule, CommonModule ],
  declarations: [
    BSModalFooter,
    BSMessageModalTitle,
    BSMessageModalBody,
    BSMessageModal
  ],
  providers: getProviders(),
  entryComponents: [
    BSModalContainer,
    BSMessageModal
  ]
})
export class BootstrapModalModule {
  static getProviders(): any[] {
    return getProviders();
  }
}

