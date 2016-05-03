import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {FORM_PROVIDERS} from '@angular/common';

import {Home} from './home/home';
import {BootstrapDemo} from './bootstrap-demo/bootstrap-demo';
import {VexDemo} from './vex-demo/vex-demo';
import {JSNativeDemo} from './js-native-demo/js-native-demo';

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app', // <app></app>
    // We need to tell Angular's Dependency Injection which providers are in our app.
    providers: [ ...FORM_PROVIDERS],
    // We need to tell Angular's compiler which directives are in our template.
    // Doing so will allow Angular to attach our behavior to an element
    directives: [ ...ROUTER_DIRECTIVES],
    // We need to tell Angular's compiler which custom pipes are in our template.
    pipes: [],
    // Our list of styles in our component. We may add more to compose many styles together
    styles: [ ],
    // Every Angular template is first compiled by the browser before Angular runs it's compiler
    template: `
    <a [routerLink]="['Home']">Home</a>
    <a [routerLink]="['BootstrapDemo']">Bootstrap demo</a>
    <a [routerLink]="['VexDemo']">Vex demo</a>
    <a [routerLink]="['JSNativeDemo']">JS Native demo</a>
    <main>
      <router-outlet></router-outlet>
    </main>
  `
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
