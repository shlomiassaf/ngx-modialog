import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalModule, Modal as BaseModal } from 'angular2-modal';

import { Modal } from './modal';
import { BSModalContainer } from './modal-container.component';
import {
  BSMessageModal,
  BSMessageModalTitle,
  BSMessageModalBody,
  BSModalFooter
} from './message-modal.component';

export const providers: any[] = [
  { provide: BaseModal, useClass: Modal },
  { provide: Modal, useClass: Modal }
];

@NgModule({
  imports: [ ModalModule, CommonModule ],
  declarations: [
    BSModalFooter,
    BSMessageModalTitle,
    BSMessageModalBody,
    BSMessageModal,
    BSModalContainer
  ],
  providers,
  entryComponents: [
    BSModalContainer,
    BSMessageModal
  ]
})
export class BootstrapModalModule {
  static getProviders(): any[] {
    return providers;
  }
}

