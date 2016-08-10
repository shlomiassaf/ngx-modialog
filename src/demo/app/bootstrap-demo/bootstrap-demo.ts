import { Component, ViewEncapsulation, ViewContainerRef } from '@angular/core';

import { Modal } from '../../../components/angular2-modal/plugins/bootstrap';

@Component({
  selector: 'bootstrap-demo',
  template: `<router-outlet></router-outlet>`,
  encapsulation: ViewEncapsulation.None
})
export class BootstrapDemo {
  constructor(public modal: Modal, viewContainer: ViewContainerRef) {
    /**
     * A Default view container ref, usually the app root container ref.
     * Has to be set manually until we can find a way to get it automatically.
     */
    modal.defaultViewContainer = viewContainer;
  }
}
