import { Home } from './home/home';
import { DocumentationComponent } from './documentation/documentation.component';
export var routes = [
    { path: 'home', component: Home },
    { path: 'documentation', component: DocumentationComponent },
    { path: 'bootstrap-demo', loadChildren: './bootstrap-demo/bootstrap-demo.module#BootstrapDemoModule' },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
//# sourceMappingURL=app.routes.js.map