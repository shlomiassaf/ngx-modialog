import { NgModule } from '@angular/core';

import { Modal as BaseModal } from '../../../../components/angular2-modal';

import { Modal } from './modal';

export function getProviders(): any[] {
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
