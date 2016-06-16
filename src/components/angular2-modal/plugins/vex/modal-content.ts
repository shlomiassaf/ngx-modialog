import {
    Component,
    ComponentResolver,
    ElementRef,
    ViewContainerRef,
    ReflectiveInjector,
    ViewChild,
    ViewEncapsulation,
    AfterViewInit
} from '@angular/core';

import {Modal} from './modal';
import {ModalCompileConfig} from '../../models/tokens';
import {DialogRef} from '../../models/dialog-ref';
import {VEXModalContext} from './modal-context';

/**
 * A component that acts as a top level container for an open modal window.
 */
@Component({
    selector: 'modal-content',
    host: {
        'tabindex': '-1',
        'role': 'dialog'
    },
    template:
`<div tabindex="-1" role="dialog"
      [class]="context.contentClassName" (clickOutside)="onClickOutside()">
    <div style="display: none" #modalDialog></div>    
    <div *ngIf="context.showCloseButton" 
         [class]="context.closeClassName" 
         (click)="dialog.dismiss()"></div>
</div>`,
    encapsulation: ViewEncapsulation.None,
})
export class VexModalContent implements AfterViewInit {
    private context: VEXModalContext;
    @ViewChild('modalDialog', {read: ViewContainerRef}) private _viewContainer: ViewContainerRef;

    constructor(public dialog: DialogRef<VEXModalContext>,
                private el: ElementRef,
                private _modal: Modal,
                private _compileConfig: ModalCompileConfig,
                private _cr: ComponentResolver) {
        this.context = dialog.context;
    }

    ngAfterViewInit() {
        this._cr.resolveComponent(this._compileConfig.component)
            .then(cmpFactory => {
                const vcr = this._viewContainer,
                      bindings = this._compileConfig.bindings,
                      ctxInjector = vcr.parentInjector;

                const childInjector = Array.isArray(bindings) && bindings.length > 0 ?
                    ReflectiveInjector.fromResolvedProviders(bindings, ctxInjector) : ctxInjector;

                if (this.el.nativeElement) {
                    this.el.nativeElement.focus();
                }

                return this.dialog.contentRef =
                    vcr.createComponent(cmpFactory, vcr.length, childInjector);
            });
    }

    onClickOutside() {
        // check that this modal is the last in the stack.
        return this._modal.isTopMost(this.dialog) &&
            !this.dialog.context.isBlocking &&
            this.dialog.dismiss();
    }
}
