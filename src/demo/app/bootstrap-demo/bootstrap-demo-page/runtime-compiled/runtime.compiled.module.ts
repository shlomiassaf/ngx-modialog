import { NgModule }       from '@angular/core';
import { CommonModule }  from '@angular/common';

import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

import { RuntimeCompiledComponent }   from './runtime-compiled.component';

@NgModule({
  imports: [
    CommonModule,
    ModalModule,
    BootstrapModalModule
  ],
  declarations: [
    RuntimeCompiledComponent
  ],
  entryComponents: [
    RuntimeCompiledComponent
  ],
})
export class RuntimeCompiledModule {

}
