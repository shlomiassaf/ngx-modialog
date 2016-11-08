import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalModule, Modal as BaseModal } from 'angular2-modal';

import { Modal } from './modal';
import { DialogFormModal, FormDropIn, VEXDialogButtons } from './dialog-form-modal';

export const providers: any[] = [
  { provide: BaseModal, useClass: Modal },
  { provide: Modal, useClass: Modal }
];

@NgModule({
  imports: [ ModalModule, CommonModule ],
  declarations: [
    VEXDialogButtons,
    FormDropIn,
    DialogFormModal
  ],
  providers,
  entryComponents: [
    DialogFormModal,
    FormDropIn
  ]
})
export class VexModalModule {

  static getProviders(): any[] {
    return providers;
  }

}
