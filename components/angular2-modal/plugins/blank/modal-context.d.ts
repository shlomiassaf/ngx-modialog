import { TemplateRef } from '@angular/core';
import { Modal, ModalOpenContextBuilder, ModalOpenContext, FluentAssignMethod } from '../../../../components/angular2-modal';
export declare class BlankModalContext extends ModalOpenContext {
    backdropCss: string;
    overlayCss: string;
    templateRef: TemplateRef<any>;
    normalize(): void;
}
export declare class BlankModalContextBuilder extends ModalOpenContextBuilder<BlankModalContext> {
    constructor(modal: Modal);
    backdropCss: FluentAssignMethod<string, this>;
    overlayCss: FluentAssignMethod<string, this>;
    templateRef: FluentAssignMethod<TemplateRef<any>, this>;
}
