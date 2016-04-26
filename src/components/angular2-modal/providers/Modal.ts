import {
    ReflectiveInjector,
    DynamicComponentLoader,
    ComponentRef,
    ViewChild,
    ViewContainerRef,
    Injectable,
    provide,
    ResolvedReflectiveProvider,
    Optional,
    ApplicationRef
} from 'angular2/core';

import {ModalInstanceStack} from '../framework/ModalInstanceStack';
import {ModalConfig} from '../models/ModalConfig';
import {ModalDialogInstance} from '../models/ModalDialogInstance';
import {ModalBackdrop} from '../components/modalBackdrop';
import {BootstrapModalContainer} from '../components/bootstrapModalContainer';
import {OneButtonPreset, TwoButtonPreset} from '../presets';

const _stack = new ModalInstanceStack();


@Injectable()
export class Modal {
    private config: ModalConfig;

    constructor(private componentLoader: DynamicComponentLoader,
                @Optional() defaultConfig: ModalConfig) {
        // The Modal class should be an application wide service (i.e: singleton).
        // This will run once in most applications...
        // If the user provides a ModalConfig instance to the DI,
        // the custom config will be the default one.

        Object.defineProperty(this, 'config', <any>{
            configurable: false,
            enumerable: true,
            value: (defaultConfig)
                ? ModalConfig.makeValid(defaultConfig) : ModalConfig.makeValid(new ModalConfig()),
            writable: false
        });
    }

    alert(): OneButtonPreset {
        return new OneButtonPreset(this, <any>{ isBlocking: false });
    }

    prompt(): OneButtonPreset {
        return new OneButtonPreset(this, <any>{ isBlocking: true, keyboard: null });
    }

    confirm(): TwoButtonPreset {
        return new TwoButtonPreset(this, <any>{ isBlocking: true, keyboard: null });
    }

    /**
     * Opens a modal window inside an existing component.
     * @param componentType The angular Component to render as modal.
     * @param viewRef The element to block using the modal.
     * @param bindings Resolved providers that will inject into the component provided.
     * @param config A Modal Configuration object.
     * @returns {Promise<ModalDialogInstance>}
     */
    public open(componentType: FunctionConstructor, viewRef: ViewContainerRef,
                bindings: ResolvedReflectiveProvider[], config?: ModalConfig
               ): Promise<ModalDialogInstance> {

        config = (config) ? ModalConfig.makeValid(config, this.config) : this.config;

        let dialog = new ModalDialogInstance(config);

        let dialogBindings = ReflectiveInjector.resolve(
            [ provide(ModalDialogInstance, {useValue: dialog})
        ]);
        return this.createBackdrop(viewRef, dialogBindings)
            .then( (backdropRef: ComponentRef) => {
                let modalDataBindings = ReflectiveInjector.resolve(
                    [provide(ModalDialogInstance, {useValue: dialog})]).concat(bindings);
                dialog.modalDataBindings = modalDataBindings;
                dialog.componentType = componentType;
                dialog.backdropRef = backdropRef;
                _stack.pushManaged(dialog);
                return dialog;
/*
                return this.componentLoader.loadNextToLocation(
                    BootstrapModalContainer, backdropRef.instance.viewRef, dialogBindings)
                    .then((bootstrapRef: ComponentRef) => {
                        dialog.bootstrapRef = bootstrapRef;
                        return this.componentLoader.loadNextToLocation(
                            componentType, bootstrapRef.instance.viewRef, modalDataBindings)
                            .then((contentRef: ComponentRef) => {
                                dialog.contentRef = contentRef;
                                _stack.pushManaged(dialog);
                                return dialog;
                            });
                        }
                    );
*/
            });
    }

    stackPosition(mInstande: ModalDialogInstance) {
        return _stack.indexOf(mInstande);
    }

    get stackLength(): number {
        return _stack.length;
    }

    /**
     * Creates backdrop element.
     * @param {ViewContainerRef} The element to block using the modal.
     * @param {ResolvedReflectiveProvider[]} Resolved providers,
     *     must contain the ModalDialogInstance instance for this backdrop.
     * @returns {Promise<ComponentRef>}
     */
    private createBackdrop(viewRef: ViewContainerRef,
                           bindings: ResolvedReflectiveProvider[]): Promise<ComponentRef> {
        return this.componentLoader.loadNextToLocation(ModalBackdrop, viewRef, bindings);
    }
}
