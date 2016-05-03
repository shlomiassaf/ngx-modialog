import {
    Component,
    ComponentResolver,
    ViewContainerRef,
    ReflectiveInjector,
    ViewChild,
    AfterViewInit
} from '@angular/core';

import {ModalDialogInstance} from '../models/ModalDialogInstance';
import {Modal, ModalCompileConfig} from '../providers/Modal';

/**
 * A component that acts as a top level container for an open modal window.
 */
@Component({
    selector: 'modal-container',
    host: {
        'tabindex': '-1',
        'role': 'dialog',
        'class': 'in modal',
        'style': 'display: block',
        '[style.position]': 'position',
        '(body:keydown)': 'documentKeypress($event)',
        '(click)': 'onClick()'
    },
    /* tslint:disable */
    template:
    `<div [ngClass]="dialog.config.dialogClass"
          [class.modal-lg]="dialog.config.size == \'lg\'"
          [class.modal-sm]="dialog.config.size == \'sm\'">
         <div class="modal-content" 
              role="document"
              style="display: block"
              (click)="onContainerClick($event)">
            <div style="display: none" #modalDialog></div>
         </div>
    </div>`
    /* tslint:enable */
})
export class BootstrapModalContainer implements AfterViewInit {
    public position: string;
    @ViewChild('modalDialog', {read: ViewContainerRef}) private _viewContainer: ViewContainerRef;

    constructor(public dialog: ModalDialogInstance,
                private _modal: Modal,
                private _cr: ComponentResolver,
                private _compileConfig: ModalCompileConfig) {
        if (!dialog.inElement) {
            this.position = null;
        } else {
            this.position = 'absolute';
        }
    }

    ngAfterViewInit() {
        this._cr.resolveComponent(this._compileConfig.component)
            .then(cmpFactory => {
                const vcr = this._viewContainer,
                    bindings = this._compileConfig.bindings,
                    ctxInjector = vcr.parentInjector;

                const childInjector = Array.isArray(bindings) && bindings.length > 0 ?
                    ReflectiveInjector.fromResolvedProviders(bindings, ctxInjector) : ctxInjector;
                return this.dialog.contentRef =
                    vcr.createComponent(cmpFactory, vcr.length, childInjector);
            });
    }

    onContainerClick($event: any) {
        $event.stopPropagation();
    }

    onClick() {
        return !this.dialog.config.isBlocking && this.dialog.dismiss();
    }

    documentKeypress(event: KeyboardEvent) {
        // check that this modal is the last in the stack.
        if (this._modal.stackPosition(this.dialog) !== this._modal.stackLength - 1) return;

        if (this.dialog.config.supportsKey(event.keyCode)) {
            this.dialog.dismiss();
        }
    }
}
