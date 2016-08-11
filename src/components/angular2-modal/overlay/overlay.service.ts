import { ViewContainerRef, Injectable } from '@angular/core';

import { OverlayRenderer, OverlayConfig } from '../models/tokens';
import { DialogRefStack } from '../models/dialog-ref-stack';
import { vcRefStore } from '../models/vc-ref-store';
import { DialogRef } from '../angular2-modal';
import { OverlayContext } from '../models/overlay-context';

const _stack = new DialogRefStack<any>();

@Injectable()
export abstract class Overlay {
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


  /**
   * Opens a modal window inside an existing component.
   */
  open<T extends OverlayContext>(context: T, config?: OverlayConfig): DialogRef<T>[] {
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
        throw new Error('defaultViewContainer not set.');
      }
      containers = [this.defaultViewContainer];
    }

    return containers.map( vc => this.createOverlay(context, vc, config.inside));
  }

  private createOverlay(context: any, vcRef: ViewContainerRef, inside: boolean): DialogRef<any> {
    if (context) {
      context.normalize();
    }

    let dialog = new DialogRef<any>(this, context || {});
    dialog.inElement = inside === undefined ? !!vcRef : !!inside;

    let cmpRef = this._modalRenderer.render(dialog, vcRef);

    Object.defineProperty(dialog, 'overlayRef', {value: cmpRef});
    _stack.pushManaged(dialog);
    dialog.onDestroy.subscribe(() => _stack.remove(dialog));

    return dialog;
  }
}