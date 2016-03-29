import { ResolvedProvider, ElementRef } from 'angular2/core';
import {Modal} from '../../providers/Modal';
import {IModalConfig, ModalConfig, BootstrapModalSize} from '../../models/ModalConfig';
import {FluentAssign, FluentAssignMethod, setAssignMethod} from './../../framework/FluentAssign';
import {ModalDialogInstance} from '../../models/ModalDialogInstance';

export interface ModalAwarePresetData extends IModalConfig {
    component: any;
    modal: Modal;
    bindings: <T>(config: T) => ResolvedProvider[];
}


/**
 * A Preset that knows about the modal service, and so can open a modal window on demand.
 * Use the fluent API to configure the preset and then invoke the 'open' method to open a modal
 * based on the preset.
 * ModalAwarePreset occupy the following properties:
 * - ModalConfig (size, isBlocking, keyboard): You can set them, if not they will get the 
 * default values defined in the Modal service.  
 * - component, modal, bindings: Preset values needed to fire up the modal.
 * - open: A Method used to open the modal window.
 */
export class ModalAwarePreset<T extends ModalAwarePresetData> extends FluentAssign<T> {
    constructor(defaultValues: T = undefined, initialSetters: string[] = undefined) {
        super(defaultValues, initialSetters);
        // this is not needed as we get them via defaults.
        // but it "protects" overwrites since we set writeOnce=true.
        setAssignMethod(this, 'modal', true);
        setAssignMethod(this, 'component', true);
        setAssignMethod(this, 'bindings', true);

        setAssignMethod(this, 'size');
        setAssignMethod(this, 'isBlocking');
        setAssignMethod(this, 'keyboard');
        setAssignMethod(this, 'dialogClass');
    }

    /**
     * Size of the modal.
     * 'lg' or 'sm' only.
     * NOTE: No validation.
     * Default to 'lg'
     */
    size: FluentAssignMethod<string, this>;
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
     * A Class for the modal dialog container.
     * Default: modal-dialog
     */
    dialogClass: FluentAssignMethod<BootstrapModalSize, this>;

    /**
     * Open a modal window based on the configuration of this config instance.
     * @param inside If set opens the modal inside the supplied elements ref at the specified anchor
     * @returns Promise<ModalDialogInstance>
     */
    open(inside?: {elementRef: ElementRef, anchorName: string}): Promise<ModalDialogInstance> {
        let config: T = this.toJSON();

        if (! (config.modal instanceof Modal) ) {
            return <any>Promise.reject(new Error('Configuration Error: modal service not set.'));
        }

        if (typeof config.bindings !== 'function') {
            return <any>Promise.reject(new Error('Configuration Error: bindings not set.'));
        }

        if (inside) {
            // TODO: Validate inside?
            return config.modal.openInside(config.component,
                inside.elementRef,
                inside.anchorName,
                config.bindings(config),
                new ModalConfig(config.size, config.isBlocking, config.keyboard));
        } else {
            return config.modal.open(config.component,
                config.bindings(config),
                new ModalConfig(config.size,
                    config.isBlocking,
                    config.keyboard,
                    config.dialogClass));
        }
    }
}
