import { TemplateRef } from '@angular/core';
import { Modal, ModalOpenContextBuilder, ModalOpenContext, FluentAssignMethod } from '../../../../components/angular2-modal';
export declare class InAppModalContext extends ModalOpenContext {
    title: string;
    templateRef: TemplateRef<any>;
    normalize(): void;
}
export declare class InAppModalContextBuilder extends ModalOpenContextBuilder<InAppModalContext> {
    title: FluentAssignMethod<string, this>;
    templateRef: FluentAssignMethod<TemplateRef<any>, this>;
    constructor(modal: Modal);
}
