import {
    Type,
    ReflectiveInjector,
    ViewContainerRef,
    provide,
    Injectable,
    ResolvedReflectiveProvider,
    Optional
} from '@angular/core';

import {
    ModalRenderer,
    ModalCompileConfig,
    ModalBackdropComponent,
    ModalDropInFactory
} from '../models/tokens';

import { DialogRefStack } from '../models/dialog-ref-stack';
import { DialogRef } from '../angular2-modal';
import { ModalContext, ModalControllingContextBuilder } from '../models/modal-context';
 
const _stack = new DialogRefStack<any>();
const unsupportedDropIn: any = () => { throw new Error('Unsupported Drop-in.'); };

const UnsupportedDropInFactory: ModalDropInFactory = {
    alert: unsupportedDropIn,
    prompt: unsupportedDropIn,
    confirm: unsupportedDropIn
};

function normalizeDropInFactory(dropInFactory: ModalDropInFactory): ModalDropInFactory {
    if (!dropInFactory) return UnsupportedDropInFactory;
    return ['alert', 'prompt', 'confirm']
        .reduce((dif, key) => {
            if (typeof dif[key] !== 'function') dif[key] = <any>unsupportedDropIn;
            return dif;
        }, dropInFactory);
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
    private _dropIn: ModalDropInFactory;

    constructor(private _modalRenderer: ModalRenderer,
                private _backdrop: ModalBackdropComponent,
                @Optional() _dropIn: ModalDropInFactory) {
        this._dropIn = normalizeDropInFactory(_dropIn);
    }

    alert(): ModalControllingContextBuilder<any> {
        return this._dropIn.alert<any>(this);
    }

    prompt(): ModalControllingContextBuilder<any> {
        return this._dropIn.prompt<any>(this);
    }

    confirm(): ModalControllingContextBuilder<any> {
        return this._dropIn.confirm<any>(this);
    }

    /**
     * Opens a modal window inside an existing component.
     * If
     * @param componentType The angular Component to render as the modal content.
     * @param bindings Resolved providers that will inject into the component provided.
     * @param context The context for the modal, attached to the dialog instance, DialogRef.context.
     *        Default: {}
     * @param viewContainer The element to block using the modal.
     *        Default: The value set in defaultViewContainer.
     * @param inside If true, render's the component inside the ViewContainerRef,
     *        otherwise render's the component in the root element (body in DOM)
     *        Default: true if ViewContainer supplied, false if not supplied.
     * @returns {Promise<DialogRef>}
     */
    public open(componentType: Type,
                context: ModalContext = undefined,
                bindings: ResolvedReflectiveProvider[] = undefined,
                viewContainer: ViewContainerRef = undefined,
                inside?: boolean): Promise<DialogRef<any>> {

        inside = inside === undefined ? !!viewContainer : !!inside;

        if (!viewContainer) {
            if (!this.defaultViewContainer) {
                throw new Error('defaultViewContainer not set.');
            }
            viewContainer = this.defaultViewContainer;
        }

        if (context) {
            context.normalize();
        }

        let dialog = new DialogRef(context || {});
        dialog.inElement = inside;

        let compileConfig = new ModalCompileConfig(componentType, bindings || []);


        let b = ReflectiveInjector.resolve([
            provide(Modal, {useValue: this}),
            provide(ModalRenderer, {useValue: this._modalRenderer}),
            provide(DialogRef, {useValue: dialog}),
            provide(ModalCompileConfig, {useValue: compileConfig})
        ]);

        return this._modalRenderer.render(this._backdrop, viewContainer, b, dialog)
            .then(dialog => {
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
    isTopMost(dialogRef: DialogRef<any>): boolean {
        return _stack.indexOf(dialogRef) === _stack.length - 1;
    }
    
    stackPosition(dialogRef: DialogRef<any>) {
        return _stack.indexOf(dialogRef);
    }

    get stackLength(): number {
        return _stack.length;
    }
}
