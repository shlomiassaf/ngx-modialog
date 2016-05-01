import {Injectable, ViewContainerRef} from 'angular2/core';
import {FluentAssign, FluentAssignMethod} from './../framework/fluent-assign';
import {extend, arrayUnion} from './../framework/utils';
import {DialogRef} from './dialog-ref';

export const DEFAULT_VALUES = {
    isBlocking: true,
    keyboard: [27],
    supportsKey: function supportsKey(keyCode: number): boolean {
        return (<Array<number>>this.keyboard).indexOf(keyCode) > -1;
    }
};

const DEFAULT_SETTERS = [
    'isBlocking',
    'keyboard',
    'message'
];

export class ModalContext {
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
export class ModalContextBuilder<T extends ModalContext> extends FluentAssign<T> {

    constructor(
        defaultValues: T | T[] = undefined,
        initialSetters: string[] = undefined,
        baseType: new () => T = undefined
    ) {
        super(
            extend<any>(DEFAULT_VALUES, defaultValues || {}),
            arrayUnion<string>(DEFAULT_SETTERS, initialSetters || []),
            baseType
        );
    }

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
}

export interface ModalControllingContextBuilder<T> {
    open(viewContainer?: ViewContainerRef): Promise<DialogRef<T>>;
}
