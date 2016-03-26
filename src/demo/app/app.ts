import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';

import {DemoPage} from './demoPage/demoPage';
import {CustomizeWizard} from './customizeWizard/customizeWizard';
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
    <main>
      <router-outlet></router-outlet>
    </main>
  `
})
@RouteConfig([
    { path: '/', component: DemoPage, name: 'Demo' },
    { path: '/customizeModals', component: CustomizeWizard, name: 'CustomizeModals' }
])
export class App {
    constructor() {}
}
