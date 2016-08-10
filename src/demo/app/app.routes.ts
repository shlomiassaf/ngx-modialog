import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Home } from './home/home';
// import { VexDemo } from './vex-demo/vex-demo';
// import { JSNativeDemo } from './js-native-demo/js-native-demo';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: '', redirectTo: 'home', terminal: true },
  // { path: 'vex-demo', component: VexDemo },
  // { path: 'js-native-demo', component: JSNativeDemo }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
