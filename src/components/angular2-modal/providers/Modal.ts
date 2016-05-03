import {
    ReflectiveInjector,
    ViewContainerRef,
    Provider,
    Injectable,
    ResolvedReflectiveProvider,
    ComponentResolver,
    Optional,
    ComponentRef,
    Renderer,
    Type
} from '@angular/core';

import {ModalInstanceStack} from '../framework/ModalInstanceStack';
import {ModalConfig} from '../models/ModalConfig';
import {ModalDialogInstance} from '../models/ModalDialogInstance';
import {ModalBackdrop} from '../components/modalBackdrop';
import {OneButtonPreset, TwoButtonPreset} from '../presets';

const _stack = new ModalInstanceStack();

export class ModalCompileConfig {
    constructor(public component: Type, public bindings: ResolvedReflectiveProvider[]) {}
}

@Injectable()
export class Modal {
    /**
     * A Default view container ref, usually the app root container ref.
     * Make sure not to provide something that might get destroyed, it will destroy the modals too.
     * The container is used as logical view holder, elements might be moved.
     * Has to be set manually until we can find a way to get it automatically.
     */
    public defaultViewContainer: ViewContainerRef;
    private config: ModalConfig;

    constructor(private _cr: ComponentResolver,
                private _renderer: Renderer,
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
     * Opens a modal window blocking the whole screen.
     * @param component The angular Component to render as modal.
     * @param bindings Resolved providers that will inject into the component provided.
     * @param config A Modal Configuration object.
     * @returns {Promise<ModalDialogInstance>}
     */
    public open(component: FunctionConstructor,
                bindings: ResolvedReflectiveProvider[],
                config?: ModalConfig): Promise<ModalDialogInstance> {
        return this.openInside(component, this.defaultViewContainer, bindings, config);
    }

    /**
     * Opens a modal window inside an existing component.
     * @param component The angular Component to render as modal.
     * @param viewContainer The viewContainer to block using the modal.
     * @param bindings Resolved providers that will inject into the component provided.
     * @param config A Modal Configuration object.
     * @returns {Promise<ModalDialogInstance>}
     */
    public openInside(component: FunctionConstructor,
                      viewContainer: ViewContainerRef,
                      bindings: ResolvedReflectiveProvider[],
                      config?: ModalConfig): Promise<ModalDialogInstance> {

        config = (config) ? ModalConfig.makeValid(config, this.config) : this.config;

        const dialog = new ModalDialogInstance(config);
        const compileConfig = new ModalCompileConfig(component, bindings || []);
        dialog.inElement = viewContainer !== this.defaultViewContainer;

        let dialogBindings = ReflectiveInjector.resolve([
            new Provider(Modal, {useValue: this}), // use same Modal instance
            new Provider(ModalDialogInstance, {useValue: dialog}),
            new Provider(ModalCompileConfig, {useValue: compileConfig})
        ]);

        return this.createBackdrop(viewContainer, dialogBindings, dialog.inElement)
            .then( (backdropRef: ComponentRef<any>) => {
                // killing the root (backdrop) will cascade automatically.
                dialog.destroy = () => backdropRef.destroy();
                _stack.pushManaged(dialog);
                return dialog;
            });
    }

    stackPosition(mInstance: ModalDialogInstance) {
        return _stack.indexOf(mInstance);
    }

    get stackLength(): number {
        return _stack.length;
    }

    /**
     * Creates backdrop element.
     * @param  viewContainer The viewContainer to block using the modal.
     * @param  bindings Resolved providers, must contain the ModalDialogInstance 
     *         instance for this backdrop.
     * @param  attachToBody Attach to body or leave in the original view of the viewContainer.
     * @returns {Promise<ComponentRef>}
     */
    private createBackdrop(viewContainer: ViewContainerRef,
                           bindings: ResolvedReflectiveProvider[],
                           attachToBody: boolean): Promise<ComponentRef<any>> {
        return this._cr.resolveComponent(ModalBackdrop)
            .then(cmpFactory => {
                const ctxInjector = viewContainer.parentInjector;
                const childInjector = Array.isArray(bindings) && bindings.length > 0 ?
                    ReflectiveInjector.fromResolvedProviders(bindings, ctxInjector) : ctxInjector;

                return viewContainer.createComponent(cmpFactory, viewContainer.length,
                    childInjector);
            })
            .then((cmpRef: any) => {
                if (attachToBody) {
                    this._renderer.invokeElementMethod(
                        viewContainer.element.nativeElement,
                        'appendChild',
                        [cmpRef.hostView.rootNodes[0]]
                    );
                } else {
                    document.body.appendChild(cmpRef.hostView.rootNodes[0]);
                }
                return cmpRef;
            });
    }
}

export const MODAL_PROVIDERS = [
    new Provider(Modal, {useClass: Modal}),
    new Provider(ModalConfig, {useValue: new ModalConfig('lg', true, 27)})
];
