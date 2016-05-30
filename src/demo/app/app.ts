import { Component, ViewEncapsulation } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { FORM_PROVIDERS } from '@angular/common';

import { Home } from './home/home';
import { BootstrapDemo } from './bootstrap-demo/bootstrap-demo';
import { VexDemo } from './vex-demo/vex-demo';
import { JSNativeDemo } from './js-native-demo/js-native-demo';

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app',
    providers: [ ...FORM_PROVIDERS ],
    directives: [ ...ROUTER_DIRECTIVES ],
    pipes: [],
    encapsulation: ViewEncapsulation.None,
    styleUrls: [
        'demo/app/app.css'
    ],
    templateUrl: 'demo/app/app.html'
})
@RouteConfig([
    { path: '/', component: Home, name: 'Home', useAsDefault: true },
    { path: '/bootstrap-demo/...', component: BootstrapDemo, name: 'BootstrapDemo' },
    { path: '/vex-demo', component: VexDemo, name: 'VexDemo' },
    { path: '/js-native-demo', component: JSNativeDemo, name: 'JSNativeDemo' }
])
export class App {
    constructor() {}
}
