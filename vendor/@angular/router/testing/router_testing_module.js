/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
"use strict";
var common_1 = require('@angular/common');
var testing_1 = require('@angular/common/testing');
var core_1 = require('@angular/core');
var index_1 = require('../index');
var router_config_loader_1 = require('../src/router_config_loader');
var router_module_1 = require('../src/router_module');
var collection_1 = require('../src/utils/collection');
var SpyNgModuleFactoryLoader = (function () {
    function SpyNgModuleFactoryLoader(compiler) {
        this.compiler = compiler;
        this.stubbedModules = {};
    }
    SpyNgModuleFactoryLoader.prototype.load = function (path) {
        if (this.stubbedModules[path]) {
            return this.compiler.compileModuleAsync(this.stubbedModules[path]);
        }
        else {
            return Promise.reject(new Error("Cannot find module " + path));
        }
    };
    /** @nocollapse */
    SpyNgModuleFactoryLoader.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    SpyNgModuleFactoryLoader.ctorParameters = [
        { type: core_1.Compiler, },
    ];
    return SpyNgModuleFactoryLoader;
}());
exports.SpyNgModuleFactoryLoader = SpyNgModuleFactoryLoader;
function setupTestingRouter(resolver, urlSerializer, outletMap, location, loader, injector, routes) {
    return new index_1.Router(null, resolver, urlSerializer, outletMap, location, injector, loader, collection_1.flatten(routes));
}
var RouterTestingModule = (function () {
    function RouterTestingModule() {
    }
    /** @nocollapse */
    RouterTestingModule.decorators = [
        { type: core_1.NgModule, args: [{
                    exports: [router_module_1.RouterModule],
                    providers: [
                        router_module_1.ROUTER_PROVIDERS,
                        { provide: common_1.Location, useClass: testing_1.SpyLocation },
                        { provide: common_1.LocationStrategy, useClass: testing_1.MockLocationStrategy },
                        { provide: core_1.NgModuleFactoryLoader, useClass: SpyNgModuleFactoryLoader },
                        {
                            provide: index_1.Router,
                            useFactory: setupTestingRouter,
                            deps: [
                                core_1.ComponentResolver, index_1.UrlSerializer, index_1.RouterOutletMap, common_1.Location, core_1.NgModuleFactoryLoader,
                                core_1.Injector, router_config_loader_1.ROUTES
                            ]
                        },
                    ]
                },] },
    ];
    return RouterTestingModule;
}());
exports.RouterTestingModule = RouterTestingModule;
//# sourceMappingURL=router_testing_module.js.map