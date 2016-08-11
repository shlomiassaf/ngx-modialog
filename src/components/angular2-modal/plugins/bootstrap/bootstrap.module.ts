import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Modal } from './modal';
import { BSModalContainer } from './modal-container.component';
import {
  BSMessageModal,
  BSMessageModalTitle,
  BSMessageModalBody,
  BSModalFooter
} from './message-modal.component';


import { Modal as BaseModal } from '../../../angular2-modal';

function getProviders(): any[] {
  return [
    { provide: BaseModal, useClass: Modal },
    { provide: Modal, useClass: Modal }
  ];
}

@NgModule({
  imports: [ CommonModule ],
  declarations: [
    BSModalFooter
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

