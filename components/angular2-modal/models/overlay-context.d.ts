import { FluentAssign, FluentAssignMethod } from './../framework/fluent-assign';
import { DialogRef } from './dialog-ref';
import { WideVCRef } from './tokens';
export declare const DEFAULT_VALUES: {
    isBlocking: boolean;
    keyboard: number[];
    supportsKey: (keyCode: number) => boolean;
};
export declare class OverlayContext {
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
    normalize(): void;
}
/**
 * A core context builder for a modal window instance, used to define the context upon
 * a modal choose it's behaviour.
 */
export declare class OverlayContextBuilder<T extends OverlayContext> extends FluentAssign<T> {
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
    constructor(defaultValues?: T | T[], initialSetters?: string[], baseType?: new () => T);
}
export interface ModalControllingContextBuilder<T> {
    open(viewContainer?: WideVCRef): Promise<DialogRef<T>>;
}
