import { ComponentRef } from 'angular2/core';
import {PromiseWrapper} from 'angular2/src/facade/async';

/**
 * API to an open modal window.
 */
export class DialogRef<T> {
    contentRef: ComponentRef;
    /**
     * States if the modal is inside a specific element.
     */
    public inElement: boolean;

    private _resultDeferred: any;
    
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
        if ( this.contentRef.instance.beforeClose &&
                this.contentRef.instance.beforeClose() === true ) return;
        this.destroy();
        this._resultDeferred.resolve(result);
    }

    /**
     *  Close the modal without a return value, i.e: cancelled.
     *  This call is automatically invoked when a user either:
     *  - Presses an exit keyboard key (if configured).
     *  - Clicks outside of the modal window (if configured).
     *  Usually, dismiss represent a Cancel button or a X button.
     */
    dismiss() {
        if ( this.contentRef.instance.beforeDismiss &&
            this.contentRef.instance.beforeDismiss() === true ) return;
        this.destroy();
        this._resultDeferred.reject();
    }


    destroy() {}
}
