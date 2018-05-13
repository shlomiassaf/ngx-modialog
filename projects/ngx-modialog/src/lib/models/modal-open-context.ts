import { ResolvedReflectiveProvider } from '@angular/core';

import { FluentAssignMethod } from '../framework/fluent-assign';
import { ModalComponent, OverlayConfig, WideVCRef } from './tokens';
import { Modal } from '../providers/index';
import { DialogRef } from './dialog-ref';
import { ModalContext, ModalContextBuilder } from './modal-context';
import { ModalControllingContextBuilder } from './overlay-context';

import { arrayUnion } from '../framework/utils';

const DEFAULT_SETTERS = [
  'component'
];

export class ModalOpenContext extends ModalContext {
  component: any;
  modal: Modal;
}

/**
 * A Modal Context that knows about the modal service, and so can open a modal window on demand.
 * Use the fluent API to configure the preset and then invoke the 'open' method to open a modal
 * based on the context.
 */
export abstract class ModalOpenContextBuilder<T extends ModalOpenContext>
                  extends ModalContextBuilder<T> implements ModalControllingContextBuilder<T> {

  /**
   * A Class for the footer container.
   * Default: modal-footer
   */
  component: FluentAssignMethod<ModalComponent<T>, this>;

  constructor(defaultValues: T = undefined,
              initialSetters: string[] = undefined,
              baseType: new () => T = undefined) {
    super(
      defaultValues || <any>{},
      arrayUnion<string>(DEFAULT_SETTERS, initialSetters || []),
      baseType
    );
  }

  /**
   * Hook to alter config and return bindings.
   * @param config
   */
  protected $$beforeOpen(config: T): void { }

  /**
   * Open a modal window based on the configuration of this config instance.
   * @param viewContainer If set opens the modal inside the supplied viewContainer
   */
  open(viewContainer?: WideVCRef): DialogRef<T> {
    let context: T = this.toJSON();

    if (!(context.modal instanceof Modal)) {
      return <any>Promise.reject(new Error('Configuration Error: modal service not set.'));
    }

    this.$$beforeOpen(context);

    let overlayConfig: OverlayConfig = {
      context: context,
      viewContainer: viewContainer
    };

    return context.modal.open(context.component, overlayConfig);
  }
}
