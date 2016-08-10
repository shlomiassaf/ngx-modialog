import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Modal } from './modal';
import { InAppModalBackdrop } from './modal-backdrop';
import { InAppModalContextBuilder } from './modal-context';

import {
  Modal as BaseModal,
  ModalBackdropComponent,
  ModalDropInFactory
} from '../../../../components/angular2-modal';


export { Modal } from './modal';
export { InAppModalContext, InAppModalContextBuilder } from './modal-context';

function getProviders(): any[] {
  return [
    { provide: BaseModal, useClass: Modal },
    { provide: Modal, useClass: Modal },
    { provide: ModalBackdropComponent, useValue: InAppModalBackdrop },
    { provide: ModalDropInFactory, useValue: {
      alert: modal => new InAppModalContextBuilder(modal),
      prompt: undefined,
      confirm: undefined
    }}
  ];
}

@NgModule({
  imports: [CommonModule],
  declarations: [
    InAppModalBackdrop
  ],
  providers: getProviders(),
  entryComponents: [
    InAppModalBackdrop
  ]
})
export class InAppModalModule {
  static getProviders(): any[] {
    return getProviders();
  }
}
