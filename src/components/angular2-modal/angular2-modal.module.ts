import { NgModule, ModuleWithProviders } from '@angular/core';
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';

import { DOMOutsideEventPlugin, DOMOverlayRenderer } from './providers/index';
import { OverlayRenderer } from './models/tokens';
import { CSSBackdrop, CSSDialogContainer } from './components/index';
import { Overlay, ModalOverlay, OverlayDialogBoundary, OverlayTarget } from './overlay/index';

@NgModule({
  declarations: [
    ModalOverlay,
    CSSBackdrop,
    CSSDialogContainer,
    OverlayDialogBoundary,
    OverlayTarget
  ],
  exports: [
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
        Overlay,
        { provide: OverlayRenderer, useClass: DOMOverlayRenderer },
        { provide: EVENT_MANAGER_PLUGINS, useClass: DOMOutsideEventPlugin, multi: true },
      ]
    };
  }
}
