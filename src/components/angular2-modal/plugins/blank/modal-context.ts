import { TemplateRef } from '@angular/core';
import {
    Modal,
    ModalOpenContextBuilder, 
    ModalOpenContext,
    FluentAssignMethod
} from '../../../../components/angular2-modal';


const DEFAULT_SETTERS = [
    'backdropCss',
    'overlayCss',
    'templateRef'
];

export class BlankModalContext extends ModalOpenContext {

    backdropCss: string;
    overlayCss: string;
    templateRef: TemplateRef<any>;
    
    normalize(): void {
        if (!this.message) this.message = '';
    }
}


export class BlankModalContextBuilder extends ModalOpenContextBuilder<BlankModalContext> {

    constructor(
        modal: Modal
    ) {
        super(
            <any>{ modal },
            DEFAULT_SETTERS,
            <any>BlankModalContext 
            // https://github.com/Microsoft/TypeScript/issues/7234
        );
    }

    backdropCss: FluentAssignMethod<string, this>;
    overlayCss: FluentAssignMethod<string, this>;

    templateRef: FluentAssignMethod<TemplateRef<any>, this>;

}

