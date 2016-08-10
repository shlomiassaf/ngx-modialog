import { NgModule, ModuleWithProviders } from '@angular/core';

import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';
import { DOMOutsideEventPlugin } from './providers/outside-event-plugin';
import { ModalRenderer, DOMModalRenderer } from '../angular2-modal';

@NgModule({
})
export class ModalModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ModalModule,
      providers: [
        { provide: ModalRenderer, useClass: DOMModalRenderer },
        { provide: EVENT_MANAGER_PLUGINS, useClass: DOMOutsideEventPlugin, multi: true },
      ]
    };
  }
}
