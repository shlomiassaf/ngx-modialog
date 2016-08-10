import { NgModule } from '@angular/core';
import { BootstrapModalModule } from '../../../components/angular2-modal/plugins/bootstrap';
import { CommonModule } from '@angular/common';

import { routing } from './bootstrap-demo.routes';
import { BootstrapDemo } from './bootstrap-demo';
import { BootstrapDemoPage } from './bootstrap-demo-page/bootstrap-demo-page';
@NgModule({
  imports: [ CommonModule, BootstrapModalModule, routing ],
  declarations: [
    BootstrapDemo,
    BootstrapDemoPage
  ]
})
export class BootstrapDemoModule { }
