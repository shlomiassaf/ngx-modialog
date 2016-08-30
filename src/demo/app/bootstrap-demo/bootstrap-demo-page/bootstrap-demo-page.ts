import { Component, TemplateRef, ViewChild } from '@angular/core';

import { Modal, BSModalContextBuilder } from '../../../../components/angular2-modal/plugins/bootstrap';

import { ModalCommandDescriptor } from '../../demo-head/index';
import { CustomModalContext, CustomModal } from './custom-modal-sample';
import * as presets from '../presets';


@Component({
  selector: 'bootstrap-demo-page',
  styleUrls: ['./bootstrap-demo-page.css'],
  templateUrl: './bootstrap-demo-page.tpl.html'
})
export class BootstrapDemoPage {
  modalCommands: ModalCommandDescriptor[];
  @ViewChild('templateRef') private templateRef: TemplateRef<any>;

  constructor(public modal: Modal) {
    this.modalCommands = [
      {
        text: 'alert drop in',
        factory: () => presets.alert(this.modal).open()
      },
      {
        text: 'prompt drop in',
        factory: () => presets.prompt(this.modal).open()
      },
      {
        text: 'confirm drop in',
        factory: () => presets.confirm(this.modal).open()
      },
      {
        text: 'Cascading example',
        factory: () => presets.cascading(this.modal).open()
      },
      {
        text: 'In Element example',
        factory: () => presets.inElement(this.modal).open('demo-head')
      },
      {
        text: 'String content',
        factory: () => this.modal
          .open('Hello modal!', new BSModalContextBuilder().isBlocking(false).toOverlayConfig())
      },
      {
        text: 'TemplateRef content',
        factory: () => this.modal
          .open(this.templateRef, new BSModalContextBuilder({ abd: 123 } as any).isBlocking(false).toOverlayConfig())
      },
      {
        text: 'Custom Modal content',
        factory: () => {
          const builder = new BSModalContextBuilder<CustomModalContext>(
            { num1: 2, num2: 3 } as any,
            undefined,
            CustomModalContext
          );


          return this.modal.open(CustomModal, builder.toOverlayConfig());
        }

      }
    ];
  }

}
