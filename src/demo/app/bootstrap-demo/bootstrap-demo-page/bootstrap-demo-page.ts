import { Component } from '@angular/core';

import { OverlayConfig } from '../../../../components/angular2-modal';
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
  public modalCommands: ModalCommandDescriptor[];

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
        text: 'Custom Modal example',
        factory: () => {
          const builder = new BSModalContextBuilder<CustomModalContext>(
            { num1: 2, num2: 3 } as any,
            undefined,
            CustomModalContext
          );

          let overlayConfig: OverlayConfig = {
            context: builder.toJSON()
          };

          return this.modal.open(CustomModal, overlayConfig);
        }

      }
    ];
  }
}
