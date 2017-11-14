import { ComponentRef } from '@angular/core';

import { Overlay } from '../overlay/index';
import { Class } from '../framework/utils';
import { OverlayConfig, ContainerContent } from '../models/tokens';
import { DialogRef } from '../models/dialog-ref';
import { ModalControllingContextBuilder } from '../models/overlay-context';

export function unsupportedDropInError(dropInName: string): Error {
  return new Error(`Unsupported Drop-In ${dropInName}`);
}

export abstract class Modal {
  constructor(public overlay: Overlay) { }


  alert(): ModalControllingContextBuilder<any> {
    throw unsupportedDropInError('alert');
  }

  prompt(): ModalControllingContextBuilder<any> {
    throw unsupportedDropInError('prompt');
  }

  confirm(): ModalControllingContextBuilder<any> {
    throw unsupportedDropInError('confirm');
  }

  /**
   * Opens a modal window inside an existing component.
   * @param content The content to display, either string, template ref or a component.
   * @param config Additional settings.
   */
  open(content: ContainerContent, config?: OverlayConfig): DialogRef<any> {
    config = config || {} as any;
    let dialogs = this.overlay.open(config, this.constructor);

    if (dialogs.length > 1) {
      console.warn(`Attempt to open more then 1 overlay detected.
      Multiple modal copies are not supported at the moment, 
      only the first viewContainer will display.`);
    }
    // TODO:  Currently supporting 1 view container, hence working on dialogs[0].
    //        upgrade to multiple containers.
    return this.create(dialogs[0], content)
  }

  /**
   * A Hook that enables derived classes to add content to the overlay.
   * @param dialogRef
   * @param type
   */
  protected abstract create(dialogRef: DialogRef<any>, type: ContainerContent): DialogRef<any>;


  protected createBackdrop<T>(dialogRef: DialogRef<any>, BackdropComponent: Class<T>): ComponentRef<T> {
    return dialogRef.overlayRef.instance.addComponent<T>(BackdropComponent);
  }

  protected createContainer<T>(
    dialogRef: DialogRef<any>,
    ContainerComponent: Class<T>,
    content: ContainerContent): ComponentRef<T> {

    let nodes: any[] = dialogRef.overlayRef.instance.getProjectables(content);
    return dialogRef.overlayRef.instance.addComponent<T>(ContainerComponent, nodes);
  }

}
