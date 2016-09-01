import { ANALYZE_FOR_ENTRY_COMPONENTS, NgModule, ModuleWithProviders, Type } from '@angular/core';
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';

import { DOMOutsideEventPlugin, DOMOverlayRenderer } from './providers/index';
import { OverlayRenderer } from './models/tokens';
import { SwapComponentDirective, CSSBackdrop, CSSDialogContainer } from './components/index';
import {
  Overlay,
  ModalOverlay,
  OverlayDialogBoundary,
  OverlayTarget,
  DefaultOverlayTarget
} from './overlay/index';

@NgModule({
  declarations: [
    ModalOverlay,
    SwapComponentDirective,
    CSSBackdrop,
    CSSDialogContainer,
    OverlayDialogBoundary,
    OverlayTarget,
    DefaultOverlayTarget
  ],
  exports: [
    CSSBackdrop,
    CSSDialogContainer,
    SwapComponentDirective,
    OverlayDialogBoundary,
    OverlayTarget,
    DefaultOverlayTarget
  ],
  entryComponents: [
    ModalOverlay,
    CSSBackdrop,
    CSSDialogContainer
  ]
})
export class ModalModule {

  /**
   * Returns a ModalModule pre-loaded with a list of dynamically inserted components.
   * Since dynamic components are not analysed by the angular compiler they must register manually
   * using entryComponents, this is an easy way to do it.
   * @param entryComponents A list of dynamically inserted components (dialog's).
   * @returns {{ngModule: ModalModule, providers: {provide: OpaqueToken, useValue: Array<Type|any[]>, multi: boolean}[]}}
   */
  static withComponents(entryComponents: Array<Type<any> | any[]>): ModuleWithProviders {
    return {
      ngModule: ModalModule,
      providers: [
        {provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: entryComponents, multi: true}
      ]
    }
  }

  /**
   * Returns a NgModule for use in the root Module.
   * @param entryComponents A list of dynamically inserted components (dialog's).
   * @returns ModuleWithProviders
   */
  static forRoot(entryComponents?: Array<Type<any> | any[]>): ModuleWithProviders {
    return {
      ngModule: ModalModule,
      providers: [
        Overlay,
        {provide: OverlayRenderer, useClass: DOMOverlayRenderer},
        {provide: EVENT_MANAGER_PLUGINS, useClass: DOMOutsideEventPlugin, multi: true},
        {provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: entryComponents || [], multi: true}
      ]
    };
  }
}
