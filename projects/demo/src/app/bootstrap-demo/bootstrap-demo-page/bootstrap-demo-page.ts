import { Compiler, Component, Injector, TemplateRef, ViewChild, NgModuleRef } from '@angular/core';

import { overlayConfigFactory } from "ngx-modialog";
import { Modal, BSModalContext } from 'ngx-modialog/plugins/bootstrap';

import { ModalCommandDescriptor } from '../../demo-head/index';
import { CustomModal } from './custom-modal-sample';
import * as presets from '../presets';

import { RuntimeCompiledModule, RuntimeCompiledComponent } from './runtime-compiled';

let runtimeModuleRefPromise: Promise<NgModuleRef<any>>;

@Component({
  selector: 'bootstrap-demo-page',
  styleUrls: ['./bootstrap-demo-page.css'],
  templateUrl: './bootstrap-demo-page.tpl.html'
})
export class BootstrapDemoPage {
  modalCommands: ModalCommandDescriptor[];
  @ViewChild('templateRef') public templateRef: TemplateRef<any>;

  constructor(public modal: Modal, private compiler: Compiler, private injector: Injector) {
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

      },
      // TODO: Currently AOT build can't support this, need to implement lazy compiler
      // see https://github.com/shlomiassaf/lazy-jit
      // {
      //   text: 'JIT Compiled component',
      //   factory: () => {
      //     if (!runtimeModuleRefPromise) {
      //       runtimeModuleRefPromise = this.compiler.compileModuleAsync(RuntimeCompiledModule)
      //         .then(moduleFactory => moduleFactory.create(this.injector));
      //     }
      //
      //     return runtimeModuleRefPromise.then(module => {
      //         return this.modal
      //           .open(RuntimeCompiledComponent, overlayConfigFactory({isBlocking: false}, BSModalContext, {
      //             injector: module.injector
      //           }));
      //       });
      //   }
      // }
    ];
  }

}
