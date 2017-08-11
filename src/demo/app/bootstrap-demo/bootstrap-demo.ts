import { Component, ViewEncapsulation } from '@angular/core';
import { providers, bootstrap4Mode } from 'angular2-modal/plugins/bootstrap';

bootstrap4Mode();

@Component({
  selector: 'bootstrap-demo',
  template: `<router-outlet></router-outlet>`,
  // We override providers set by the Module since this app is using multiple module plugins
  // (js-native, vex, bootstrap) which messes up the provider tree (last plugin wins)
  // usually an app will use one plugin and this line is not needed.
  providers: providers,
  encapsulation: ViewEncapsulation.None
})
export class BootstrapDemo {
  constructor() { }
}
