import { Component, Compiler, NgModuleRef, ViewContainerRef } from '@angular/core';

import { DialogRef, overlayConfigFactory } from "ngx-modialog";
import { Modal, BSModalContext } from 'ngx-modialog/plugins/bootstrap';

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
  
  <hr>
  
  <p>To demonstrate opening a JIT compiled component inside a view container ref that was created before the component was compiled press the button below.</p>
  <button class="btn btn-warning" (click)="openInElement()">Open in element!</button>
</div>`
})
export class RuntimeCompiledComponent {
  private toKill: DialogRef<any>[] = [];

  constructor(private dialogRef: DialogRef<any>,
              private vcRef: ViewContainerRef,
              private compiler: Compiler,
              private modal: Modal) {

  }

  openInElement() {
    if (!runtimeModuleRefPromise) {
      runtimeModuleRefPromise = this.compiler.compileModuleAsync(InnerRuntimeCompiledModule)
        .then(moduleFactory => moduleFactory.create(this.vcRef.parentInjector));
    }

    runtimeModuleRefPromise
      .then( module => overlayConfigFactory({inElement: true}, BSModalContext, { injector: module.injector, viewContainer: 'demo-head' }) )
      .then( overlayConfig => this.modal.open(InnerRuntimeCompiledComponent, overlayConfig) )
      .then( dialogRef => this.toKill.push(dialogRef) );
  }

  ngOnDestroy(): void {
    let dlgRef: DialogRef<any>;
    while(dlgRef = this.toKill.pop()) {
      dlgRef.close('');
    }
  }

  openModal(): void {
    if (!runtimeModuleRefPromise) {
      runtimeModuleRefPromise = this.compiler.compileModuleAsync(InnerRuntimeCompiledModule)
        .then(moduleFactory => moduleFactory.create(this.vcRef.parentInjector));
    }

    runtimeModuleRefPromise
      .then( module => overlayConfigFactory({isBlocking: true}, BSModalContext, { injector: module.injector }) )
      .then( overlayConfig => this.modal.open(InnerRuntimeCompiledComponent, overlayConfig) )
      .then( dialogRef => dialogRef.result )
      .then( value => this.dialogRef.close(value) )
      .catch( err => this.dialogRef.dismiss() );
  }
}
