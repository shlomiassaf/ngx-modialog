import {provide} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {ELEMENT_PROBE_PROVIDERS} from '@angular/platform-browser';

// include for production builds
// import {enableProdMode} from '@angular/core';

// enableProdMode() // include for production builds

import {App} from './app/app';
import {ModalConfig} from 'angular2-modal';

function main() {
    return bootstrap(App, [
        ROUTER_PROVIDERS,
        provide(LocationStrategy, {useClass: HashLocationStrategy}),
        ELEMENT_PROBE_PROVIDERS // remove in production
    ])
        .catch(err => console.error(err));
}

document.addEventListener('DOMContentLoaded', main);
