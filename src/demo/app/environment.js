/**
 * Angular 2
 */
import { enableDebugTools, disableDebugTools } from '@angular/platform-browser';
import { ApplicationRef, enableProdMode } from '@angular/core';
/**
 * Environment Providers
 */
var PROVIDERS = [];
/**
 * Angular debug tools in the dev console
 * https://github.com/angular/angular/blob/86405345b781a9dc2438c0fbe3e9409245647019/TOOLS_JS.md
 */
var _decorateModuleRef = function (value) { return value; };
if ('production' === ENV) {
    enableProdMode();
    /**
     * Production
     */
    _decorateModuleRef = function (modRef) {
        disableDebugTools();
        return modRef;
    };
    PROVIDERS = PROVIDERS.slice();
}
else {
    _decorateModuleRef = function (modRef) {
        var appRef = modRef.injector.get(ApplicationRef);
        var cmpRef = appRef.components[0];
        var _ng = window.ng;
        enableDebugTools(cmpRef);
        window.ng.probe = _ng.probe;
        window.ng.coreTokens = _ng.coreTokens;
        return modRef;
    };
    /**
     * Development
     */
    PROVIDERS = PROVIDERS.slice();
}
export var decorateModuleRef = _decorateModuleRef;
export var ENV_PROVIDERS = PROVIDERS.slice();
//# sourceMappingURL=environment.js.map