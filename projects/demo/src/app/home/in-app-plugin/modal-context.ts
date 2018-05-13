import { TemplateRef } from '@angular/core';
import {
  Modal,
  ModalOpenContextBuilder,
  ModalOpenContext,
  FluentAssignMethod
} from 'ngx-modialog';


export class InAppModalContext extends ModalOpenContext {

  title: string;
  templateRef: TemplateRef<any>;
  normalize(): void {
    if (!this.message) this.message = '';
  }
}


export class InAppModalContextBuilder extends ModalOpenContextBuilder<InAppModalContext> {
  title: FluentAssignMethod<string, this>;
  templateRef: FluentAssignMethod<TemplateRef<any>, this>;

  constructor(
    modal: Modal
  ) {
    super(
      <any>{ modal },
      ['title', 'templateRef'],
      <any>InAppModalContext
      // https://github.com/Microsoft/TypeScript/issues/7234
    );
  }
}
