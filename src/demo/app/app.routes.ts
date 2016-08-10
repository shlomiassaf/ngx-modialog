import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Home } from './home/home';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: '', redirectTo: 'home', terminal: true }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
