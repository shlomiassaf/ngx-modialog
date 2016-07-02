"use strict";
var core_1 = require('@angular/core');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var platform_browser_1 = require("angular2-modal/platform-browser");
// Register providers for browser, this is mandatory.
var app_1 = require('./demo/app/app');
var app_routes_1 = require('./demo/app/app.routes');
var _bootstrapped = false;
function main() {
    if (_bootstrapped) {
        return Promise.reject(null);
    }
    else {
        _bootstrapped = true;
        return platform_browser_dynamic_1.bootstrap(app_1.App, platform_browser_1.MODAL_BROWSER_PROVIDERS.concat([
            { provide: core_1.PLATFORM_DIRECTIVES, multi: true, useValue: router_1.ROUTER_DIRECTIVES },
            app_routes_1.APP_ROUTER_PROVIDERS,
            { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
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