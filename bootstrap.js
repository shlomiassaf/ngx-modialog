"use strict";
var core_1 = require('@angular/core');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var router_deprecated_1 = require('@angular/router-deprecated');
var common_1 = require('@angular/common');
var platform_browser_1 = require('@angular/platform-browser');
// Register providers for browser, this is mandatory.
var platform_browser_2 = require('./components/angular2-modal/platform-browser');
var app_1 = require('./demo/app/app');
var _bootstrapped = false;
function main() {
    if (_bootstrapped) {
        return Promise.reject(null);
    }
    else {
        _bootstrapped = true;
        return platform_browser_dynamic_1.bootstrap(app_1.App, platform_browser_2.MODAL_BROWSER_PROVIDERS.concat([
            router_deprecated_1.ROUTER_PROVIDERS,
            core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy }),
            platform_browser_1.ELEMENT_PROBE_PROVIDERS // remove in production
        ]))
            .catch(function (err) { return console.error(err); });
    }
}
exports.main = main;
function isBootstrapped() {
    return _bootstrapped;
}
exports.isBootstrapped = isBootstrapped;
document.addEventListener('DOMContentLoaded', main);
//# sourceMappingURL=bootstrap.js.map