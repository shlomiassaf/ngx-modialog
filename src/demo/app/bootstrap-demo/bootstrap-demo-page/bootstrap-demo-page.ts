import { Component, ViewChild } from '@angular/core';

import {
  Modal,
  // Not used but if not set, TS build errors:
  // Return type of exported function has or is using name 'X'from external module 'Y'
  // but cannot be named.
  BSModal
} from '../../../../components/angular2-modal/plugins/bootstrap';

import { DemoHead, ModalCommandDescriptor } from '../../demo-head/index';
import { AdditionCalculateWindowData, AdditionCalculateWindow } from './custom-modal-sample';
import * as presets from '../presets';


@Component({
  selector: 'bootstrap-demo-page',
  directives: [DemoHead],
  styleUrls: ['demo/app/bootstrap-demo/bootstrap-demo-page/bootstrap-demo-page.css'],
  templateUrl: 'demo/app/bootstrap-demo/bootstrap-demo-page/bootstrap-demo-page.tpl.html'
})
export class BootstrapDemoPage {
  public modalCommands: ModalCommandDescriptor[];

  @ViewChild(DemoHead) private demoHead: DemoHead;

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
        factory: () => presets.inElement(this.modal).open(this.demoHead.vcCommands)
      },
      {
        text: 'Custom Modal example',
        factory: () =>
          this.modal.open(AdditionCalculateWindow, new AdditionCalculateWindowData(2, 3))
      }
    ];
  }
}
