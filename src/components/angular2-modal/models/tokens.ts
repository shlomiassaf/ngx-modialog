import {
  ComponentRef,
  Injector,
  ViewContainerRef,
  TemplateRef,
  Type,
  ResolvedReflectiveProvider
} from '@angular/core';

import { ModalOverlay } from '../overlay/index';
import { DialogRef } from './dialog-ref';
import { OverlayContext } from '../models/overlay-context';
import { Maybe } from '../framework/utils';

export enum DROP_IN_TYPE {
  alert,
  prompt,
  confirm
}

export type WideVCRef = ViewContainerRef | string;

export type ContainerContent = string | TemplateRef<any> | Type<any>;

export interface OverlayPlugin extends Function {
  <T>(component: any, dialogRef: DialogRef<T>, config: OverlayConfig): Maybe<DialogRef<any>>;
}

export interface OverlayConfig {
  /**
   * The context for the modal, attached to the dialog instance, DialogRef.context.
   * Default: {}
   */
  context?: OverlayContext;

  injector?: Injector;

  /**
   * Resolved providers that will inject into the component provided.
   */
  bindings?: ResolvedReflectiveProvider[];

  /**
   *  The element to block using the modal.
   *  Default: The value set in defaultViewContainer.
   */
  viewContainer?: WideVCRef;

  renderer?: OverlayRenderer;

  /**
   * Not used yet.
   */
  overlayPlugins?: OverlayPlugin | Array<OverlayPlugin>;
}

export interface ModalComponent<T> {
  dialog: DialogRef<T>;
}

export interface CloseGuard {
  /**
   * Invoked before a modal is dismissed.
   * @return true or a promise that resolves to true to cancel dismissal.
   */
  beforeDismiss?(): boolean | Promise<boolean>;

  /**
   * Invoked before a modal is closed.
   * @return true or a promise that resolves to true to cancel closing.
   */
  beforeClose?(): boolean | Promise<boolean>;
}

export abstract class OverlayRenderer {
  public abstract render(dialogRef: DialogRef<any>,
                         vcRef: ViewContainerRef,
                         injector?: Injector): ComponentRef<ModalOverlay>;
}
