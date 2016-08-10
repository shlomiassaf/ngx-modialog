/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
"use strict";
require('rxjs/add/operator/map');
require('rxjs/add/operator/mergeMap');
require('rxjs/add/operator/mergeAll');
require('rxjs/add/operator/reduce');
require('rxjs/add/operator/every');
var core_1 = require('@angular/core');
var Subject_1 = require('rxjs/Subject');
var from_1 = require('rxjs/observable/from');
var of_1 = require('rxjs/observable/of');
var apply_redirects_1 = require('./apply_redirects');
var config_1 = require('./config');
var create_router_state_1 = require('./create_router_state');
var create_url_tree_1 = require('./create_url_tree');
var recognize_1 = require('./recognize');
var resolve_1 = require('./resolve');
var router_config_loader_1 = require('./router_config_loader');
var router_outlet_map_1 = require('./router_outlet_map');
var router_state_1 = require('./router_state');
var shared_1 = require('./shared');
var url_tree_1 = require('./url_tree');
var collection_1 = require('./utils/collection');
/**
 * An event triggered when a navigation starts
 *
 * @stable
 */
var NavigationStart = (function () {
    function NavigationStart(id, url) {
        this.id = id;
        this.url = url;
    }
    NavigationStart.prototype.toString = function () { return "NavigationStart(id: " + this.id + ", url: '" + this.url + "')"; };
    return NavigationStart;
}());
exports.NavigationStart = NavigationStart;
/**
 * An event triggered when a navigation ends successfully
 *
 * @stable
 */
var NavigationEnd = (function () {
    function NavigationEnd(id, url, urlAfterRedirects) {
        this.id = id;
        this.url = url;
        this.urlAfterRedirects = urlAfterRedirects;
    }
    NavigationEnd.prototype.toString = function () {
        return "NavigationEnd(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "')";
    };
    return NavigationEnd;
}());
exports.NavigationEnd = NavigationEnd;
/**
 * An event triggered when a navigation is canceled
 *
 * @stable
 */
var NavigationCancel = (function () {
    function NavigationCancel(id, url) {
        this.id = id;
        this.url = url;
    }
    NavigationCancel.prototype.toString = function () { return "NavigationCancel(id: " + this.id + ", url: '" + this.url + "')"; };
    return NavigationCancel;
}());
exports.NavigationCancel = NavigationCancel;
/**
 * An event triggered when a navigation fails due to unexpected error
 *
 * @stable
 */
var NavigationError = (function () {
    function NavigationError(id, url, error) {
        this.id = id;
        this.url = url;
        this.error = error;
    }
    NavigationError.prototype.toString = function () {
        return "NavigationError(id: " + this.id + ", url: '" + this.url + "', error: " + this.error + ")";
    };
    return NavigationError;
}());
exports.NavigationError = NavigationError;
/**
 * An event triggered when routes are recognized
 *
 * @stable
 */
var RoutesRecognized = (function () {
    function RoutesRecognized(id, url, urlAfterRedirects, state) {
        this.id = id;
        this.url = url;
        this.urlAfterRedirects = urlAfterRedirects;
        this.state = state;
    }
    RoutesRecognized.prototype.toString = function () {
        return "RoutesRecognized(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")";
    };
    return RoutesRecognized;
}());
exports.RoutesRecognized = RoutesRecognized;
/**
 * The `Router` is responsible for mapping URLs to components.
 *
 * See {@link Routes} for more details and examples.
 *
 * @stable
 */
var Router = (function () {
    /**
     * Creates the router service.
     */
    function Router(rootComponentType, resolver, urlSerializer, outletMap, location, injector, loader, config) {
        this.rootComponentType = rootComponentType;
        this.resolver = resolver;
        this.urlSerializer = urlSerializer;
        this.outletMap = outletMap;
        this.location = location;
        this.injector = injector;
        this.navigationId = 0;
        /**
         * Indicates if at least one navigation happened.
         *
         * @experimental
         */
        this.navigated = false;
        this.resetConfig(config);
        this.routerEvents = new Subject_1.Subject();
        this.currentUrlTree = url_tree_1.createEmptyUrlTree();
        this.configLoader = new router_config_loader_1.RouterConfigLoader(loader);
        this.currentRouterState = router_state_1.createEmptyState(this.currentUrlTree, this.rootComponentType);
    }
    /**
     * Sets up the location change listener and performs the inital navigation
     */
    Router.prototype.initialNavigation = function () {
        this.setUpLocationChangeListener();
        this.navigateByUrl(this.location.path(true));
    };
    Object.defineProperty(Router.prototype, "routerState", {
        /**
         * Returns the current route state.
         */
        get: function () { return this.currentRouterState; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Router.prototype, "url", {
        /**
         * Returns the current url.
         */
        get: function () { return this.serializeUrl(this.currentUrlTree); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Router.prototype, "events", {
        /**
         * Returns an observable of route events
         */
        get: function () { return this.routerEvents; },
        enumerable: true,
        configurable: true
    });
    /**
     * Resets the configuration used for navigation and generating links.
     *
     * ### Usage
     *
     * ```
     * router.resetConfig([
     *  { path: 'team/:id', component: TeamCmp, children: [
     *    { path: 'simple', component: SimpleCmp },
     *    { path: 'user/:name', component: UserCmp }
     *  ] }
     * ]);
     * ```
     */
    Router.prototype.resetConfig = function (config) {
        config_1.validateConfig(config);
        this.config = config;
    };
    Router.prototype.ngOnDestroy = function () { this.dispose(); };
    /**
     * Disposes of the router.
     */
    Router.prototype.dispose = function () { this.locationSubscription.unsubscribe(); };
    /**
     * Applies an array of commands to the current url tree and creates
     * a new url tree.
     *
     * When given an activate route, applies the given commands starting from the route.
     * When not given a route, applies the given command starting from the root.
     *
     * ### Usage
     *
     * ```
     * // create /team/33/user/11
     * router.createUrlTree(['/team', 33, 'user', 11]);
     *
     * // create /team/33;expand=true/user/11
     * router.createUrlTree(['/team', 33, {expand: true}, 'user', 11]);
     *
     * // you can collapse static segments like this (this works only with the first passed-in value):
     * router.createUrlTree(['/team/33/user', userId]);
     *
     * If the first segment can contain slashes, and you do not want the router to split it, you
     * can do the following:
     *
     * router.createUrlTree([{segmentPath: '/one/two'}]);
     *
     * // create /team/33/(user/11//aux:chat)
     * router.createUrlTree(['/team', 33, {outlets: {primary: 'user/11', right: 'chat'}}]);
     *
     * // remove the right secondary node
     * router.createUrlTree(['/team', 33, {outlets: {primary: 'user/11', right: null}}]);
     *
     * // assuming the current url is `/team/33/user/11` and the route points to `user/11`
     *
     * // navigate to /team/33/user/11/details
     * router.createUrlTree(['details'], {relativeTo: route});
     *
     * // navigate to /team/33/user/22
     * router.createUrlTree(['../22'], {relativeTo: route});
     *
     * // navigate to /team/44/user/22
     * router.createUrlTree(['../../team/44/user/22'], {relativeTo: route});
     * ```
     */
    Router.prototype.createUrlTree = function (commands, _a) {
        var _b = _a === void 0 ? {} : _a, relativeTo = _b.relativeTo, queryParams = _b.queryParams, fragment = _b.fragment, preserveQueryParams = _b.preserveQueryParams, preserveFragment = _b.preserveFragment;
        var a = relativeTo ? relativeTo : this.routerState.root;
        var q = preserveQueryParams ? this.currentUrlTree.queryParams : queryParams;
        var f = preserveFragment ? this.currentUrlTree.fragment : fragment;
        return create_url_tree_1.createUrlTree(a, this.currentUrlTree, commands, q, f);
    };
    /**
     * Navigate based on the provided url. This navigation is always absolute.
     *
     * Returns a promise that:
     * - is resolved with 'true' when navigation succeeds
     * - is resolved with 'false' when navigation fails
     * - is rejected when an error happens
     *
     * ### Usage
     *
     * ```
     * router.navigateByUrl("/team/33/user/11");
     *
     * // Navigate without updating the URL
     * router.navigateByUrl("/team/33/user/11", { skipLocationChange: true });
     * ```
     *
     * In opposite to `navigate`, `navigateByUrl` takes a whole URL
     * and does not apply any delta to the current one.
     */
    Router.prototype.navigateByUrl = function (url, extras) {
        if (extras === void 0) { extras = { skipLocationChange: false }; }
        if (url instanceof url_tree_1.UrlTree) {
            return this.scheduleNavigation(url, extras);
        }
        else {
            var urlTree = this.urlSerializer.parse(url);
            return this.scheduleNavigation(urlTree, extras);
        }
    };
    /**
     * Navigate based on the provided array of commands and a starting point.
     * If no starting route is provided, the navigation is absolute.
     *
     * Returns a promise that:
     * - is resolved with 'true' when navigation succeeds
     * - is resolved with 'false' when navigation fails
     * - is rejected when an error happens
     *
     * ### Usage
     *
     * ```
     * router.navigate(['team', 33, 'team', '11], {relativeTo: route});
     *
     * // Navigate without updating the URL
     * router.navigate(['team', 33, 'team', '11], {relativeTo: route, skipLocationChange: true });
     * ```
     *
     * In opposite to `navigateByUrl`, `navigate` always takes a delta
     * that is applied to the current URL.
     */
    Router.prototype.navigate = function (commands, extras) {
        if (extras === void 0) { extras = { skipLocationChange: false }; }
        return this.scheduleNavigation(this.createUrlTree(commands, extras), extras);
    };
    /**
     * Serializes a {@link UrlTree} into a string.
     */
    Router.prototype.serializeUrl = function (url) { return this.urlSerializer.serialize(url); };
    /**
     * Parse a string into a {@link UrlTree}.
     */
    Router.prototype.parseUrl = function (url) { return this.urlSerializer.parse(url); };
    /**
     * Returns if the url is activated or not.
     */
    Router.prototype.isActive = function (url, exact) {
        if (url instanceof url_tree_1.UrlTree) {
            return url_tree_1.containsTree(this.currentUrlTree, url, exact);
        }
        else {
            var urlTree = this.urlSerializer.parse(url);
            return url_tree_1.containsTree(this.currentUrlTree, urlTree, exact);
        }
    };
    Router.prototype.scheduleNavigation = function (url, extras) {
        var _this = this;
        var id = ++this.navigationId;
        this.routerEvents.next(new NavigationStart(id, this.serializeUrl(url)));
        return Promise.resolve().then(function (_) { return _this.runNavigate(url, extras.skipLocationChange, id); });
    };
    Router.prototype.setUpLocationChangeListener = function () {
        var _this = this;
        // Zone.current.wrap is needed because of the issue with RxJS scheduler,
        // which does not work properly with zone.js in IE and Safari
        this.locationSubscription = this.location.subscribe(Zone.current.wrap(function (change) {
            var tree = _this.urlSerializer.parse(change['url']);
            // we fire multiple events for a single URL change
            // we should navigate only once
            return _this.currentUrlTree.toString() !== tree.toString() ?
                _this.scheduleNavigation(tree, change['pop']) :
                null;
        }));
    };
    Router.prototype.runNavigate = function (url, preventPushState, id) {
        var _this = this;
        if (id !== this.navigationId) {
            this.location.go(this.urlSerializer.serialize(this.currentUrlTree));
            this.routerEvents.next(new NavigationCancel(id, this.serializeUrl(url)));
            return Promise.resolve(false);
        }
        return new Promise(function (resolvePromise, rejectPromise) {
            var state;
            var navigationIsSuccessful;
            var preActivation;
            var appliedUrl;
            var storedState = _this.currentRouterState;
            var storedUrl = _this.currentUrlTree;
            apply_redirects_1.applyRedirects(_this.injector, _this.configLoader, url, _this.config)
                .mergeMap(function (u) {
                appliedUrl = u;
                return recognize_1.recognize(_this.rootComponentType, _this.config, appliedUrl, _this.serializeUrl(appliedUrl));
            })
                .mergeMap(function (newRouterStateSnapshot) {
                _this.routerEvents.next(new RoutesRecognized(id, _this.serializeUrl(url), _this.serializeUrl(appliedUrl), newRouterStateSnapshot));
                return resolve_1.resolve(_this.resolver, newRouterStateSnapshot);
            })
                .map(function (routerStateSnapshot) {
                return create_router_state_1.createRouterState(routerStateSnapshot, _this.currentRouterState);
            })
                .map(function (newState) {
                state = newState;
                preActivation =
                    new PreActivation(state.snapshot, _this.currentRouterState.snapshot, _this.injector);
                preActivation.traverse(_this.outletMap);
            })
                .mergeMap(function (_) {
                return preActivation.checkGuards();
            })
                .mergeMap(function (shouldActivate) {
                if (shouldActivate) {
                    return preActivation.resolveData().map(function () { return shouldActivate; });
                }
                else {
                    return of_1.of(shouldActivate);
                }
            })
                .forEach(function (shouldActivate) {
                if (!shouldActivate || id !== _this.navigationId) {
                    _this.routerEvents.next(new NavigationCancel(id, _this.serializeUrl(url)));
                    navigationIsSuccessful = false;
                    return;
                }
                _this.currentUrlTree = appliedUrl;
                _this.currentRouterState = state;
                new ActivateRoutes(state, storedState).activate(_this.outletMap);
                if (!preventPushState) {
                    var path = _this.urlSerializer.serialize(appliedUrl);
                    if (_this.location.isCurrentPathEqualTo(path)) {
                        _this.location.replaceState(path);
                    }
                    else {
                        _this.location.go(path);
                    }
                }
                navigationIsSuccessful = true;
            })
                .then(function () {
                _this.navigated = true;
                _this.routerEvents.next(new NavigationEnd(id, _this.serializeUrl(url), _this.serializeUrl(appliedUrl)));
                resolvePromise(navigationIsSuccessful);
            }, function (e) {
                _this.currentRouterState = storedState;
                _this.currentUrlTree = storedUrl;
                _this.routerEvents.next(new NavigationError(id, _this.serializeUrl(url), e));
                rejectPromise(e);
            });
        });
    };
    return Router;
}());
exports.Router = Router;
var CanActivate = (function () {
    function CanActivate(path) {
        this.path = path;
    }
    Object.defineProperty(CanActivate.prototype, "route", {
        get: function () { return this.path[this.path.length - 1]; },
        enumerable: true,
        configurable: true
    });
    return CanActivate;
}());
var CanDeactivate = (function () {
    function CanDeactivate(component, route) {
        this.component = component;
        this.route = route;
    }
    return CanDeactivate;
}());
var PreActivation = (function () {
    function PreActivation(future, curr, injector) {
        this.future = future;
        this.curr = curr;
        this.injector = injector;
        this.checks = [];
    }
    PreActivation.prototype.traverse = function (parentOutletMap) {
        var futureRoot = this.future._root;
        var currRoot = this.curr ? this.curr._root : null;
        this.traverseChildRoutes(futureRoot, currRoot, parentOutletMap, [futureRoot.value]);
    };
    PreActivation.prototype.checkGuards = function () {
        var _this = this;
        if (this.checks.length === 0)
            return of_1.of(true);
        return from_1.from(this.checks)
            .map(function (s) {
            if (s instanceof CanActivate) {
                return collection_1.andObservables(from_1.from([_this.runCanActivate(s.route), _this.runCanActivateChild(s.path)]));
            }
            else if (s instanceof CanDeactivate) {
                // workaround https://github.com/Microsoft/TypeScript/issues/7271
                var s2 = s;
                return _this.runCanDeactivate(s2.component, s2.route);
            }
            else {
                throw new Error('Cannot be reached');
            }
        })
            .mergeAll()
            .every(function (result) { return result === true; });
    };
    PreActivation.prototype.resolveData = function () {
        var _this = this;
        if (this.checks.length === 0)
            return of_1.of(null);
        return from_1.from(this.checks)
            .mergeMap(function (s) {
            if (s instanceof CanActivate) {
                return _this.runResolve(s.route);
            }
            else {
                return of_1.of(null);
            }
        })
            .reduce(function (_, __) { return _; });
    };
    PreActivation.prototype.traverseChildRoutes = function (futureNode, currNode, outletMap, futurePath) {
        var _this = this;
        var prevChildren = nodeChildrenAsMap(currNode);
        futureNode.children.forEach(function (c) {
            _this.traverseRoutes(c, prevChildren[c.value.outlet], outletMap, futurePath.concat([c.value]));
            delete prevChildren[c.value.outlet];
        });
        collection_1.forEach(prevChildren, function (v, k) { return _this.deactivateOutletAndItChildren(v, outletMap._outlets[k]); });
    };
    PreActivation.prototype.traverseRoutes = function (futureNode, currNode, parentOutletMap, futurePath) {
        var future = futureNode.value;
        var curr = currNode ? currNode.value : null;
        var outlet = parentOutletMap ? parentOutletMap._outlets[futureNode.value.outlet] : null;
        // reusing the node
        if (curr && future._routeConfig === curr._routeConfig) {
            if (!collection_1.shallowEqual(future.params, curr.params)) {
                this.checks.push(new CanDeactivate(outlet.component, curr), new CanActivate(futurePath));
            }
            // If we have a component, we need to go through an outlet.
            if (future.component) {
                this.traverseChildRoutes(futureNode, currNode, outlet ? outlet.outletMap : null, futurePath);
            }
            else {
                this.traverseChildRoutes(futureNode, currNode, parentOutletMap, futurePath);
            }
        }
        else {
            if (curr) {
                // if we had a normal route, we need to deactivate only that outlet.
                if (curr.component) {
                    this.deactivateOutletAndItChildren(curr, outlet);
                }
                else {
                    this.deactivateOutletMap(parentOutletMap);
                }
            }
            this.checks.push(new CanActivate(futurePath));
            // If we have a component, we need to go through an outlet.
            if (future.component) {
                this.traverseChildRoutes(futureNode, null, outlet ? outlet.outletMap : null, futurePath);
            }
            else {
                this.traverseChildRoutes(futureNode, null, parentOutletMap, futurePath);
            }
        }
    };
    PreActivation.prototype.deactivateOutletAndItChildren = function (route, outlet) {
        if (outlet && outlet.isActivated) {
            this.deactivateOutletMap(outlet.outletMap);
            this.checks.push(new CanDeactivate(outlet.component, route));
        }
    };
    PreActivation.prototype.deactivateOutletMap = function (outletMap) {
        var _this = this;
        collection_1.forEach(outletMap._outlets, function (v) {
            if (v.isActivated) {
                _this.deactivateOutletAndItChildren(v.activatedRoute.snapshot, v);
            }
        });
    };
    PreActivation.prototype.runCanActivate = function (future) {
        var _this = this;
        var canActivate = future._routeConfig ? future._routeConfig.canActivate : null;
        if (!canActivate || canActivate.length === 0)
            return of_1.of(true);
        var obs = from_1.from(canActivate).map(function (c) {
            var guard = _this.getToken(c, future, _this.future);
            if (guard.canActivate) {
                return collection_1.wrapIntoObservable(guard.canActivate(future, _this.future));
            }
            else {
                return collection_1.wrapIntoObservable(guard(future, _this.future));
            }
        });
        return collection_1.andObservables(obs);
    };
    PreActivation.prototype.runCanActivateChild = function (path) {
        var _this = this;
        var future = path[path.length - 1];
        var canActivateChildGuards = path.slice(0, path.length - 1)
            .reverse()
            .map(function (p) { return _this.extractCanActivateChild(p); })
            .filter(function (_) { return _ !== null; });
        return collection_1.andObservables(from_1.from(canActivateChildGuards).map(function (d) {
            var obs = from_1.from(d.guards).map(function (c) {
                var guard = _this.getToken(c, c.node, _this.future);
                if (guard.canActivateChild) {
                    return collection_1.wrapIntoObservable(guard.canActivateChild(future, _this.future));
                }
                else {
                    return collection_1.wrapIntoObservable(guard(future, _this.future));
                }
            });
            return collection_1.andObservables(obs);
        }));
    };
    PreActivation.prototype.extractCanActivateChild = function (p) {
        var canActivateChild = p._routeConfig ? p._routeConfig.canActivateChild : null;
        if (!canActivateChild || canActivateChild.length === 0)
            return null;
        return { node: p, guards: canActivateChild };
    };
    PreActivation.prototype.runCanDeactivate = function (component, curr) {
        var _this = this;
        var canDeactivate = curr && curr._routeConfig ? curr._routeConfig.canDeactivate : null;
        if (!canDeactivate || canDeactivate.length === 0)
            return of_1.of(true);
        return from_1.from(canDeactivate)
            .map(function (c) {
            var guard = _this.getToken(c, curr, _this.curr);
            if (guard.canDeactivate) {
                return collection_1.wrapIntoObservable(guard.canDeactivate(component, curr, _this.curr));
            }
            else {
                return collection_1.wrapIntoObservable(guard(component, curr, _this.curr));
            }
        })
            .mergeAll()
            .every(function (result) { return result === true; });
    };
    PreActivation.prototype.runResolve = function (future) {
        var resolve = future._resolve;
        return this.resolveNode(resolve.current, future).map(function (resolvedData) {
            resolve.resolvedData = resolvedData;
            future.data = collection_1.merge(future.data, resolve.flattenedResolvedData);
            return null;
        });
    };
    PreActivation.prototype.resolveNode = function (resolve, future) {
        var _this = this;
        return collection_1.waitForMap(resolve, function (k, v) {
            var resolver = _this.getToken(v, future, _this.future);
            return resolver.resolve ? collection_1.wrapIntoObservable(resolver.resolve(future, _this.future)) :
                collection_1.wrapIntoObservable(resolver(future, _this.future));
        });
    };
    PreActivation.prototype.getToken = function (token, snapshot, state) {
        var config = closestLoadedConfig(state, snapshot);
        var injector = config ? config.injector : this.injector;
        return injector.get(token);
    };
    return PreActivation;
}());
var ActivateRoutes = (function () {
    function ActivateRoutes(futureState, currState) {
        this.futureState = futureState;
        this.currState = currState;
    }
    ActivateRoutes.prototype.activate = function (parentOutletMap) {
        var futureRoot = this.futureState._root;
        var currRoot = this.currState ? this.currState._root : null;
        router_state_1.advanceActivatedRoute(this.futureState.root);
        this.activateChildRoutes(futureRoot, currRoot, parentOutletMap);
    };
    ActivateRoutes.prototype.activateChildRoutes = function (futureNode, currNode, outletMap) {
        var _this = this;
        var prevChildren = nodeChildrenAsMap(currNode);
        futureNode.children.forEach(function (c) {
            _this.activateRoutes(c, prevChildren[c.value.outlet], outletMap);
            delete prevChildren[c.value.outlet];
        });
        collection_1.forEach(prevChildren, function (v, k) { return _this.deactivateOutletAndItChildren(outletMap._outlets[k]); });
    };
    ActivateRoutes.prototype.activateRoutes = function (futureNode, currNode, parentOutletMap) {
        var future = futureNode.value;
        var curr = currNode ? currNode.value : null;
        // reusing the node
        if (future === curr) {
            // advance the route to push the parameters
            router_state_1.advanceActivatedRoute(future);
            // If we have a normal route, we need to go through an outlet.
            if (future.component) {
                var outlet = getOutlet(parentOutletMap, futureNode.value);
                this.activateChildRoutes(futureNode, currNode, outlet.outletMap);
            }
            else {
                this.activateChildRoutes(futureNode, currNode, parentOutletMap);
            }
        }
        else {
            if (curr) {
                // if we had a normal route, we need to deactivate only that outlet.
                if (curr.component) {
                    var outlet = getOutlet(parentOutletMap, futureNode.value);
                    this.deactivateOutletAndItChildren(outlet);
                }
                else {
                    this.deactivateOutletMap(parentOutletMap);
                }
            }
            // if we have a normal route, we need to advance the route
            // and place the component into the outlet. After that recurse.
            if (future.component) {
                router_state_1.advanceActivatedRoute(future);
                var outlet = getOutlet(parentOutletMap, futureNode.value);
                var outletMap = new router_outlet_map_1.RouterOutletMap();
                this.placeComponentIntoOutlet(outletMap, future, outlet);
                this.activateChildRoutes(futureNode, null, outletMap);
            }
            else {
                router_state_1.advanceActivatedRoute(future);
                this.activateChildRoutes(futureNode, null, parentOutletMap);
            }
        }
    };
    ActivateRoutes.prototype.placeComponentIntoOutlet = function (outletMap, future, outlet) {
        var resolved = [{ provide: router_state_1.ActivatedRoute, useValue: future }, {
                provide: router_outlet_map_1.RouterOutletMap,
                useValue: outletMap
            }];
        var config = closestLoadedConfig(this.futureState.snapshot, future.snapshot);
        var loadedFactoryResolver = null;
        var loadedInjector = null;
        if (config) {
            loadedFactoryResolver = config.factoryResolver;
            loadedInjector = config.injector;
            resolved.push({ provide: core_1.ComponentFactoryResolver, useValue: loadedFactoryResolver });
        }
        ;
        outlet.activate(future, loadedFactoryResolver, loadedInjector, core_1.ReflectiveInjector.resolve(resolved), outletMap);
    };
    ActivateRoutes.prototype.deactivateOutletAndItChildren = function (outlet) {
        if (outlet && outlet.isActivated) {
            this.deactivateOutletMap(outlet.outletMap);
            outlet.deactivate();
        }
    };
    ActivateRoutes.prototype.deactivateOutletMap = function (outletMap) {
        var _this = this;
        collection_1.forEach(outletMap._outlets, function (v) { return _this.deactivateOutletAndItChildren(v); });
    };
    return ActivateRoutes;
}());
function closestLoadedConfig(state, snapshot) {
    var b = state.pathFromRoot(snapshot).filter(function (s) {
        var config = s._routeConfig;
        return config && config._loadedConfig && s !== snapshot;
    });
    return b.length > 0 ? b[b.length - 1]._routeConfig._loadedConfig : null;
}
function nodeChildrenAsMap(node) {
    return node ? node.children.reduce(function (m, c) {
        m[c.value.outlet] = c;
        return m;
    }, {}) : {};
}
function getOutlet(outletMap, route) {
    var outlet = outletMap._outlets[route.outlet];
    if (!outlet) {
        var componentName = route.component.name;
        if (route.outlet === shared_1.PRIMARY_OUTLET) {
            throw new Error("Cannot find primary outlet to load '" + componentName + "'");
        }
        else {
            throw new Error("Cannot find the outlet " + route.outlet + " to load '" + componentName + "'");
        }
    }
    return outlet;
}
//# sourceMappingURL=router.js.map