import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { VexDemo } from './vex-demo';

export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: 'vex-demo', component: VexDemo },
]);

