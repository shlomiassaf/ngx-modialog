import {
    Component,
    ComponentResolver,
    ViewContainerRef,
    ReflectiveInjector,
    ViewChild,
    ViewEncapsulation,
    AfterViewInit
} from '@angular/core';

import { DialogRef, ModalCompileConfig } from '../../angular2-modal';

import {Modal} from './modal';
import {supportsKey} from '../../framework/utils';
import {BSModalContext} from './modal-context';

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
        '(body:keydown)': 'documentKeypress($event)'
    },
    encapsulation: ViewEncapsulation.None,
    /* tslint:disable */
    template:
        `<div [ngClass]="dialog.context.dialogClass"
          [class.modal-lg]="dialog.context.size == \'lg\'"
          [class.modal-sm]="dialog.context.size == \'sm\'">
         <div class="modal-content"              
              style="display:block"              
              role="document"
              (clickOutside)="onClickOutside()">
            <div style="display: none" #modalDialog></div>
         </div>
    </div>`
    /* tslint:enable */
})
export class BSModalContainer implements AfterViewInit {
    public position: string;

    @ViewChild('modalDialog', {read: ViewContainerRef}) private _viewContainer: ViewContainerRef;

    constructor(public dialog: DialogRef<BSModalContext>,
                private _compileConfig: ModalCompileConfig,
                private _modal: Modal,
                private _cr: ComponentResolver) {
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

    onClickOutside() {
        return this._modal.isTopMost(this.dialog) &&
            !this.dialog.context.isBlocking &&
            this.dialog.dismiss();
    }

    documentKeypress(event: KeyboardEvent) {
        // check that this modal is the last in the stack.
        if (!this._modal.isTopMost(this.dialog)) return;


        if (supportsKey(event.keyCode, <any>this.dialog.context.keyboard)) {
            this.dialog.dismiss();
        }
    }
}
