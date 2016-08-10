/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
"use strict";
var common_1 = require('@angular/common');
var core_1 = require('@angular/core');
var common_router_providers_1 = require('./common_router_providers');
var router_link_1 = require('./directives/router_link');
var router_link_active_1 = require('./directives/router_link_active');
var router_outlet_1 = require('./directives/router_outlet');
var router_1 = require('./router');
var router_config_loader_1 = require('./router_config_loader');
var router_outlet_map_1 = require('./router_outlet_map');
var router_state_1 = require('./router_state');
var url_tree_1 = require('./url_tree');
/**
 * @stable
 */
exports.ROUTER_DIRECTIVES = [router_outlet_1.RouterOutlet, router_link_1.RouterLink, router_link_1.RouterLinkWithHref, router_link_active_1.RouterLinkActive];
var pathLocationStrategy = {
    provide: common_1.LocationStrategy,
    useClass: common_1.PathLocationStrategy
};
var hashLocationStrategy = {
    provide: common_1.LocationStrategy,
    useClass: common_1.HashLocationStrategy
};
exports.ROUTER_PROVIDERS = [
    common_1.Location, { provide: url_tree_1.UrlSerializer, useClass: url_tree_1.DefaultUrlSerializer }, {
        provide: router_1.Router,
        useFactory: common_router_providers_1.setupRouter,
        deps: [
            core_1.ApplicationRef, core_1.ComponentResolver, url_tree_1.UrlSerializer, router_outlet_map_1.RouterOutletMap, common_1.Location, core_1.Injector,
            core_1.NgModuleFactoryLoader, router_config_loader_1.ROUTES, common_router_providers_1.ROUTER_CONFIGURATION
        ]
    },
    router_outlet_map_1.RouterOutletMap, { provide: router_state_1.ActivatedRoute, useFactory: common_router_providers_1.rootRoute, deps: [router_1.Router] },
    { provide: core_1.NgModuleFactoryLoader, useClass: core_1.SystemJsNgModuleLoader },
    { provide: common_router_providers_1.ROUTER_CONFIGURATION, useValue: { enableTracing: false } }
];
var RouterModule = (function () {
    function RouterModule() {
    }
    RouterModule.forRoot = function (routes, config) {
        return {
            ngModule: RouterModule,
            providers: [
                exports.ROUTER_PROVIDERS, common_router_providers_1.provideRoutes(routes),
                { provide: common_router_providers_1.ROUTER_CONFIGURATION, useValue: config ? config : {} }, {
                    provide: common_1.LocationStrategy,
                    useFactory: provideLocationStrategy,
                    deps: [
                        common_1.PlatformLocation, [new core_1.Inject(common_1.APP_BASE_HREF), new core_1.Optional()], common_router_providers_1.ROUTER_CONFIGURATION
                    ]
                },
                common_router_providers_1.provideRouterInitializer()
            ]
        };
    };
    RouterModule.forChild = function (routes) {
        return { ngModule: RouterModule, providers: [common_router_providers_1.provideRoutes(routes)] };
    };
    /** @nocollapse */
    RouterModule.decorators = [
        { type: core_1.NgModule, args: [{ declarations: exports.ROUTER_DIRECTIVES, exports: exports.ROUTER_DIRECTIVES },] },
    ];
    return RouterModule;
}());
exports.RouterModule = RouterModule;
function provideLocationStrategy(platformLocationStrategy, baseHref, options) {
    if (options === void 0) { options = {}; }
    return options.useHash ? new common_1.HashLocationStrategy(platformLocationStrategy, baseHref) :
        new common_1.PathLocationStrategy(platformLocationStrategy, baseHref);
}
exports.provideLocationStrategy = provideLocationStrategy;
//# sourceMappingURL=router_module.js.map