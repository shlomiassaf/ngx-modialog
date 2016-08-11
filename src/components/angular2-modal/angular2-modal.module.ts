import { NgModule, ModuleWithProviders } from '@angular/core';

import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';
import { DOMOutsideEventPlugin } from './providers';
import {
  OverlayRenderer,
  DOMOverlayRenderer,
  CSSBackdrop,
  CSSDialogContainer,
  OverlayDialogBoundary,
  OverlayTarget
} from '../angular2-modal';
import { Overlay, ModalOverlay } from './overlay';


@NgModule({
  declarations: [
    ModalOverlay,
    CSSBackdrop,
    CSSDialogContainer,
    OverlayDialogBoundary,
    OverlayTarget
  ],
  entryComponents: [
    ModalOverlay,
    CSSBackdrop,
    CSSDialogContainer
  ]
})
export class ModalModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ModalModule,
      providers: [
        { provide: Overlay, useClass: Overlay },
        { provide: OverlayRenderer, useClass: DOMOverlayRenderer },
        { provide: EVENT_MANAGER_PLUGINS, useClass: DOMOutsideEventPlugin, multi: true },
      ]
    };
  }
}
