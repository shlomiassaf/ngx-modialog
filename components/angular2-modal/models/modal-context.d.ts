import { ViewContainerRef } from '@angular/core';
import { FluentAssign, FluentAssignMethod } from './../framework/fluent-assign';
import { DialogRef } from './dialog-ref';
export declare const DEFAULT_VALUES: {
    isBlocking: boolean;
    keyboard: number[];
    supportsKey: (keyCode: number) => boolean;
};
export declare class ModalContext {
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
    /**
     * The core message to display.
     * A modal might have an extended message (e.g: HTML message) or other fields (e.g: title) but
     * all models, at core, convey a message thus message is common to all modals.
     */
    message: string;
    normalize(): void;
}
/**
 * A core context builder for a modal window instance, used to define the context upon
 * a modal choose it's behaviour.
 */
export declare class ModalContextBuilder<T extends ModalContext> extends FluentAssign<T> {
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
    /**
     * The core message to display.
     * A modal might have an extended message (e.g: HTML message) or other fields (e.g: title) but
     * all models, at core, convey a message thus message is common to all modals.
     */
    message: FluentAssignMethod<string, this>;
    constructor(defaultValues?: T | T[], initialSetters?: string[], baseType?: new () => T);
}
export interface ModalControllingContextBuilder<T> {
    open(viewContainer?: ViewContainerRef): Promise<DialogRef<T>>;
}
