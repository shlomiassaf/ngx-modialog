import {
  ComponentRef,
  TemplateRef,
  ReflectiveInjector,
  ResolvedReflectiveProvider, Type
} from '@angular/core';

import { Overlay } from '../overlay/index';
import { Class, Maybe } from '../framework/utils';
import { OverlayConfig, ContainerContent } from '../models/tokens';
import { DialogRef } from '../models/dialog-ref';
import { ModalControllingContextBuilder } from '../models/overlay-context';

export class UnsupportedDropInError extends Error {
  constructor(dropInName: string) {
    super();
    this.message = `Unsupported Drop-In ${dropInName}`;
  }
}

export abstract class Modal {
  constructor(public overlay: Overlay) { }


  alert(): ModalControllingContextBuilder<any> {
    throw new UnsupportedDropInError('alert');
  }

  prompt(): ModalControllingContextBuilder<any> {
    throw new UnsupportedDropInError('prompt');
  }

  confirm(): ModalControllingContextBuilder<any> {
    throw new UnsupportedDropInError('confirm');
  }

  /**
   * Opens a modal window inside an existing component.
   * @param content The content to display, either string, template ref or a component.
   * @param config Additional settings.
   * @returns {Promise<DialogRef>}
   */
  open(content: ContainerContent, config?: OverlayConfig): Promise<DialogRef<any>> {
    config = config || {} as any;
    try {
      let dialogs = this.overlay.open(config, this.constructor);

      if (dialogs.length > 1) {
        console.warn(`Attempt to open more then 1 overlay detected.
        Multiple modal copies are not supported at the moment, 
        only the first viewContainer will display.`);
      }
      // TODO:  Currently supporting 1 view container, hence working on dialogs[0].
      //        upgrade to multiple containers.
      return Promise.resolve(
        this.create(dialogs[0], content, config.bindings)
      );

    } catch (e) {
      return Promise.reject<DialogRef<any>>(e);
    }

  }

  /**
   * A Hook that enables derived classes to add content to the overlay.
   * @param dialogRef
   * @param type
   * @param bindings
   * @returns {MaybeDialogRef<any>}
   */
  protected abstract create(dialogRef: DialogRef<any>,
                            type: ContainerContent,
                            bindings?: ResolvedReflectiveProvider[]): Maybe<DialogRef<any>>;


  protected createBackdrop<T>(dialogRef: DialogRef<any>, BackdropComponent: Class<T>): ComponentRef<T> {
    const b = ReflectiveInjector.resolve([{provide: DialogRef, useValue: dialogRef}]);
    return dialogRef.overlayRef.instance.addComponent<T>(BackdropComponent, b);
  }

  protected createContainer<T>(
    dialogRef: DialogRef<any>,
    ContainerComponent: Class<T>,
    content: string | TemplateRef<any> | Type<any>,
    bindings?: ResolvedReflectiveProvider[]): ComponentRef<T> {

    const b = ReflectiveInjector.resolve([{provide: DialogRef, useValue: dialogRef}])
      .concat(bindings || []);

    let nodes: any[] = dialogRef.overlayRef.instance.getProjectables(content, b);
    return dialogRef.overlayRef.instance.addComponent<T>(ContainerComponent, b, nodes);
  }


  /**
   * A helper function for derived classes to create backdrop & container
   * @param dialogRef
   * @param backdrop
   * @param container
   * @returns { backdropRef: ComponentRef<B>, containerRef: ComponentRef<C> }
   *
   * @deprecated use createBackdrop and createContainer instead
   */
  protected createModal<B, C>(dialogRef: DialogRef<any>, backdrop: Class<B>, container: Class<C>)
                                : { backdropRef: ComponentRef<B>, containerRef: ComponentRef<C> } {
    const b = ReflectiveInjector.resolve([{provide: DialogRef, useValue: dialogRef}]);

    return {
      backdropRef: dialogRef.overlayRef.instance.addComponent<B>(backdrop, b),
      containerRef: dialogRef.overlayRef.instance.addComponent<C>(container, b)
    };
  }

}
