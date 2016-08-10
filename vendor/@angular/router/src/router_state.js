/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BehaviorSubject_1 = require('rxjs/BehaviorSubject');
var shared_1 = require('./shared');
var url_tree_1 = require('./url_tree');
var collection_1 = require('./utils/collection');
var tree_1 = require('./utils/tree');
/**
 * The state of the router.
 *
 * ### Usage
 *
 * ```
 * class MyComponent {
 *   constructor(router: Router) {
 *     const state = router.routerState;
 *     const id: Observable<string> = state.firstChild(state.root).params.map(p => p.id);
 *     const isDebug: Observable<string> = state.queryParams.map(q => q.debug);
 *   }
 * }
 * ```
 *
 * @stable
 */
var RouterState = (function (_super) {
    __extends(RouterState, _super);
    /**
     * @internal
     */
    function RouterState(root, snapshot) {
        _super.call(this, root);
        this.snapshot = snapshot;
        setRouterStateSnapshot(this, root);
    }
    Object.defineProperty(RouterState.prototype, "queryParams", {
        /**
          * @deprecated (Use root.queryParams)
          */
        get: function () { return this.root.queryParams; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouterState.prototype, "fragment", {
        /**
         * @deprecated (Use root.fragment)
         */
        get: function () { return this.root.fragment; },
        enumerable: true,
        configurable: true
    });
    RouterState.prototype.toString = function () { return this.snapshot.toString(); };
    return RouterState;
}(tree_1.Tree));
exports.RouterState = RouterState;
function createEmptyState(urlTree, rootComponent) {
    var snapshot = createEmptyStateSnapshot(urlTree, rootComponent);
    var emptyUrl = new BehaviorSubject_1.BehaviorSubject([new url_tree_1.UrlSegment('', {})]);
    var emptyParams = new BehaviorSubject_1.BehaviorSubject({});
    var emptyData = new BehaviorSubject_1.BehaviorSubject({});
    var emptyQueryParams = new BehaviorSubject_1.BehaviorSubject({});
    var fragment = new BehaviorSubject_1.BehaviorSubject('');
    var activated = new ActivatedRoute(emptyUrl, emptyParams, emptyQueryParams, fragment, emptyData, shared_1.PRIMARY_OUTLET, rootComponent, snapshot.root);
    activated.snapshot = snapshot.root;
    return new RouterState(new tree_1.TreeNode(activated, []), snapshot);
}
exports.createEmptyState = createEmptyState;
function createEmptyStateSnapshot(urlTree, rootComponent) {
    var emptyParams = {};
    var emptyData = {};
    var emptyQueryParams = {};
    var fragment = '';
    var activated = new ActivatedRouteSnapshot([], emptyParams, emptyQueryParams, fragment, emptyData, shared_1.PRIMARY_OUTLET, rootComponent, null, urlTree.root, -1, InheritedResolve.empty);
    return new RouterStateSnapshot('', new tree_1.TreeNode(activated, []));
}
/**
 * Contains the information about a component loaded in an outlet. The information is provided
 * through the params, urlSegments, and data observables.
 *
 * ### Usage
 *
 * ```
 * class MyComponent {
 *   constructor(route: ActivatedRoute) {
 *     const id: Observable<string> = route.params.map(p => p.id);
 *     const data = route.data.map(d => d.user); //includes `data` and `resolve`
 *   }
 * }
 * ```
 *
 * @stable
 */
var ActivatedRoute = (function () {
    /**
     * @internal
     */
    function ActivatedRoute(url, params, queryParams, fragment, data, outlet, component, futureSnapshot) {
        this.url = url;
        this.params = params;
        this.queryParams = queryParams;
        this.fragment = fragment;
        this.data = data;
        this.outlet = outlet;
        this.component = component;
        this._futureSnapshot = futureSnapshot;
    }
    Object.defineProperty(ActivatedRoute.prototype, "routeConfig", {
        get: function () { return this._futureSnapshot.routeConfig; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRoute.prototype, "root", {
        get: function () { return this._routerState.root; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRoute.prototype, "parent", {
        get: function () { return this._routerState.parent(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRoute.prototype, "firstChild", {
        get: function () { return this._routerState.firstChild(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRoute.prototype, "children", {
        get: function () { return this._routerState.children(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRoute.prototype, "pathFromRoot", {
        get: function () { return this._routerState.pathFromRoot(this); },
        enumerable: true,
        configurable: true
    });
    ActivatedRoute.prototype.toString = function () {
        return this.snapshot ? this.snapshot.toString() : "Future(" + this._futureSnapshot + ")";
    };
    return ActivatedRoute;
}());
exports.ActivatedRoute = ActivatedRoute;
/**
 * @internal
 */
var InheritedResolve = (function () {
    function InheritedResolve(parent, current) {
        this.parent = parent;
        this.current = current;
        /**
         * @internal
         */
        this.resolvedData = {};
    }
    Object.defineProperty(InheritedResolve.prototype, "flattenedResolvedData", {
        /**
         * @internal
         */
        get: function () {
            return this.parent ? collection_1.merge(this.parent.flattenedResolvedData, this.resolvedData) :
                this.resolvedData;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InheritedResolve, "empty", {
        get: function () { return new InheritedResolve(null, {}); },
        enumerable: true,
        configurable: true
    });
    return InheritedResolve;
}());
exports.InheritedResolve = InheritedResolve;
/**
 * Contains the information about a component loaded in an outlet at a particular moment in time.
 *
 * ### Usage
 *
 * ```
 * class MyComponent {
 *   constructor(route: ActivatedRoute) {
 *     const id: string = route.snapshot.params.id;
 *     const data = route.snapshot.data;
 *   }
 * }
 * ```
 *
 * @stable
 */
var ActivatedRouteSnapshot = (function () {
    /**
     * @internal
     */
    function ActivatedRouteSnapshot(url, params, queryParams, fragment, data, outlet, component, routeConfig, urlSegment, lastPathIndex, resolve) {
        this.url = url;
        this.params = params;
        this.queryParams = queryParams;
        this.fragment = fragment;
        this.data = data;
        this.outlet = outlet;
        this.component = component;
        this._routeConfig = routeConfig;
        this._urlSegment = urlSegment;
        this._lastPathIndex = lastPathIndex;
        this._resolve = resolve;
    }
    Object.defineProperty(ActivatedRouteSnapshot.prototype, "routeConfig", {
        get: function () { return this._routeConfig; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRouteSnapshot.prototype, "root", {
        get: function () { return this._routerState.root; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRouteSnapshot.prototype, "parent", {
        get: function () { return this._routerState.parent(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRouteSnapshot.prototype, "firstChild", {
        get: function () { return this._routerState.firstChild(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRouteSnapshot.prototype, "children", {
        get: function () { return this._routerState.children(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRouteSnapshot.prototype, "pathFromRoot", {
        get: function () { return this._routerState.pathFromRoot(this); },
        enumerable: true,
        configurable: true
    });
    ActivatedRouteSnapshot.prototype.toString = function () {
        var url = this.url.map(function (s) { return s.toString(); }).join('/');
        var matched = this._routeConfig ? this._routeConfig.path : '';
        return "Route(url:'" + url + "', path:'" + matched + "')";
    };
    return ActivatedRouteSnapshot;
}());
exports.ActivatedRouteSnapshot = ActivatedRouteSnapshot;
/**
 * The state of the router at a particular moment in time.
 *
 * ### Usage
 *
 * ```
 * class MyComponent {
 *   constructor(router: Router) {
 *     const snapshot = router.routerState.snapshot;
 *   }
 * }
 * ```
 *
 * @stable
 */
var RouterStateSnapshot = (function (_super) {
    __extends(RouterStateSnapshot, _super);
    /**
     * @internal
     */
    function RouterStateSnapshot(url, root) {
        _super.call(this, root);
        this.url = url;
        setRouterStateSnapshot(this, root);
    }
    Object.defineProperty(RouterStateSnapshot.prototype, "queryParams", {
        /**
         * @deprecated (Use root.queryParams)
         */
        get: function () { return this.root.queryParams; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouterStateSnapshot.prototype, "fragment", {
        /**
         * @deprecated (Use root.fragment)
         */
        get: function () { return this.root.fragment; },
        enumerable: true,
        configurable: true
    });
    RouterStateSnapshot.prototype.toString = function () { return serializeNode(this._root); };
    return RouterStateSnapshot;
}(tree_1.Tree));
exports.RouterStateSnapshot = RouterStateSnapshot;
function setRouterStateSnapshot(state, node) {
    node.value._routerState = state;
    node.children.forEach(function (c) { return setRouterStateSnapshot(state, c); });
}
function serializeNode(node) {
    var c = node.children.length > 0 ? " { " + node.children.map(serializeNode).join(", ") + " } " : '';
    return "" + node.value + c;
}
/**
 * The expectation is that the activate route is created with the right set of parameters.
 * So we push new values into the observables only when they are not the initial values.
 * And we detect that by checking if the snapshot field is set.
 */
function advanceActivatedRoute(route) {
    if (route.snapshot) {
        if (!collection_1.shallowEqual(route.snapshot.queryParams, route._futureSnapshot.queryParams)) {
            route.queryParams.next(route._futureSnapshot.queryParams);
        }
        if (route.snapshot.fragment !== route._futureSnapshot.fragment) {
            route.fragment.next(route._futureSnapshot.fragment);
        }
        if (!collection_1.shallowEqual(route.snapshot.params, route._futureSnapshot.params)) {
            route.params.next(route._futureSnapshot.params);
            route.data.next(route._futureSnapshot.data);
        }
        if (!collection_1.shallowEqualArrays(route.snapshot.url, route._futureSnapshot.url)) {
            route.url.next(route._futureSnapshot.url);
        }
        route.snapshot = route._futureSnapshot;
    }
    else {
        route.snapshot = route._futureSnapshot;
        // this is for resolved data
        route.data.next(route._futureSnapshot.data);
    }
}
exports.advanceActivatedRoute = advanceActivatedRoute;
//# sourceMappingURL=router_state.js.map