import { ComponentRef } from 'angular2/core';
import {PromiseWrapper} from 'angular2/src/facade/async';

import {ModalConfig} from '../models/ModalConfig';

/**
 * API to an open modal window.
 */
export class ModalDialogInstance {
    contentRef: ComponentRef;
    /**
     * States if the modal is inside a specific element.
     */
    public inElement: boolean;

    private _bootstrapRef: ComponentRef;
    private _backdropRef: ComponentRef;
    private _resultDefered: any;

    constructor(public config: ModalConfig) {
        this._resultDefered = PromiseWrapper.completer();
    }

    set backdropRef(value: ComponentRef) {
        this._backdropRef = value;
    }
    set bootstrapRef(value: ComponentRef) {
        this._bootstrapRef = value;
    }

    /**
     * A Promise that is resolved on a close event and rejected on a dismiss event.
     * @returns {Promise<T>|any|*|Promise<any>}
     */
    get result(): Promise<any> {
        return this._resultDefered.promise;
    }

    /**
     *  Close the modal with a return value, i.e: result.
     */
    close(result: any = null) {
        if ( this.contentRef.instance.beforeClose &&
                this.contentRef.instance.beforeClose() === true ) return;
        this.dispose();
        this._resultDefered.resolve(result);
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
        this.dispose();
        this._resultDefered.reject();
    }

    private dispose() {
        this._bootstrapRef.dispose();
        this._backdropRef.dispose();
        this.contentRef.dispose();
    }
}
