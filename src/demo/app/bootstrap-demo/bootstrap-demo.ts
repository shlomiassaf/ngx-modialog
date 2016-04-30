import {Component, ViewEncapsulation, ViewContainerRef} from 'angular2/core';
import {RouterOutlet, RouteConfig} from 'angular2/router';

import {Modal, MODAL_PROVIDERS} from 'angular2-modal';
import {BS_MODAL_PROVIDERS} from '../../../components/angular2-modal/platform/bootstrap';

import {BootstrapDemoPage} from './bootstrap-demo-page/bootstrap-demo-page';
import {ModalCustomisationWizard} from './modal-customisation-wizard/modal-customisation-wizard';


@Component({
    selector: 'bootstrap-demo',
    styles: [ require('bootstrap/dist/css/bootstrap.css') ],
    viewProviders: [
        ...MODAL_PROVIDERS,
        ...BS_MODAL_PROVIDERS
    ],
    template: '<router-outlet></router-outlet>',
    directives: [RouterOutlet],
    encapsulation: ViewEncapsulation.None
})
@RouteConfig([
    { path: '/', component: BootstrapDemoPage, name: 'BootstrapDemo', useAsDefault: true },
    { path: '/customizeModals', component: ModalCustomisationWizard, name: 'CustomizeModals' },
])
export class BootstrapDemo {
    constructor(public modal: Modal, viewContainer: ViewContainerRef) {
        /**
         * A Default view container ref, usually the app root container ref.
         * Has to be set manually until we can find a way to get it automatically.
         */
        modal.defaultViewContainer = viewContainer;
    }
}
