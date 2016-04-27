import {
  provide, ResolvedReflectiveProvider, ReflectiveInjector, Component,
  DynamicComponentLoader, ViewChild, ViewContainerRef, AfterViewInit, ComponentRef
} from 'angular2/core';
import {ModalDialogInstance} from '../models/ModalDialogInstance';
import {Modal} from '../providers/Modal';

/**
 * A component that acts as a top level container for an open modal window.
 */
@Component({
    selector: 'bootstrap-modal',
    providers: [Modal],
    host: {
        'tabindex': '0',
        'role': 'dialog',
        'class': 'in modal',
        'style': 'display: block',
        '[style.position]': 'position',
        '(body:keydown)': 'documentKeypress($event)',
        '(click)': 'onClick()'
    },
    /* tslint:disable */
    template:
    `<div [ngClass]="dialogInstance.config.dialogClass"
          [class.modal-lg]="dialogInstance.config.size == \'lg\'"
          [class.modal-sm]="dialogInstance.config.size == \'sm\'">
         <div class="modal-content" (click)="onContainerClick($event)" style="display: block">
            <div>
                <span #modalDialog></span>
            </div>
         </div>
    </div>`
    //TODO: #modalDialog element is not needed but dynamicComponentLoader doesn't seem to have behavior to inject a component the way we want.
    //      We need to replace the #modalDialog element but the current implementation only adds it as a sibling.
    //      see https://github.com/angular/angular/issues/6071
    /* tslint:enable */
})
export class BootstrapModalContainer implements AfterViewInit {
    dialogInstance: ModalDialogInstance;
    public position: string;

    @ViewChild('modalDialog', {read: ViewContainerRef}) private _viewRef: ViewContainerRef;

    constructor(dialogInstance: ModalDialogInstance,
      private modal: Modal, private componentLoader: DynamicComponentLoader) {
        this.dialogInstance = dialogInstance;
        this.position = 'absolute';
    }

    get viewRef(): ViewContainerRef { return this._viewRef; }

    onContainerClick($event: any) {
        $event.stopPropagation();
    }

    onClick() {
        return !this.dialogInstance.config.isBlocking && this.dialogInstance.dismiss();
    }

    documentKeypress(event: KeyboardEvent) {
        // check that this modal is the last in the stack.
        if (this.modal.stackPosition(this.dialogInstance) !== this.modal.stackLength - 1) return;

        if (this.dialogInstance.config.supportsKey(event.keyCode)) {
            this.dialogInstance.dismiss();
        }
    }

    ngAfterViewInit() {
        this.componentLoader.loadNextToLocation(
            this.dialogInstance.componentType, this._viewRef, this.dialogInstance.modalDataBindings)
            .then((contentRef: ComponentRef) => {
                this.dialogInstance.contentRef = contentRef;
            });
    }
}
