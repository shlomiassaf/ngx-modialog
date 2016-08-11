import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoHead } from './demo-head/index';


@NgModule({
  imports: [ CommonModule ],
  declarations: [ DemoHead ],
  exports: [ DemoHead ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
      ]
    };
  }
}
