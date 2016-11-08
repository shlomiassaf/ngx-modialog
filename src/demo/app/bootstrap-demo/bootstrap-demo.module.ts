import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { SharedModule } from '../shared.module';


import { routing } from './bootstrap-demo.routes';
import { BootstrapDemo } from './bootstrap-demo';
import { BootstrapDemoPage } from './bootstrap-demo-page/bootstrap-demo-page';
import { CustomModal } from './bootstrap-demo-page/custom-modal-sample';
import { ModalCustomisationWizard } from './modal-customisation-wizard/modal-customisation-wizard';

@NgModule({
  imports: [ FormsModule, CommonModule, BootstrapModalModule, routing, SharedModule ],
  declarations: [
    BootstrapDemo,
    BootstrapDemoPage,
    CustomModal,
    ModalCustomisationWizard
  ],
  entryComponents: [ CustomModal ]
})
export class BootstrapDemoModule { }
