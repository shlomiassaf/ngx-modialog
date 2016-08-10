"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
// The app module
var app_module_1 = require('./demo/app/app.module');
var _bootstrapped = false;
function main() {
    if (_bootstrapped) {
        return Promise.reject(null);
    }
    else {
        _bootstrapped = true;
        return platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
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