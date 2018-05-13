import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BootstrapDemo } from './bootstrap-demo';
import { BootstrapDemoPage } from './bootstrap-demo-page/bootstrap-demo-page';
import { ModalCustomisationWizard } from './modal-customisation-wizard/modal-customisation-wizard';

export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: '', component: BootstrapDemo, children: [
      { path: '', component: BootstrapDemoPage, pathMatch: 'full'},
      { path: 'customizeModals', component: ModalCustomisationWizard }
    ]
  }
]);

