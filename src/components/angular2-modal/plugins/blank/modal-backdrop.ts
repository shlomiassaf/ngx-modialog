import {
    Component,
    ComponentResolver,
    ViewContainerRef,
    ReflectiveInjector,
    ViewChild,
    AfterViewInit
} from '@angular/core';

import { NgTemplateOutlet } from '@angular/common';

import { ModalCompileConfig } from '../../models/tokens';
import { DialogRef } from '../../angular2-modal';
import { Modal } from './modal';
import { BlankModalContext } from './modal-context';


@Component({
    selector: 'modal-backdrop',
    directives: [ NgTemplateOutlet ],
    template:
`<div [class]="context.backdropCss">
    <div [class]="context.overlayCss" #overlay></div>
    <template [ngTemplateOutlet]="context.templateRef"></template>
</div>`
})
export class BlankModalBackdrop implements AfterViewInit {
    public context: BlankModalContext;
    @ViewChild('overlay', {read: ViewContainerRef}) private vcOverlay: ViewContainerRef;

    constructor(
        private dialog: DialogRef<BlankModalContext>,
        private _compileConfig: ModalCompileConfig,
        private _modal: Modal,
        private _cr: ComponentResolver) {
        this.context = dialog.context;
    }

    ngAfterViewInit() {

        this._cr.resolveComponent(this._compileConfig.component)
            .then(cmpFactory => {
                const vcr = this.vcOverlay,
                    bindings = this._compileConfig.bindings,
                    ctxInjector = vcr.parentInjector;

                const childInjector = Array.isArray(bindings) && bindings.length > 0 ?
                    ReflectiveInjector.fromResolvedProviders(bindings, ctxInjector) : ctxInjector;
                return this.dialog.contentRef =
                    vcr.createComponent(cmpFactory, vcr.length, childInjector);
            });
    }

}
