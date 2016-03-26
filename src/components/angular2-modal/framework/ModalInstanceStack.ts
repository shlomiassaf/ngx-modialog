import {ModalDialogInstance} from '../models/ModalDialogInstance';
import { DOM } from 'angular2/src/platform/dom/dom_adapter';

/**
 * A dumb stack implementation over an array.
 */
export class ModalInstanceStack {
    private _stack: ModalDialogInstance[] = [];


    push(mInstance: ModalDialogInstance): void {
        let idx = this._stack.indexOf(mInstance);
        if (idx === -1) this._stack.push(mInstance);

        /* TODO: this is wrong for several reasons:
         1) This is a direct DOM access we need to find another way or to separate it.
         2) It not the place for it.
         3) It doesn't care if its a modal inside an element or a wide open one.
         If its inside an element we need to add the 'modal-open' to that element.
         If its wide open we add to the body, we need to traverse the stack every time
         know what's going on and do it.
         */
        if (this._stack.length === 1) {
            DOM.addClass(DOM.query('body'), 'modal-open');
        }
    }

    /**
     * Push a ModalDialogInstance into the stack and manage it so when it's done
     * it will automatically kick itself out of the stack.
     * @param mInstance
     */
    pushManaged(mInstance: ModalDialogInstance): void {
        this.push(mInstance);
        mInstance.result
            .then(() => this.remove(mInstance))
            .catch(() => this.remove(mInstance));
        // we don't "pop" because we can't know for sure that our instance is the last.
        // In a user event world it will be the last, but since modals can close programmatically
        // we can't tell.
    }

    pop(): void {
        this._stack.pop();
    }

    /**
     * Remove a ModalDialogInstance from the stack.
     * @param mInstance
     */
    remove(mInstance: ModalDialogInstance): void {
        let idx = this._stack.indexOf(mInstance);
        if (idx > -1) this._stack.splice(idx, 1);
        if (this._stack.length === 0) {
            DOM.removeClass(DOM.query('body'), 'modal-open');
        }
    }


    index(index: number): ModalDialogInstance {
        return this._stack[index];
    }

    indexOf(mInstance: ModalDialogInstance): number {
        return this._stack.indexOf(mInstance);
    }

    get length(): number {
        return this._stack.length;
    }
}
