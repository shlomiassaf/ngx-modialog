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
  protected $$beforeOpen(config: T): ResolvedReflectiveProvider[] {
    return [];
  }

  /**
   * Open a modal window based on the configuration of this config instance.
   * @param viewContainer If set opens the modal inside the supplied viewContainer
   * @returns Promise<DialogRef>
   */
  open(viewContainer?: WideVCRef): Promise<DialogRef<T>> {
    let context: T = this.toJSON();

    if (!(context.modal instanceof Modal)) {
      return <any>Promise.reject(new Error('Configuration Error: modal service not set.'));
    }

    let overlayConfig: OverlayConfig = {
      context: context,
      viewContainer: viewContainer,
      bindings: typeof this.$$beforeOpen === 'function' && this.$$beforeOpen(context)
    };

    return context.modal.open(context.component, overlayConfig);
  }
}
