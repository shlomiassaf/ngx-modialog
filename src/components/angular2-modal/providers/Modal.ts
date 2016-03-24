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
import {ModalConfig} from '../models/ModalConfig';
import {ModalDialogInstance} from '../models/ModalDialogInstance';
import {ModalBackdrop} from '../components/modalBackdrop';
import {BootstrapModalContainer} from '../components/bootstrapModalContainer';


/**
 * A dumb stack implementation over an array.
 */
class ModalInstanceStack {
    private _stack: ModalDialogInstance[] = [];


    push(mInstance: ModalDialogInstance): void {
        let idx = this._stack.indexOf(mInstance);
        if (idx === -1) this._stack.push(mInstance);
    }

    /**
     * Push a ModalDialogInstance into the stack and manage it so when it's done
     * it will automatically kick itself out of the stack.
     * @param mInstance
     */
    pushManaged(mInstance: ModalDialogInstance): void {
        this.push(mInstance);
        mInstance.result
            .then(() => this.remove(mInstance))
            .catch(() => this.remove(mInstance));
        // we don't "pop" because we can't know for sure that our instance is the last.
        // In a user event world it will be the last, but since modals can close programmatically
        // we can't tell.
    }

    pop(): void {
        this._stack.pop();
    }

    /**
     * Remove a ModalDialogInstance from the stack.
     * @param mInstance
     */
    remove(mInstance: ModalDialogInstance): void {
        let idx = this._stack.indexOf(mInstance);
        if (idx > -1) this._stack.splice(idx, 1);
    }


    index(index: number): ModalDialogInstance {
        return this._stack[index];
    }

    indexOf(mInstance: ModalDialogInstance): number {
        return this._stack.indexOf(mInstance);
    }

    get length(): number {
        return this._stack.length;
    }
}
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
