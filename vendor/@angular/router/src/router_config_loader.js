/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
"use strict";
var core_1 = require('@angular/core');
var fromPromise_1 = require('rxjs/observable/fromPromise');
var collection_1 = require('./utils/collection');
/**
 * @deprecated use Routes
 */
exports.ROUTER_CONFIG = new core_1.OpaqueToken('ROUTER_CONFIG');
exports.ROUTES = new core_1.OpaqueToken('ROUTES');
var LoadedRouterConfig = (function () {
    function LoadedRouterConfig(routes, injector, factoryResolver) {
        this.routes = routes;
        this.injector = injector;
        this.factoryResolver = factoryResolver;
    }
    return LoadedRouterConfig;
}());
exports.LoadedRouterConfig = LoadedRouterConfig;
var RouterConfigLoader = (function () {
    function RouterConfigLoader(loader) {
        this.loader = loader;
    }
    RouterConfigLoader.prototype.load = function (parentInjector, path) {
        return fromPromise_1.fromPromise(this.loader.load(path).then(function (r) {
            var ref = r.create(parentInjector);
            return new LoadedRouterConfig(collection_1.flatten(ref.injector.get(exports.ROUTES)), ref.injector, ref.componentFactoryResolver);
        }));
    };
    return RouterConfigLoader;
}());
exports.RouterConfigLoader = RouterConfigLoader;
//# sourceMappingURL=router_config_loader.js.map