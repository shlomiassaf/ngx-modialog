import { Component, TemplateRef, ViewChild } from '@angular/core';

import { overlayConfigFactory } from "../../../../components/angular2-modal";
import { Modal, BSModalContext } from '../../../../components/angular2-modal/plugins/bootstrap';

import { ModalCommandDescriptor } from '../../demo-head/index';
import { CustomModal } from './custom-modal-sample';
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
          .open('Hello modal!', overlayConfigFactory({ isBlocking: false }, BSModalContext))
      },
      {
        text: 'TemplateRef content',
        factory: () => this.modal
          .open(this.templateRef, overlayConfigFactory({ isBlocking: false }, BSModalContext))
      },
      {
        text: 'Custom Modal content',
        factory: () => {
          return this.modal.open(CustomModal, overlayConfigFactory({ num1: 2, num2: 3 }, BSModalContext));
          // we set the baseContextType to BSModalContext so the defaults for bootstrap will apply
        }

      }
    ];
  }

}
