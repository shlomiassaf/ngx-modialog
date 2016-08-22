import { Injectable } from '@angular/core';

import { FluentAssign, FluentAssignMethod } from './../framework/fluent-assign';
import { extend, arrayUnion } from './../framework/utils';
import { DialogRef } from './dialog-ref';
import { WideVCRef } from './tokens';

export const DEFAULT_VALUES = {
  inElement: false,
  isBlocking: true,
  keyboard: [27],
  supportsKey: function supportsKey(keyCode: number): boolean {
    return (<Array<number>>this.keyboard).indexOf(keyCode) > -1;
  }
};

const DEFAULT_SETTERS = [
  'inElement',
  'isBlocking',
  'keyboard'
];

export class OverlayContext {
  /**
   * Describes if the modal is rendered within the container element.
   * The container element is the ViewContainerRef supplied.
   * Defaults to false.
   */
  inElement: boolean;

  /**
   * Describes if the modal is blocking modal.
   * A Blocking modal is not closable by clicking outside of the modal window.
   * Defaults to false.
   */
  isBlocking: boolean;

  /**
   * Keyboard value/s that close the modal.
   * Accepts either a single numeric value or an array of numeric values.
   * A modal closed by a keyboard stroke will result in a 'reject' notification from the promise.
   * Defaults to 27, set `null` implicitly to disable.
   */
  keyboard: Array<number> | number;

  normalize(): void {
    if (this.isBlocking !== false)
      this.isBlocking = true;

    if (this.keyboard === null) {
      this.keyboard = [];
    } else if (typeof this.keyboard === 'number') {
      this.keyboard = [<number>this.keyboard];
    } else if (!Array.isArray(<Array<number>>this.keyboard)) {
      this.keyboard = DEFAULT_VALUES.keyboard;
    }
  }
}

/**
 * A core context builder for a modal window instance, used to define the context upon
 * a modal choose it's behaviour.
 */
@Injectable()
export class OverlayContextBuilder<T extends OverlayContext> extends FluentAssign<T> {
  /**
   * Describes if the modal is rendered within the container element.
   * The container element is the ViewContainerRef supplied.
   * Defaults to false.
   */
  inElement: FluentAssignMethod<boolean, this>;

  /**
   * Describes if the modal is blocking modal.
   * A Blocking modal is not closable by clicking outside of the modal window.
   * Defaults to false.
   */
  isBlocking: FluentAssignMethod<boolean, this>;

  /**
   * Keyboard value/s that close the modal.
   * Accepts either a single numeric value or an array of numeric values.
   * A modal closed by a keyboard stroke will result in a 'reject' notification from the promise.
   * Defaults to 27, set `null` implicitly to disable.
   */
  keyboard: FluentAssignMethod<Array<number> | number, this>;


  constructor(defaultValues: T | T[] = undefined,
              initialSetters: string[] = undefined,
              baseType: new () => T = undefined) {
    super(
      extend<any>(DEFAULT_VALUES, defaultValues || {}),
      arrayUnion<string>(DEFAULT_SETTERS, initialSetters || []),
      baseType
    );
  }
}

export interface ModalControllingContextBuilder<T> {
  open(viewContainer?: WideVCRef): Promise<DialogRef<T>>;
}
