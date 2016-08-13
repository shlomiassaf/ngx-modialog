import { NgModule } from '@angular/core';

import { Modal } from './modal';
import { JSNativeModalRenderer } from './js-native-modal-renderer';
import { JSNativePresetBuilder } from './presets/js-native-preset';

import {
  Modal as BaseModal,
  ModalBackdropComponent,
  ModalDropInFactory,
  ModalRenderer,
  DROP_IN_TYPE
} from '../../../../components/angular2-modal';

function getProviders(): any[] {
  return [
    { provide: BaseModal, useClass: Modal },
    { provide: Modal, useClass: Modal },
    { provide: ModalRenderer, useClass: JSNativeModalRenderer },
    { provide: ModalBackdropComponent, useValue: {} },
    { provide: ModalDropInFactory, useValue: {
      alert: modal => new JSNativePresetBuilder(modal, DROP_IN_TYPE.alert),
      prompt: modal => new JSNativePresetBuilder(modal, DROP_IN_TYPE.prompt),
      confirm: modal => new JSNativePresetBuilder(modal, DROP_IN_TYPE.confirm)
    }}
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
