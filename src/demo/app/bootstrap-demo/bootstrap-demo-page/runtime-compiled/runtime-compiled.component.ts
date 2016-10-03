import { Component, Compiler, NgModuleRef } from '@angular/core';

import { DialogRef, overlayConfigFactory } from "../../../../../components/angular2-modal";
import { Modal, BSModalContext } from '../../../../../components/angular2-modal/plugins/bootstrap';

import { InnerRuntimeCompiledModule, InnerRuntimeCompiledComponent } from './inner-runtime-compiled';
let runtimeModuleRefPromise: Promise<NgModuleRef<any>>;

@Component({
  selector: 'runtime-compiled-component',
  template:
`
<div class="modal-header">
    <h3>I'm a JIT compiled component!</h3>
</div>
<div class="modal-body">
  <p>This is a demonstration of JIT component displayed as a modal content, it also shows how to link the result of a chain of modals.</p>
  <p>To JIT compile another (different) module inside this (JIT) compiled module press the button below.
  The value selected on the popup opened will bubble down.</p>
  <button class="btn btn-primary" (click)="openModal()">Compile and open again!</button>
</div>`
})
export class RuntimeCompiledComponent {
  constructor(private dialogRef: DialogRef<any>, private compiler: Compiler, private modal: Modal) {

  }

  openModal(): void {
    if (!runtimeModuleRefPromise) {
      runtimeModuleRefPromise = this.compiler.compileModuleAsync(InnerRuntimeCompiledModule)
        .then(moduleFactory => moduleFactory.create(this.modal.overlay.defaultViewContainer.parentInjector));
    }

    runtimeModuleRefPromise
      .then( module => overlayConfigFactory({isBlocking: true}, BSModalContext, { injector: module.injector }) )
      .then( overlayConfig => this.modal.open(InnerRuntimeCompiledComponent, overlayConfig) )
      .then( dialogRef => dialogRef.result )
      .then( value => this.dialogRef.close(value) )
      .catch( err => this.dialogRef.dismiss() );
  }
}
