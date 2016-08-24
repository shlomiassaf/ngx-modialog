import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NiftyDemo } from './nifty-demo';

export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: 'nifty-demo', component: NiftyDemo },
]);

