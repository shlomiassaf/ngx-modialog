import {
    ReflectiveInjector,
    ComponentRef,
    ViewContainerRef,
    Provider,
    provide,
    Injectable,
    ResolvedReflectiveProvider,
    Optional
} from 'angular2/core';

import {BackdropRenderer, ModalCompileConfig, ModalBackdropComponent} from '../models/tokens';

import {DialogRefStack} from '../models/dialog-ref-stack';
import {ModalConfig} from '../models/modal-config';
import {DialogRef} from '../models/dialog-ref';
import {OneButtonPreset, TwoButtonPreset} from '../presets';

const _stack = new DialogRefStack();

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

    constructor(private _bdRenderer: BackdropRenderer,
                private _backdrop: ModalBackdropComponent,
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
     * @param componentType The angular Component to render as modal.
     * @param bindings Resolved providers that will inject into the component provided.
     * @param config A Modal Configuration object.
     * @returns {Promise<DialogRef>}
     */
    public open(componentType: FunctionConstructor,
                bindings: ResolvedReflectiveProvider[],
                config?: ModalConfig): Promise<DialogRef> {
        return this.openInside(componentType, this.defaultViewContainer, bindings, false, config);
    }

    /**
     * Opens a modal window inside an existing component.
     * @param componentType The angular Component to render as modal.
     * @param viewContainer The element to block using the modal.
     * @param bindings Resolved providers that will inject into the component provided.
     * @param inside
     * @param config A Modal Configuration object.
     * @returns {Promise<DialogRef>}
     */
    public openInside(componentType: FunctionConstructor,
                      viewContainer: ViewContainerRef,
                      bindings: ResolvedReflectiveProvider[],
                      inside: boolean = true,
                      config?: ModalConfig): Promise<DialogRef> {

        config = (config) ? ModalConfig.makeValid(config, this.config) : this.config;


        let dialog = new DialogRef(config);
        dialog.inElement = inside;

        let compileConfig = new ModalCompileConfig(componentType, bindings || []);

        
        let b = ReflectiveInjector.resolve([
            provide(Modal, {useValue: this}),
            provide(BackdropRenderer, {useValue: this._bdRenderer}),
            provide(DialogRef, {useValue: dialog}),
            provide(ModalCompileConfig, {useValue: compileConfig})
        ]);


        return this._bdRenderer.createBackdrop(this._backdrop, viewContainer, b, dialog.inElement)
            .then( (backdropRef: ComponentRef) => {
                dialog.destroy = () => backdropRef.destroy();
                _stack.pushManaged(dialog);
                return dialog;
            });
    }

    /**
     * Check if a given DialogRef is the top most ref in the stack.
     * TODO: distinguish between body modal vs in element modal.
     * @param dialogRef
     * @returns {boolean}
     */
    isTopMost(dialogRef: DialogRef): boolean {
        return _stack.indexOf(dialogRef) === _stack.length - 1;
    }
    
    stackPosition(dialogRef: DialogRef) {
        return _stack.indexOf(dialogRef);
    }

    get stackLength(): number {
        return _stack.length;
    }
}

export const MODAL_PROVIDERS: any[] = [
    new Provider(Modal, {useClass: Modal})
];