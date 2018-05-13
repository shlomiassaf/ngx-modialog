import { Observable, Subject } from 'rxjs';
import { ComponentRef } from '@angular/core';

import { PromiseCompleter } from '../framework/utils';
import { Overlay, ModalOverlay } from '../overlay/index';
import { CloseGuard } from '../models/tokens';
import { DialogBailOutError } from '../models/errors';

/**
 * API to an open modal window.
 */
export class DialogRef<T> {
  /**
   * Reference to the overlay component ref.
   */
  overlayRef: ComponentRef<ModalOverlay>;

  /**
   * States if the modal is inside a specific element.
   */
  public inElement: boolean;

  public destroyed: boolean;

  /**
   * Fired before dialog is destroyed.
   * No need to unsubscribe, done automatically.
   * Note: Always called.
   * When called, overlayRef might or might not be destroyed.
   */
  public onDestroy: Observable<void>;

  private _resultDeferred: PromiseCompleter<any> = new PromiseCompleter<any>();
  private _onDestroy: Subject<void> = new Subject<void>();
  private closeGuard: CloseGuard;

  constructor(public overlay: Overlay, public context?: T) {
    this.onDestroy = this._onDestroy.asObservable();
  }

  /**
   * A Promise that is resolved on a close event and rejected on a dismiss event.
   */
  get result(): Promise<any> {
    return this._resultDeferred.promise;
  }

  /**
   * Set a close/dismiss guard
   * @param g
   */
  setCloseGuard(guard: CloseGuard): void {
    this.closeGuard = guard;
  }

  /**
   *  Close the modal with a return value, i.e: result.
   */
  close(result: any = null) {
    const _close = () => {
      this.destroy();
      this._resultDeferred.resolve(result);
    };
    this._fireHook<boolean>('beforeClose')
      .then(value => value !== true && _close())
      .catch(_close);
  }

  /**
   *  Close the modal without a return value, i.e: cancelled.
   *  This call is automatically invoked when a user either:
   *  - Presses an exit keyboard key (if configured).
   *  - Clicks outside of the modal window (if configured).
   *  Usually, dismiss represent a Cancel button or a X button.
   */
  dismiss() {
    const _dismiss = () => {
      this.destroy();
      this._resultDeferred.promise.catch(() => {});
      this._resultDeferred.reject();
    };
    this._fireHook<boolean>('beforeDismiss')
      .then(value => value !== true && _dismiss())
      .catch(_dismiss);
  }

  /**
   * Gracefully close the overlay/dialog with a rejected result.
   * Does not trigger canDestroy on the overlay.
   */
  bailOut() {
    if (this.destroyed !== true) {
      this.destroyed = true;
      this._onDestroy.next(null);
      this._onDestroy.complete();
      this._resultDeferred.reject(new DialogBailOutError());
    }
  }

  destroy() {
    if (this.destroyed !== true) {
      this.destroyed = true;

      if (typeof this.overlayRef.instance.canDestroy === 'function') {
        this.overlayRef.instance.canDestroy()
          .catch( () => {})
          .then ( () => this._destroy() );
      } else {
        this._destroy();
      }
    }
  }

  private _destroy(): void {
    this._onDestroy.next(null);
    this._onDestroy.complete();
    this.overlayRef.destroy()
  }

  private _fireHook<T>(name: 'beforeClose' | 'beforeDismiss'): Promise<T> {
    const gurad = this.closeGuard,
          fn: Function = gurad && typeof gurad[name] === 'function' && gurad[name];

    return Promise.resolve(fn ? fn.call(gurad) : false);
  }
}
