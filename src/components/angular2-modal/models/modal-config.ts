import {Injectable} from 'angular2/core';
let _defaultConfig: ModalConfig;

export type BootstrapModalSize = 'sm' | 'lg';

// TODO: Move bootstrap specific settings (size) to a derived interface
export interface IModalConfig {
    /**
     * Size of the modal.
     * 'lg' or 'sm' only.
     * NOTE: No validation.
     * Default to 'lg'
     */
    size: BootstrapModalSize;

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
     * A Class for the modal dialog container.
     * Default: modal-dialog
     */
    dialogClass: string;
}

/**
 * A configuration definition object.
 * Instruction for how to show a modal.
 */
@Injectable()
export class ModalConfig implements IModalConfig {
    /**
     * Size of the modal.
     * 'lg' or 'sm' only.
     * NOTE: No validation.
     * Default to 'lg'
     */
    size: BootstrapModalSize;

    /**
     * A Class for the modal dialog container.
     * Default: modal-dialog
     */
    dialogClass: string;

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

    //TODO: Change size to defined type
    constructor(size: BootstrapModalSize = undefined,
                isBlocking: boolean = null,
                keyboard: Array<number> | number = undefined,
                dialogClass: string = undefined) {
        this.size = size;
        this.isBlocking = isBlocking;
        this.keyboard = keyboard;
        this.dialogClass = dialogClass;
    }

    /**
     * Makes a ModalConfig instance valdud.
     * @param config
     * @param defaultConfig A Default config to use as master, optional.
     * @returns {ModalConfig} The same config instance sent.
     */
    static makeValid(config: ModalConfig, defaultConfig?: ModalConfig) {
        defaultConfig = (defaultConfig) ? defaultConfig : _defaultConfig;

        if (!config.size)
            config.size = defaultConfig.size;

        if (config.isBlocking !== false)
            config.isBlocking = true;

        if (config.keyboard === null) {
            config.keyboard = [];
        } else if (typeof config.keyboard === 'number') {
            config.keyboard = [<number>config.keyboard];
        } else if (!Array.isArray(<Array<number>>config.keyboard)) {
            config.keyboard = defaultConfig.keyboard;
        }

        if (!config.dialogClass) {
            config.dialogClass = defaultConfig.dialogClass;
        }

        return config;
    }

    /**
     * Returns true if the config instance supports a given key.
     * @param key
     * @returns {boolean}
     */
    supportsKey(keyCode: number): boolean {
        return (<Array<number>>this.keyboard).indexOf(keyCode) > -1;
    }
}

_defaultConfig = new ModalConfig('lg', true, [27], 'modal-dialog');
