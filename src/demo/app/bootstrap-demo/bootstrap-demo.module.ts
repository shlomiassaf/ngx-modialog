import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BootstrapModalModule } from '../../../components/angular2-modal/plugins/bootstrap';
import { SharedModule } from '../shared.module';


import { routing } from './bootstrap-demo.routes';
import { BootstrapDemo } from './bootstrap-demo';
import { BootstrapDemoPage } from './bootstrap-demo-page/bootstrap-demo-page';
import { AdditionCalculateWindow } from './bootstrap-demo-page/custom-modal-sample';

@NgModule({
  imports: [ CommonModule, BootstrapModalModule, routing, SharedModule ],
  declarations: [
    BootstrapDemo,
    BootstrapDemoPage,
    AdditionCalculateWindow
  ],
  entryComponents: [ AdditionCalculateWindow ]
})
export class BootstrapDemoModule { }
