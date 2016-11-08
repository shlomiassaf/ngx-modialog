import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Modal as Modal_ } from 'angular2-modal';
import { Modal as InAppModal } from './modal';
import { InAppModalBackdrop } from './modal-backdrop';

export { Modal } from './modal';
export { InAppModalContext, InAppModalContextBuilder } from './modal-context';


export function getProviders(): any[] {
  return [
    { provide: Modal_, useClass: InAppModal },
    InAppModal
  ];
}

@NgModule({
  imports: [ CommonModule ],
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
