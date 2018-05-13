import { ViewContainerRef } from '@angular/core';
import { DialogRef, DROP_IN_TYPE, OverlayConfig } from 'ngx-modialog';
import { Modal } from '../modal';

import {
  JSNativeModalContext,
  JSNativeModalContextBuilder
} from '../modal-context';
import { JSNativeModalRenderer } from '../js-native-modal-renderer';

export class JSNativePresetBuilder extends JSNativeModalContextBuilder<JSNativeModalContext> {

  constructor(modal: Modal, dialogType: DROP_IN_TYPE) {
    super(<any>{modal, dialogType});
  }

  /**
   * Open a modal window based on the configuration of this config instance.
   * @param viewContainer If set opens the modal inside the supplied viewContainer
   */
  open(viewContainer?: ViewContainerRef): DialogRef<JSNativeModalContext> {
    let context: JSNativeModalContext = this.toJSON();

    if (!(context.modal instanceof Modal)) {
      return <any>Promise.reject(new Error('Configuration Error: modal service not set.'));
    }

    this.$$beforeOpen(context);

    let overlayConfig: OverlayConfig = {
      context: context,
      renderer: new JSNativeModalRenderer(),
      viewContainer: viewContainer
    };

    return context.modal.open(context.component, overlayConfig);
  }
}

