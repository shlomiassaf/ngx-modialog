
/**
 * A configuration definition object.
 * Instruction for how to show a modal.
 */
export class ModalConfig {
    /**
     * Size of the modal.
     * 'lg' or 'sm' only.
     * NOTE: No validation.
     * Default to 'lg'
     */
    size: string;

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

    attachToBody: boolean;

    constructor(size: string = 'lg', isBlocking: boolean = false, keyboard: Array<number> | number = undefined, attachToBody: boolean = true) {
        this.size = size;
        this.isBlocking = isBlocking;
        this.attachToBody = attachToBody;

        if (keyboard === undefined) {
            keyboard = [27];
        }
        else if (keyboard !== undefined && keyboard !== null && !Array.isArray(<Array<number>>keyboard)) {
            keyboard = (!isNaN(<number>keyboard)) ? [<number>keyboard] : null;
        }
        this.keyboard = keyboard;
    }
}
