import { provideRouter, RouterConfig } from '@angular/router';

import { Home } from './home/home';
import { VexDemo } from './vex-demo/vex-demo';
import { JSNativeDemo } from './js-native-demo/js-native-demo';

import { BSDemoRoutes } from './bootstrap-demo/bootstrap-demo.routes';

export const routes: RouterConfig = [
  { path: 'home', component: Home },
  { path: '', redirectTo: 'home', terminal: true },
  { path: 'vex-demo', component: VexDemo },
  { path: 'js-native-demo', component: JSNativeDemo },
  ...BSDemoRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
