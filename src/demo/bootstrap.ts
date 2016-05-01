import {provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {LocationStrategy, HashLocationStrategy} from 'angular2/platform/common';
import {ELEMENT_PROBE_PROVIDERS} from 'angular2/platform/common_dom';

// Register providers for browser, this is mandatory.
import {MODAL_BROWSER_PROVIDERS} from 'angular2-modal/platform/browser';

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
