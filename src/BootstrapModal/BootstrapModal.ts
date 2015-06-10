/// <reference path="../../typings-custom/tsd.d.ts"/>
import {Component, View, NgIf, ElementRef, DynamicComponentLoader, ComponentRef, DomRenderer } from 'angular2/angular2';
import {bind, Injector, Injectable} from 'angular2/di';
import {isPresent, Type} from 'angular2/src/facade/lang';
import {PromiseWrapper} from 'angular2/src/facade/async';

// import {DOM} from 'angular2/src/dom/dom_adapter';
// not working, we need to call DOM.setRootDomAdapter(new BrowserDomAdapter()) so whats the point?
import {BrowserDomAdapter} from 'angular2/src/dom/browser_adapter';
var DOM = new BrowserDomAdapter();

/**
 * A Type used as a binding key for dialog window Components
 */
export class IModalContentData{}


/**
 * Represents modal manager.
 * A modal manager opens a modal window and returns a modal lifecycle manager, a 'ModalDialogInstance'.
 * Notice the difference between a `Modal` and a `ModalDialogInstance`.
 */
@Injectable()
export class Modal {
    componentLoader: DynamicComponentLoader;
    domRenderer: DomRenderer;

    constructor(loader: DynamicComponentLoader, domRenderer: DomRenderer) {
        this.componentLoader = loader;
        this.domRenderer = domRenderer;
    }

    private createBackdrop(elementRef: ElementRef, injector: Injector, config: ModalConfig) : Promise<ComponentRef> {
        return this.componentLoader.loadIntoNewLocation(ModalBackdrop, elementRef, injector)
            .then((componentRef) => {
                var backdropElement = this.domRenderer.getRootNodes(componentRef.hostView.render)[0];
                DOM.addClass(backdropElement, 'modal-backdrop');
                DOM.addClass(backdropElement, 'in');

                if (config.attachToBody) {
                    DOM.appendChild(DOM.query('body'), backdropElement);
                }
                else {
                    DOM.setStyle(backdropElement, 'position', 'absolute');
                    DOM.setStyle(backdropElement, 'height', elementRef.domElement.scrollHeight + 'px');
                    DOM.setStyle(backdropElement, 'width', elementRef.domElement.scrollWidth + 'px');
                    DOM.setStyle(elementRef.domElement, 'position', 'relative');
                    DOM.appendChild(elementRef.domElement, backdropElement);
                }

                return componentRef;
            });
    }

    /**
     * Open a new modal window.
     * @param componentType A Component class (type) to render in the window. e.g: `ModalContent`.
     * @param elementRef The parent location of the component. Note that it is not a rendered hierarchy, it is an injection hierarchy. e.g: the `ElementRef` of your current router view, etc...
     * @param parentInjector The injector used to create new component, if your `componentType` needs special injection (e.g: ModalContnetData) make sure you supply a suitable Injector.
     * @param config Modal configuration/options.
     * @returns Promise<ModalDialogInstance> A promise of ModalDialogInstance.
     */
    public open(componentType: Type, elementRef: ElementRef, parentInjector: Injector, config?: ModalConfig) : Promise<ModalDialogInstance> {
        config = config || new ModalConfig();
        var dialog = new ModalDialogInstance(config);

        this.createBackdrop(elementRef, parentInjector, config).then(backdropRef => {
            dialog.backdropRef = backdropRef;
        });

        var containerInjector = parentInjector.resolveAndCreateChild([
            bind(ModalDialogInstance).toValue(dialog)
        ]);

        return this.componentLoader.loadIntoNewLocation(BootstrapModalContainer, elementRef, containerInjector)
            .then(bootstrapRef => {
                var dialogElement = this.domRenderer.getRootNodes(bootstrapRef.hostView.render)[0];
                DOM.addClass(dialogElement, 'modal');
                DOM.addClass(dialogElement, 'in');
                DOM.setStyle(dialogElement, 'display', 'block');

                if (config.attachToBody) {
                    DOM.appendChild(DOM.query('body'), dialogElement);
                }
                else {
                    DOM.setStyle(dialogElement, 'position', 'absolute');
                    DOM.appendChild(elementRef.domElement, dialogElement);
                }

                dialog.bootstrapRef = bootstrapRef;

                return this.componentLoader.loadIntoNewLocation(componentType, bootstrapRef.location, containerInjector)
                    .then(contentRef => {
                        var userComponent = this.domRenderer.getRootNodes(contentRef.hostView.render)[0];
                        DOM.setStyle(dialogElement.children[0], 'display', 'block');
                        DOM.addClass(userComponent, 'modal-content');
                        DOM.setStyle(userComponent, 'display', 'block');

                        DOM.appendChild(dialogElement.children[0], userComponent);

                        dialog.contentRef = contentRef;

                        return dialog;
                    }
                );
            }
        );
    }
}

/**
 * A configuration definition object.
 * Instruction for how to show a modal.
 */
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

    attachToBody: boolean;

    constructor(size: string = 'lg', isBlocking: boolean = false, keyboard: Array<number> | number = undefined, attachToBody: boolean = true) {
        this.size = size;
        this.isBlocking = isBlocking;
        this.attachToBody = attachToBody;

        if (keyboard === undefined) {
            keyboard = [27];
        }
        else if (isPresent(keyboard) && !Array.isArray(<Array<number>>keyboard)) {
            keyboard = (!isNaN(<number>keyboard)) ? [<number>keyboard] : null;
        }
        this.keyboard = keyboard;
    }
}

/**
 * API to an open modal window.
 */
export class ModalDialogInstance {
    private _bootstrapRef: ComponentRef;
    private _backdropRef: ComponentRef;
    private _resultDeffered: any;
    contentRef: ComponentRef;


    constructor(public config: ModalConfig) {
        this._resultDeffered = PromiseWrapper.completer();
    }

    set backdropRef(value: ComponentRef) {
        this._backdropRef = value;
    }
    set bootstrapRef(value: ComponentRef) {
        this._bootstrapRef = value;
    }

    /**
     * A Promise that is resolved on a close event and rejected on a dimiss event.
     * @returns {Promise<T>|any|*|Promise<any>}
     */
    get result():Promise<any> {
        return this._resultDeffered.promise;
    }

    private dispose() {
        this._bootstrapRef.dispose();
        this._backdropRef.dispose();
    }
    /**
     *  Close the modal with a return value, i.e: result.
     */
    close(result: any = null) {
        this.dispose();
        this._resultDeffered.resolve(result);
    }

    /**
     *  Close the modal without a return value, i.e: cancelled.
     *  This call is automatically invoked when a user either:
     *  - Presses an exit keyboard key (if configured).
     *  - Clicks outside of the modal window (if configured).
     *  Usually, dismiss represent a Cancel button or a X button.
     */
    dismiss(){
        this.dispose();
        this._resultDeffered.reject();
    }
}

/**
 * Represents the modal backdrop.
 */
@Component({
    selector: 'modal-backdrop'
})
@View({template: ''})
export class ModalBackdrop {
    constructor() {}
}

/**
 * A component that acts as a top level container for an open modal window.
 */
@Component({
    selector: 'bootstrap-modal',
    hostAttributes: {
        'tabindex': '-1',
        'role': 'dialog'
    },
    hostListeners: {'body:^keydown': 'documentKeypress($event)', 'click': 'onClick()'}
})
@View({
    template: `
    <div class="modal-dialog"
         [class.modal-lg]="dialogInstance.config.size == \'lg\'"
         [class.modal-sm]="dialogInstance.config.size == \'sm\'">
    </div>`
})
class BootstrapModalContainer {
    dialogInstance: ModalDialogInstance;

    constructor(dialogInstance: ModalDialogInstance) {
        this.dialogInstance = dialogInstance;
    }

    onClick() {
        !this.dialogInstance.config.isBlocking && this.dialogInstance.dismiss();
    }

    documentKeypress(event: KeyboardEvent) {
        if ( this.dialogInstance.config.keyboard &&
            (<Array<number>>this.dialogInstance.config.keyboard).indexOf(event.keyCode) > -1) {
            this.dialogInstance.dismiss();
        }
    }
}

/**
 * Data definition objet for `YesNoModalContent`
 */
export class YesNoModalContentData implements IModalContentData{
    constructor(
        public title: string = "Hello World Title",
        public body: string = "Hello World Body!",
        public hideNo: boolean = false,
        public yesText: string = "OK",
        public noText: string = "Cancel"
        ){}
}

/**
 * A 2 state bootstrap modal window, representing 2 possible answer, true/false.
 */
@Component({
    selector: 'modal-content'
})
@View({
    template: `
        <div class="modal-header">
            <h3 class="modal-title">{{context.title}}</h3>
        </div>
        <div class="modal-body">{{context.body}}</div>
        <div class="modal-footer">
            <button class="btn btn-primary" (click)="ok()">{{context.yesText}}</button>
            <button *ng-if="!context.hideNo" class="btn btn-warning" (click)="cancel()">{{context.noText}}</button>
        </div>`,
    directives: [NgIf]
})
export class YesNoModalContent {
    dialog: ModalDialogInstance;
    context: YesNoModalContentData;

    constructor(dialog: ModalDialogInstance, modelContentData: IModalContentData) {
        this.dialog = dialog;
        this.context = <YesNoModalContentData>modelContentData;
    }

    ok() {
        this.dialog.close(true);
    }

    cancel() {
        this.dialog.dismiss();
    }
}