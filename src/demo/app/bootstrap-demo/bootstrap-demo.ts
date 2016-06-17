import {Component, ViewEncapsulation, ViewContainerRef} from '@angular/core';

import {Modal, BS_MODAL_PROVIDERS} from '../../../components/angular2-modal/plugins/bootstrap/index';

@Component({
    selector: 'bootstrap-demo',
    viewProviders: [ ...BS_MODAL_PROVIDERS ],
    template: `<router-outlet></router-outlet>`,
    directives: [],
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
