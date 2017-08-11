import { Home } from './home/home';
export var routes = [
    { path: 'home', component: Home },
    { path: 'bootstrap-demo', loadChildren: './bootstrap-demo/bootstrap-demo.module#BootstrapDemoModule' },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
//# sourceMappingURL=app.routes.js.map