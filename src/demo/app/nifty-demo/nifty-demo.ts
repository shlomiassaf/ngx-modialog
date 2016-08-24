import { Component, ViewEncapsulation, ViewChild } from '@angular/core';

import {
  Modal,
  DialogPreset,
  DialogPresetBuilder,
  NiftyModule
} from '../../../components/angular2-modal/plugins/nifty';

import { DemoHead, ModalCommandDescriptor } from '../demo-head/index';
import * as presets from './presets';

@Component({
  selector: 'nifty-demo',
  styles: [
    require('../../../components/angular2-modal/plugins/nifty/themes/nifty-theme-default.css')
  ]
  templateUrl: './nifty-demo.tpl.html',
  // We override providers set by the Module since this app is using multiple module plugins
  // (js-native, vex, bootstrap) which messes up the provider tree (last plugin wins)
  // usually an app will use one plugin and this line is not needed.
  providers: NiftyModule.getProviders(),
  encapsulation: ViewEncapsulation.None
})
export class NiftyDemo {
  modalCommands: ModalCommandDescriptor[];
  effect: string = '1';
  @ViewChild(DemoHead) private demoHead: DemoHead;

  constructor(public modal: Modal) {

    this.modalCommands = [
      {
        text: 'alert drop in',
        factory: () => presets.alert.call(this, this.modal).open()
      },
      {
        text: 'prompt drop in',
        factory: () => presets.prompt.call(this, this.modal).open()
      },
      {
        text: 'confirm drop in',
        factory: () => presets.confirm.call(this, this.modal).open()
      },
      {
        text: 'Cascading example',
        factory: () => presets.cascading.call(this, this.modal).open()
      },
      {
        text: 'In Element example',
        factory: () => presets.alert.call(this, this.modal).inElement(true).open('demo-head')
      },
      {
        text: 'Custom Modal example',
        factory: () => {
          return null as any;
        }
      },
      {
        text: 'no buttons',
        factory: () => presets.noButtons.call(this, this.modal).open()
      },
      {
        text: 'custom buttons',
        factory: () => presets.customButtons.call(this, this.modal).open()
      }
    ];
  }
}
