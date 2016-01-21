// TODO: Add to the components per demand
import "rxjs/Rx";

import {provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {ELEMENT_PROBE_PROVIDERS} from 'angular2/platform/common_dom';
// include for production builds
// import {enableProdMode} from 'angular2/core';

// enableProdMode() // include for production builds

import {App} from './app/app';
import {ModalConfig} from 'ng2-bs-modal';
import {UiPositionUtil, DomUiPositionUtil} from 'ng2-bs-core';

function main() {
    return bootstrap(App, [
        HTTP_PROVIDERS,
        provide(UiPositionUtil, {useValue: new DomUiPositionUtil()}),
        ROUTER_PROVIDERS,
        provide(ModalConfig, {useValue: new ModalConfig('lg', true, 81)}),
        ELEMENT_PROBE_PROVIDERS // remove in production
    ])
        .catch(err => console.error(err));
}

document.addEventListener('DOMContentLoaded', main);
