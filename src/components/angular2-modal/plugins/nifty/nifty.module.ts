import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalModule, Modal as BaseModal } from '../../../../components/angular2-modal';

import { Modal } from './modal';
import { NiftyContainer } from './modal-container.component';

import { NiftyDialog, NiftyButtons } from './dialog.component';
function getProviders(): any[] {
  return [
    { provide: BaseModal, useClass: Modal },
    { provide: Modal, useClass: Modal }
  ];
}

@NgModule({
  imports: [ ModalModule, CommonModule ],
  declarations: [
    NiftyContainer,
    NiftyDialog,
    NiftyButtons
  ],
  providers: getProviders(),
  entryComponents: [
    NiftyContainer,
    NiftyDialog
  ]
})
export class NiftyModule {
  static getProviders(): any[] {
    return getProviders();
  }
}

