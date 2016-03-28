import {
    Injectable,
    DynamicComponentLoader,
    ComponentRef,
    ElementRef,
    Injector,
    provide,
    ResolvedProvider,
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

    constructor(private componentLoader: DynamicComponentLoader, private appRef: ApplicationRef,
                @Optional() defaultConfig: ModalConfig) {
        // The Modal class should be an application wide service (i.e: singleton).
        // This will run once in most applications...
        // If the user provides a ModalConfig instance to the DI,
        // the custom config will be the default one.

        Object.defineProperty(this, 'config', <any>{
            configurable: false,
            enumerable: true,
            value: (defaultConfig) ? ModalConfig.makeValid(defaultConfig) : new ModalConfig(),
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
     * Opens a modal window blocking the whole screen.
     * @param componentType The angular Component to render as modal.
     * @param bindings Resolved providers that will inject into the component provided.
     * @param config A Modal Configuration object.
     * @returns {Promise<ModalDialogInstance>}
     */
    public open(componentType: FunctionConstructor, bindings: ResolvedProvider[],
                config?: ModalConfig): Promise<ModalDialogInstance> {
        // TODO: appRef.injector.get(APP_COMPONENT) Doesn't work.
        // When it does replace with the hack below.
        //let myElementRef = this.appRef.injector.get(APP_COMPONENT).location;
        let elementRef: ElementRef = (<any>this.appRef)._rootComponents[0].location;

        return this.openInside(componentType, elementRef, null, bindings, config);
    }

    /**
     * Opens a modal window inside an existing component.
     * @param componentType The angular Component to render as modal.
     * @param elementRef The element to block using the modal.
     * @param anchorName A template variable within the component.
     * @param bindings Resolved providers that will inject into the component provided.
     * @param config A Modal Configuration object.
     * @returns {Promise<ModalDialogInstance>}
     */
    public openInside(componentType: FunctionConstructor, elementRef: ElementRef,
                      anchorName: string, bindings: ResolvedProvider[],
                      config?: ModalConfig): Promise<ModalDialogInstance> {

        config = (config) ? ModalConfig.makeValid(config, this.config) : this.config;

        let dialog = new ModalDialogInstance(config);
        dialog.inElement = !!anchorName;

        let dialogBindings = Injector.resolve([ provide(ModalDialogInstance, {useValue: dialog}) ]);
        return this.createBackdrop(elementRef, dialogBindings, anchorName)
            .then( (backdropRef: ComponentRef) => {
                dialog.backdropRef = backdropRef;

                let modalDataBindings = Injector.resolve(
                    [provide(ModalDialogInstance, {useValue: dialog})]).concat(bindings);
                return this.componentLoader.loadIntoLocation(
                    BootstrapModalContainer, backdropRef.location, 'modalBackdrop', dialogBindings)
                    .then(bootstrapRef => {
                        dialog.bootstrapRef = bootstrapRef;
                        return this.componentLoader.loadIntoLocation(
                            componentType, bootstrapRef.location, 'modalDialog', modalDataBindings)
                            .then(contentRef => {
                                dialog.contentRef = contentRef;
                                _stack.pushManaged(dialog);
                                return dialog;
                            });
                        }
                    );
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
     * @param {ElementRef} The element to block using the modal.
     * @param {ResolvedProvider[]} Resolved providers,
     *     must contain the ModalDialogInstance instance for this backdrop.
     * @param {string} An anchor name, optional.
     *     if not supplied backdrop gets applied next to elementRef, otherwise into it.
     * @returns {Promise<ComponentRef>}
     */
    private createBackdrop(elementRef: ElementRef, bindings: ResolvedProvider[],
                           anchorName?: string) : Promise<ComponentRef> {
        return (!anchorName) ?
            this.componentLoader.loadNextToLocation(ModalBackdrop, elementRef, bindings) :
            this.componentLoader.loadIntoLocation(ModalBackdrop, elementRef, anchorName, bindings);
    }
}
