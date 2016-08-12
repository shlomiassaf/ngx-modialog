import { NgModule } from '@angular/core';

import { Modal } from './modal';

import { Modal as BaseModal } from '../../../angular2-modal';

function getProviders(): any[] {
  return [
    { provide: BaseModal, useClass: Modal },
    { provide: Modal, useClass: Modal }
  ];
}

@NgModule({
  providers: getProviders()
})
export class JSNativeModalModule {

  static getProviders(): any[] {
    return getProviders();
  }

}
