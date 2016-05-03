import {provide} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {ELEMENT_PROBE_PROVIDERS} from '@angular/platform-browser';

// Register providers for browser, this is mandatory.
import {MODAL_BROWSER_PROVIDERS} from 'angular2-modal/platform-browser';

import {App} from './app/app';


function main() {
    return bootstrap(App, [
        ...MODAL_BROWSER_PROVIDERS,
        ROUTER_PROVIDERS,
        provide(LocationStrategy, {useClass: HashLocationStrategy}),
        ELEMENT_PROBE_PROVIDERS // remove in production
    ])
        .catch(err => console.error(err));
}

document.addEventListener('DOMContentLoaded', main);
