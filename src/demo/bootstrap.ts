import {provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {ELEMENT_PROBE_PROVIDERS} from 'angular2/platform/common_dom';
// include for production builds
// import {enableProdMode} from 'angular2/core';

// enableProdMode() // include for production builds

import {App} from './app/app';
import {ModalConfig} from 'angular2-modal';

function main() {
    return bootstrap(App, [
        ROUTER_PROVIDERS,
        provide(LocationStrategy, {useClass: HashLocationStrategy}),
        // set a custom default options for the modal.
        provide(ModalConfig, {useValue: new ModalConfig('lg', true, 81)}),
        ELEMENT_PROBE_PROVIDERS // remove in production
    ])
        .catch(err => console.error(err));
}

document.addEventListener('DOMContentLoaded', main);
