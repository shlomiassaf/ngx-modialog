import {Injectable} from 'angular2/core';
let _defaultConfig: ModalConfig;


/**
 * A configuration definition object.
 * Instruction for how to show a modal.
 */
@Injectable()
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

    constructor(size: string = null, isBlocking: boolean = null,
                keyboard: Array<number> | number = undefined) {
        this.size = size;
        this.isBlocking = isBlocking;
        this.keyboard = keyboard;
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

        if (config.keyboard !== null) {
            if (Array.isArray(<Array<number>>config.keyboard)) {
                config.keyboard = (<Array<number>>config.keyboard).length === 0
                    ? defaultConfig.keyboard : config.keyboard;
            } else if (!isNaN(<number>config.keyboard)) {
                config.keyboard = [<number>config.keyboard];
            } else {
                config.keyboard = defaultConfig.keyboard;
            }
        }

        return config;
    }

}

_defaultConfig = new ModalConfig('lg', true, [27]);
