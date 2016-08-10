/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Location, LocationStrategy } from '@angular/common';
import { MockLocationStrategy, SpyLocation } from '@angular/common/testing';
import { Compiler, ComponentResolver, Injectable, Injector, NgModule, NgModuleFactoryLoader } from '@angular/core';
import { Router, RouterOutletMap, UrlSerializer } from '../index';
import { ROUTES } from '../src/router_config_loader';
import { ROUTER_PROVIDERS, RouterModule } from '../src/router_module';
import { flatten } from '../src/utils/collection';
export class SpyNgModuleFactoryLoader {
    constructor(compiler) {
        this.compiler = compiler;
        this.stubbedModules = {};
    }
    load(path) {
        if (this.stubbedModules[path]) {
            return this.compiler.compileModuleAsync(this.stubbedModules[path]);
        }
        else {
            return Promise.reject(new Error(`Cannot find module ${path}`));
        }
    }
}
/** @nocollapse */
SpyNgModuleFactoryLoader.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SpyNgModuleFactoryLoader.ctorParameters = [
    { type: Compiler, },
];
function setupTestingRouter(resolver, urlSerializer, outletMap, location, loader, injector, routes) {
    return new Router(null, resolver, urlSerializer, outletMap, location, injector, loader, flatten(routes));
}
export class RouterTestingModule {
}
/** @nocollapse */
RouterTestingModule.decorators = [
    { type: NgModule, args: [{
                exports: [RouterModule],
                providers: [
                    ROUTER_PROVIDERS,
                    { provide: Location, useClass: SpyLocation },
                    { provide: LocationStrategy, useClass: MockLocationStrategy },
                    { provide: NgModuleFactoryLoader, useClass: SpyNgModuleFactoryLoader },
                    {
                        provide: Router,
                        useFactory: setupTestingRouter,
                        deps: [
                            ComponentResolver, UrlSerializer, RouterOutletMap, Location, NgModuleFactoryLoader,
                            Injector, ROUTES
                        ]
                    },
                ]
            },] },
];
//# sourceMappingURL=router_testing_module.js.map