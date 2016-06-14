import { ComponentRef } from '@angular/core';
import { PromiseWrapper, PromiseCompleter } from '@angular/core/src/facade/promise';

/**
 * API to an open modal window.
 */
export class DialogRef<T> {
    /** 
     * The reference to the component ref.
     * This can be return undefined, since the componentRef is set only when the modal is shown.
     * Use componentRefPromise to get a promise that will resolve when the componentRet is set.
     * @internal
     * @return {ComponentRef<any>}
     */
    contentRef: ComponentRef<any>;
    /**
     * States if the modal is inside a specific element.
     */
    public inElement: boolean;
    private _resultDeferred: PromiseCompleter<any>;

    constructor(public context?: T) {
        this._resultDeferred = PromiseWrapper.completer();
    }

    /**
     * A Promise that is resolved on a close event and rejected on a dismiss event.
     * @returns {Promise<T>|any|*|Promise<any>}
     */
    get result(): Promise<any> {
        return this._resultDeferred.promise;
    }

    /**
     *  Close the modal with a return value, i.e: result.
     */
    close(result: any = null) {
        const _close = () => {
            this.destroy();
            this._resultDeferred.resolve(result);
        }
        this._fireHook<boolean>('beforeClose').then(value => {
            if (value === true) return;
            _close();
        }, _close);
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
            this._resultDeferred.reject();
        }
        this._fireHook<boolean>('beforeDismiss').then(value => {
            if (value === true) return;
            _dismiss();
        }, _dismiss);
    }

    destroy() { }

    private _fireHook<T>(name: 'beforeClose' | 'beforeDismiss'): Promise<T> {
        let instance = this.contentRef && this.contentRef.instance,
            fn = instance && typeof instance[name] === 'function' && instance[name];

        if (fn) {
            const retVal = fn.call(instance);
            return PromiseWrapper.resolve(retVal);
        } else {
            return PromiseWrapper.resolve(undefined);
        }
    }
}
