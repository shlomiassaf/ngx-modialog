import { Routes } from '@angular/router';

import { Home } from './home/home';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'bootstrap-demo', loadChildren: './bootstrap-demo/bootstrap-demo.module#BootstrapDemoModule' },
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

