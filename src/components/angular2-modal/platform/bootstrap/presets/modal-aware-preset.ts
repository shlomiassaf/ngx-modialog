import {ResolvedReflectiveProvider, ViewContainerRef} from 'angular2/core';
import {FluentAssignMethod} from '../../../framework/fluent-assign';
import {ModalComponent} from '../../../models/tokens';
import {Modal} from '../../../providers/modal';
import {DialogRef} from '../../../models/dialog-ref';
import {ModalControllingContextBuilder} from '../../../models/modal-context';
import {BSModalContextBuilder, BSModalContext} from '../modal-context';
import {arrayUnion} from '../../../framework/utils';

const DEFAULT_SETTERS = [
    'component'
];

export interface ModalAwarePreset extends BSModalContext {
    component: any;
    modal: Modal;
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
export abstract class ModalAwarePresetBuilder<T extends ModalAwarePreset>
                                                    extends BSModalContextBuilder<T>
                                                    implements ModalControllingContextBuilder<T> {

    constructor(
        defaultValues: T = undefined,
        initialSetters: string[] = undefined,
        baseType: new () => T = undefined
    ) {
        super(
            defaultValues || <any>{},
            arrayUnion<string>(DEFAULT_SETTERS, initialSetters || []),
            baseType
        );
    }

    /**
     * A Class for the footer container.
     * Default: modal-footer
     */
    component: FluentAssignMethod<ModalComponent<T>, this>;

    /**
     * Hook to alter config and return bindings.
     * @param config
     */
    protected $$beforeOpen(config: T): ResolvedReflectiveProvider[] {
        return [];
    } 
    
    /**
     * Open a modal window based on the configuration of this config instance.
     * @param viewContainer If set opens the modal inside the supplied viewContainer
     * @returns Promise<DialogRef>
     */
    open(viewContainer?: ViewContainerRef): Promise<DialogRef<T>> {
        let config: T = this.toJSON();

        if (! (config.modal instanceof Modal) ) {
            return <any>Promise.reject(new Error('Configuration Error: modal service not set.'));
        }

        let bindings = typeof this.$$beforeOpen === 'function' && this.$$beforeOpen(config);
        return config.modal.open(config.component, config, bindings, viewContainer);
    }
}
