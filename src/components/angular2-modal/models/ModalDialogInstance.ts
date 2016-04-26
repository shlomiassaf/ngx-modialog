import {ComponentRef, ResolvedReflectiveProvider} from 'angular2/core';
import {PromiseWrapper} from 'angular2/src/facade/async';

import {ModalConfig} from '../models/ModalConfig';

/**
 * API to an open modal window.
 */
export class ModalDialogInstance {
    contentRef: ComponentRef;

    private _backdropRef: ComponentRef;
    private _resultDefered: any;
    private _modalDataBindings: ResolvedReflectiveProvider[];
    private _componentType: FunctionConstructor;

    constructor(public config: ModalConfig) {
        this._resultDefered = PromiseWrapper.completer();
    }

    set backdropRef(value: ComponentRef) {
        this._backdropRef = value;
    }
    set modalDataBindings(value: ResolvedReflectiveProvider[]) {
        this._modalDataBindings = value;
    }
    set componentType(value: FunctionConstructor) {
        this._componentType = value;
    }

    /**
     * A Promise that is resolved on a close event and rejected on a dismiss event.
     * @returns {Promise<T>|any|*|Promise<any>}
     */
    get result(): Promise<any> {
        return this._resultDefered.promise;
    }
    get modalDataBindings(): ResolvedReflectiveProvider[] {
        return this._modalDataBindings;
    }
    get componentType(): FunctionConstructor {
        return this._componentType;
    }

    /**
     *  Close the modal with a return value, i.e: result.
     */
    close(result: any = null) {
        if ( this.contentRef.instance.beforeClose &&
                this.contentRef.instance.beforeClose() === true ) return;
        this.destroy();
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
        this.destroy();
        this._resultDefered.reject();
    }

    private destroy() {
        this._backdropRef.destroy();
        this.contentRef.destroy();
    }
}
