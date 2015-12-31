import {
    Injectable,
    DynamicComponentLoader,
    ComponentRef,
    ElementRef,
    Injector,
    provide,
    ResolvedProvider
} from 'angular2/core';
import {DOM} from 'angular2/src/platform/dom/dom_adapter';


import {ModalConfig} from '../models/ModalConfig';
import {ModalDialogInstance} from '../models/ModalDialogInstance';
import {ModalBackdrop} from '../components/modalBackdrop';
import {BootstrapModalContainer} from '../components/bootstrapModalContainer';


@Injectable()
export class Modal {
    componentLoader: DynamicComponentLoader;

    constructor(loader: DynamicComponentLoader) {
        this.componentLoader = loader;
    }

    private createBackdrop(elementRef: ElementRef, bindings: ResolvedProvider[], config: ModalConfig) : Promise<ComponentRef> {
        return this.componentLoader.loadNextToLocation(ModalBackdrop, elementRef, bindings)
            .then((componentRef) => {
                var backdropElement = componentRef.location.nativeElement;

                if (config.attachToBody) {
                    DOM.setStyle(backdropElement, 'position', null);
                    DOM.setStyle(backdropElement, 'height', null);
                    DOM.setStyle(backdropElement, 'width', null);
                    DOM.appendChild(DOM.query('body'), backdropElement);
                }
                else {
                    let element = elementRef.nativeElement;
                    DOM.setStyle(backdropElement, 'position', 'absolute');
                    DOM.setStyle(backdropElement, 'height', element.scrollHeight + 'px');
                    DOM.setStyle(backdropElement, 'width', element.scrollWidth + 'px');
                    DOM.setStyle(element, 'position', 'relative');
                    DOM.appendChild(element, backdropElement);
                }

                return componentRef;
            });
    }

    /**
     * Open a new modal window.
     * @param componentType A Component class (type) to render in the window. e.g: `ModalContent`.
     * @param elementRef The parent location of the component. Note that it is not a rendered hierarchy, it is an injection hierarchy. e.g: the `ElementRef` of your current router view, etc...
     * @param bindings The injector used to create new component, if your `componentType` needs special injection (e.g: ModalContnetData) make sure you supply a suitable Injector.
     * @param config Modal configuration/options.
     * @returns Promise<ModalDialogInstance> A promise of ModalDialogInstance.
     */
    public open(componentType: FunctionConstructor, elementRef: ElementRef, bindings: ResolvedProvider[], config?: ModalConfig) : Promise<ModalDialogInstance> {
        config = config || new ModalConfig();
        var dialog = new ModalDialogInstance(config);


        this.createBackdrop(elementRef, [], config).then(backdropRef => {
            dialog.backdropRef = backdropRef;
        });

        let modalContainerBindings = Injector.resolve([provide(ModalDialogInstance, {useValue: dialog})]);
        let modalDataBindings = Injector.resolve([provide(ModalDialogInstance, {useValue: dialog})]).concat(bindings);
        return this.componentLoader.loadNextToLocation(BootstrapModalContainer, elementRef, modalContainerBindings)
            .then(bootstrapRef => {
                    var dialogElement = bootstrapRef.location.nativeElement;
                    DOM.addClass(dialogElement, 'modal');
                    DOM.addClass(dialogElement, 'in');
                    DOM.setStyle(dialogElement, 'display', 'block');

                    if (config.attachToBody) {
                        DOM.appendChild(DOM.query('body'), dialogElement);
                    }
                    else {
                        DOM.setStyle(dialogElement, 'position', 'absolute');
                        DOM.appendChild(elementRef.nativeElement, dialogElement);
                    }

                    dialog.bootstrapRef = bootstrapRef;

                    return this.componentLoader.loadNextToLocation(componentType, bootstrapRef.location, modalDataBindings)
                        .then(contentRef => {
                                var userComponent = contentRef.location.nativeElement;
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