import { NgModule }       from '@angular/core';
import { CommonModule }  from '@angular/common';

import { ModalModule } from '../../../../../../components/angular2-modal';

import { InnerRuntimeCompiledComponent }   from './inner-runtime-compiled.component';

@NgModule({
  imports: [
    CommonModule,
    ModalModule
  ],
  declarations: [
    InnerRuntimeCompiledComponent
  ],
  entryComponents: [
    InnerRuntimeCompiledComponent
  ],
})
export class InnerRuntimeCompiledModule {

}
