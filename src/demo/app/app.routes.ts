import { Routes } from '@angular/router';

import { Home } from './home/home';
import { DocumentationComponent } from './documentation/documentation.component';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'documentation', component: DocumentationComponent },
  { path: 'bootstrap-demo', loadChildren: './bootstrap-demo/bootstrap-demo.module#BootstrapDemoModule' },
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

