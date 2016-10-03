import { ViewContainerRef, Injectable } from '@angular/core';

import { OverlayRenderer, OverlayConfig } from '../models/tokens';
import { DialogRefStack } from '../models/dialog-ref-stack';
import { vcRefStore } from '../models/vc-ref-store';
import { DialogRef } from '../models/dialog-ref';
import { OverlayContext } from '../models/overlay-context';

const _stack = new DialogRefStack<any>();

@Injectable()
export class Overlay {
  /**
   * A Default view container ref, usually the app root container ref.
   * Make sure not to provide something that might get destroyed, it will destroy the modals too.
   * The container is used as logical view holder, elements might be moved.
   * Has to be set manually until we can find a way to get it automatically.
   */
  public defaultViewContainer: ViewContainerRef;

  get stackLength(): number {
    return _stack.length;
  }

  constructor(private _modalRenderer: OverlayRenderer) {
  }

  /**
   * Check if a given DialogRef is the top most ref in the stack.
   * TODO: distinguish between body modal vs in element modal.
   * @param dialogRef
   * @returns {boolean}
   */
  isTopMost(dialogRef: DialogRef<any>): boolean {
    return _stack.indexOf(dialogRef) === _stack.length - 1;
  }

  stackPosition(dialogRef: DialogRef<any>) {
    return _stack.indexOf(dialogRef);
  }

  groupStackLength(dialogRef: DialogRef<any>): number {
    return _stack.groupLength(_stack.groupOf(dialogRef));
  }


  /**
   * Creates an overlay and returns a dialog ref.
   * @param config instructions how to create the overlay
   * @param group A token to associate the new overlay with, used for reference (stacks usually)
   * @returns {DialogRef<T>[]}
   */
  open<T extends OverlayContext>(config: OverlayConfig, group?: any): DialogRef<T>[] {
    let viewContainer = config.viewContainer,
        containers: Array<ViewContainerRef> = [];

    if (typeof viewContainer === 'string') {
      containers = vcRefStore.getVCRef(viewContainer as string);
    } else if (Array.isArray(viewContainer)) {
      containers = viewContainer as any;
    } else if (viewContainer) {
      containers = [viewContainer] as any;
    }

    if (!containers || !containers[0]) {
      if (!this.defaultViewContainer) {
        throw new Error('Default view container not set. Add the "defaultOverlayTarget" directive ' +
          'to the application root component template (e.g: <span defaultOverlayTarget></span>. ' +
          'You can also set it manually using the "Overlay" service "defaultViewContainer" property.');
      }
      containers = [this.defaultViewContainer];
    }

    return containers
      .map( vc => this.createOverlay(config.renderer || this._modalRenderer, vc, config, group));
  }

  private createOverlay(renderer: OverlayRenderer,
                        vcRef: ViewContainerRef,
                        config: OverlayConfig,
                        group: any): DialogRef<any> {
    if (config.context) {
      config.context.normalize();
    }

    let dialog = new DialogRef<any>(this, config.context || {});
    dialog.inElement = config.context && !!config.context.inElement;

    let cmpRef = renderer.render(dialog, vcRef, config.injector);

    Object.defineProperty(dialog, 'overlayRef', {value: cmpRef});
    _stack.pushManaged(dialog, group);

    return dialog;
  }
}
