/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
"use strict";
require('rxjs/add/operator/first');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/concatAll');
var Observable_1 = require('rxjs/Observable');
var from_1 = require('rxjs/observable/from');
var of_1 = require('rxjs/observable/of');
var EmptyError_1 = require('rxjs/util/EmptyError');
var router_config_loader_1 = require('./router_config_loader');
var shared_1 = require('./shared');
var url_tree_1 = require('./url_tree');
var collection_1 = require('./utils/collection');
var NoMatch = (function () {
    function NoMatch(segmentGroup) {
        if (segmentGroup === void 0) { segmentGroup = null; }
        this.segmentGroup = segmentGroup;
    }
    return NoMatch;
}());
var AbsoluteRedirect = (function () {
    function AbsoluteRedirect(segments) {
        this.segments = segments;
    }
    return AbsoluteRedirect;
}());
function noMatch(segmentGroup) {
    return new Observable_1.Observable(function (obs) { return obs.error(new NoMatch(segmentGroup)); });
}
function absoluteRedirect(segments) {
    return new Observable_1.Observable(function (obs) { return obs.error(new AbsoluteRedirect(segments)); });
}
function canLoadFails(route) {
    return new Observable_1.Observable(function (obs) { return obs.error(new Error("Cannot load children because the guard of the route \"path: '" + route.path + "'\" returned false")); });
}
function applyRedirects(injector, configLoader, urlTree, config) {
    return new ApplyRedirects(injector, configLoader, urlTree, config).apply();
}
exports.applyRedirects = applyRedirects;
var ApplyRedirects = (function () {
    function ApplyRedirects(injector, configLoader, urlTree, config) {
        this.injector = injector;
        this.configLoader = configLoader;
        this.urlTree = urlTree;
        this.config = config;
        this.allowRedirects = true;
    }
    ApplyRedirects.prototype.apply = function () {
        var _this = this;
        return this.expandSegmentGroup(this.injector, this.config, this.urlTree.root, shared_1.PRIMARY_OUTLET)
            .map(function (rootSegmentGroup) { return _this.createUrlTree(rootSegmentGroup); })
            .catch(function (e) {
            if (e instanceof AbsoluteRedirect) {
                // after an absolute redirect we do not apply any more redirects!
                _this.allowRedirects = false;
                var group = new url_tree_1.UrlSegmentGroup([], (_a = {}, _a[shared_1.PRIMARY_OUTLET] = new url_tree_1.UrlSegmentGroup(e.segments, {}), _a));
                // we need to run matching, so we can fetch all lazy-loaded modules
                return _this.match(group);
            }
            else if (e instanceof NoMatch) {
                throw _this.noMatchError(e);
            }
            else {
                throw e;
            }
            var _a;
        });
    };
    ApplyRedirects.prototype.match = function (segmentGroup) {
        var _this = this;
        return this.expandSegmentGroup(this.injector, this.config, segmentGroup, shared_1.PRIMARY_OUTLET)
            .map(function (rootSegmentGroup) { return _this.createUrlTree(rootSegmentGroup); })
            .catch(function (e) {
            if (e instanceof NoMatch) {
                throw _this.noMatchError(e);
            }
            else {
                throw e;
            }
        });
    };
    ApplyRedirects.prototype.noMatchError = function (e) {
        return new Error("Cannot match any routes: '" + e.segmentGroup + "'");
    };
    ApplyRedirects.prototype.createUrlTree = function (rootCandidate) {
        var root = rootCandidate.segments.length > 0 ?
            new url_tree_1.UrlSegmentGroup([], (_a = {}, _a[shared_1.PRIMARY_OUTLET] = rootCandidate, _a)) :
            rootCandidate;
        return new url_tree_1.UrlTree(root, this.urlTree.queryParams, this.urlTree.fragment);
        var _a;
    };
    ApplyRedirects.prototype.expandSegmentGroup = function (injector, routes, segmentGroup, outlet) {
        if (segmentGroup.segments.length === 0 && segmentGroup.hasChildren()) {
            return this.expandChildren(injector, routes, segmentGroup)
                .map(function (children) { return new url_tree_1.UrlSegmentGroup([], children); });
        }
        else {
            return this.expandSegment(injector, segmentGroup, routes, segmentGroup.segments, outlet, true);
        }
    };
    ApplyRedirects.prototype.expandChildren = function (injector, routes, segmentGroup) {
        var _this = this;
        return collection_1.waitForMap(segmentGroup.children, function (childOutlet, child) { return _this.expandSegmentGroup(injector, routes, child, childOutlet); });
    };
    ApplyRedirects.prototype.expandSegment = function (injector, segmentGroup, routes, segments, outlet, allowRedirects) {
        var _this = this;
        var processRoutes = of_1.of.apply(void 0, routes)
            .map(function (r) {
            return _this
                .expandSegmentAgainstRoute(injector, segmentGroup, routes, r, segments, outlet, allowRedirects)
                .catch(function (e) {
                if (e instanceof NoMatch)
                    return of_1.of(null);
                else
                    throw e;
            });
        })
            .concatAll();
        return processRoutes.first(function (s) { return !!s; }).catch(function (e, _) {
            if (e instanceof EmptyError_1.EmptyError) {
                throw new NoMatch(segmentGroup);
            }
            else {
                throw e;
            }
        });
    };
    ApplyRedirects.prototype.expandSegmentAgainstRoute = function (injector, segmentGroup, routes, route, paths, outlet, allowRedirects) {
        if (getOutlet(route) !== outlet)
            return noMatch(segmentGroup);
        if (route.redirectTo !== undefined && !(allowRedirects && this.allowRedirects))
            return noMatch(segmentGroup);
        if (route.redirectTo === undefined) {
            return this.matchSegmentAgainstRoute(injector, segmentGroup, route, paths);
        }
        else {
            return this.expandSegmentAgainstRouteUsingRedirect(injector, segmentGroup, routes, route, paths, outlet);
        }
    };
    ApplyRedirects.prototype.expandSegmentAgainstRouteUsingRedirect = function (injector, segmentGroup, routes, route, segments, outlet) {
        if (route.path === '**') {
            return this.expandWildCardWithParamsAgainstRouteUsingRedirect(route);
        }
        else {
            return this.expandRegularSegmentAgainstRouteUsingRedirect(injector, segmentGroup, routes, route, segments, outlet);
        }
    };
    ApplyRedirects.prototype.expandWildCardWithParamsAgainstRouteUsingRedirect = function (route) {
        var newSegments = applyRedirectCommands([], route.redirectTo, {});
        if (route.redirectTo.startsWith('/')) {
            return absoluteRedirect(newSegments);
        }
        else {
            return of_1.of(new url_tree_1.UrlSegmentGroup(newSegments, {}));
        }
    };
    ApplyRedirects.prototype.expandRegularSegmentAgainstRouteUsingRedirect = function (injector, segmentGroup, routes, route, segments, outlet) {
        var _a = match(segmentGroup, route, segments), matched = _a.matched, consumedSegments = _a.consumedSegments, lastChild = _a.lastChild, positionalParamSegments = _a.positionalParamSegments;
        if (!matched)
            return noMatch(segmentGroup);
        var newSegments = applyRedirectCommands(consumedSegments, route.redirectTo, positionalParamSegments);
        if (route.redirectTo.startsWith('/')) {
            return absoluteRedirect(newSegments);
        }
        else {
            return this.expandSegment(injector, segmentGroup, routes, newSegments.concat(segments.slice(lastChild)), outlet, false);
        }
    };
    ApplyRedirects.prototype.matchSegmentAgainstRoute = function (injector, rawSegmentGroup, route, segments) {
        var _this = this;
        if (route.path === '**') {
            return of_1.of(new url_tree_1.UrlSegmentGroup(segments, {}));
        }
        else {
            var _a = match(rawSegmentGroup, route, segments), matched = _a.matched, consumedSegments_1 = _a.consumedSegments, lastChild = _a.lastChild;
            if (!matched)
                return noMatch(rawSegmentGroup);
            var rawSlicedSegments_1 = segments.slice(lastChild);
            return this.getChildConfig(injector, route).mergeMap(function (routerConfig) {
                var childInjector = routerConfig.injector;
                var childConfig = routerConfig.routes;
                var _a = split(rawSegmentGroup, consumedSegments_1, rawSlicedSegments_1, childConfig), segmentGroup = _a.segmentGroup, slicedSegments = _a.slicedSegments;
                if (slicedSegments.length === 0 && segmentGroup.hasChildren()) {
                    return _this.expandChildren(childInjector, childConfig, segmentGroup)
                        .map(function (children) { return new url_tree_1.UrlSegmentGroup(consumedSegments_1, children); });
                }
                else if (childConfig.length === 0 && slicedSegments.length === 0) {
                    return of_1.of(new url_tree_1.UrlSegmentGroup(consumedSegments_1, {}));
                }
                else {
                    return _this
                        .expandSegment(childInjector, segmentGroup, childConfig, slicedSegments, shared_1.PRIMARY_OUTLET, true)
                        .map(function (cs) { return new url_tree_1.UrlSegmentGroup(consumedSegments_1.concat(cs.segments), cs.children); });
                }
            });
        }
    };
    ApplyRedirects.prototype.getChildConfig = function (injector, route) {
        var _this = this;
        if (route.children) {
            return of_1.of(new router_config_loader_1.LoadedRouterConfig(route.children, injector, null));
        }
        else if (route.loadChildren) {
            return runGuards(injector, route).mergeMap(function (shouldLoad) {
                if (shouldLoad) {
                    return _this.configLoader.load(injector, route.loadChildren).map(function (r) {
                        route._loadedConfig = r;
                        return r;
                    });
                }
                else {
                    return canLoadFails(route);
                }
            });
        }
        else {
            return of_1.of(new router_config_loader_1.LoadedRouterConfig([], injector, null));
        }
    };
    return ApplyRedirects;
}());
function runGuards(injector, route) {
    var canLoad = route.canLoad;
    if (!canLoad || canLoad.length === 0)
        return of_1.of(true);
    var obs = from_1.from(canLoad).map(function (c) {
        var guard = injector.get(c);
        if (guard.canLoad) {
            return collection_1.wrapIntoObservable(guard.canLoad(route));
        }
        else {
            return collection_1.wrapIntoObservable(guard(route));
        }
    });
    return collection_1.andObservables(obs);
}
function match(segmentGroup, route, segments) {
    var noMatch = { matched: false, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
    if (route.path === '') {
        if ((route.terminal || route.pathMatch === 'full') &&
            (segmentGroup.hasChildren() || segments.length > 0)) {
            return { matched: false, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
        }
        else {
            return { matched: true, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
        }
    }
    var path = route.path;
    var parts = path.split('/');
    var positionalParamSegments = {};
    var consumedSegments = [];
    var currentIndex = 0;
    for (var i = 0; i < parts.length; ++i) {
        if (currentIndex >= segments.length)
            return noMatch;
        var current = segments[currentIndex];
        var p = parts[i];
        var isPosParam = p.startsWith(':');
        if (!isPosParam && p !== current.path)
            return noMatch;
        if (isPosParam) {
            positionalParamSegments[p.substring(1)] = current;
        }
        consumedSegments.push(current);
        currentIndex++;
    }
    if (route.terminal && (segmentGroup.hasChildren() || currentIndex < segments.length)) {
        return { matched: false, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
    }
    return { matched: true, consumedSegments: consumedSegments, lastChild: currentIndex, positionalParamSegments: positionalParamSegments };
}
function applyRedirectCommands(segments, redirectTo, posParams) {
    var r = redirectTo.startsWith('/') ? redirectTo.substring(1) : redirectTo;
    if (r === '') {
        return [];
    }
    else {
        return createSegments(redirectTo, r.split('/'), segments, posParams);
    }
}
function createSegments(redirectTo, parts, segments, posParams) {
    return parts.map(function (p) { return p.startsWith(':') ? findPosParam(p, posParams, redirectTo) :
        findOrCreateSegment(p, segments); });
}
function findPosParam(part, posParams, redirectTo) {
    var paramName = part.substring(1);
    var pos = posParams[paramName];
    if (!pos)
        throw new Error("Cannot redirect to '" + redirectTo + "'. Cannot find '" + part + "'.");
    return pos;
}
function findOrCreateSegment(part, segments) {
    var idx = 0;
    for (var _i = 0, segments_1 = segments; _i < segments_1.length; _i++) {
        var s = segments_1[_i];
        if (s.path === part) {
            segments.splice(idx);
            return s;
        }
        idx++;
    }
    return new url_tree_1.UrlSegment(part, {});
}
function split(segmentGroup, consumedSegments, slicedSegments, config) {
    if (slicedSegments.length > 0 &&
        containsEmptyPathRedirectsWithNamedOutlets(segmentGroup, slicedSegments, config)) {
        var s = new url_tree_1.UrlSegmentGroup(consumedSegments, createChildrenForEmptySegments(config, new url_tree_1.UrlSegmentGroup(slicedSegments, segmentGroup.children)));
        return { segmentGroup: mergeTrivialChildren(s), slicedSegments: [] };
    }
    else if (slicedSegments.length === 0 &&
        containsEmptyPathRedirects(segmentGroup, slicedSegments, config)) {
        var s = new url_tree_1.UrlSegmentGroup(segmentGroup.segments, addEmptySegmentsToChildrenIfNeeded(segmentGroup, slicedSegments, config, segmentGroup.children));
        return { segmentGroup: mergeTrivialChildren(s), slicedSegments: slicedSegments };
    }
    else {
        return { segmentGroup: segmentGroup, slicedSegments: slicedSegments };
    }
}
function mergeTrivialChildren(s) {
    if (s.numberOfChildren === 1 && s.children[shared_1.PRIMARY_OUTLET]) {
        var c = s.children[shared_1.PRIMARY_OUTLET];
        return new url_tree_1.UrlSegmentGroup(s.segments.concat(c.segments), c.children);
    }
    else {
        return s;
    }
}
function addEmptySegmentsToChildrenIfNeeded(segmentGroup, slicedSegments, routes, children) {
    var res = {};
    for (var _i = 0, routes_1 = routes; _i < routes_1.length; _i++) {
        var r = routes_1[_i];
        if (emptyPathRedirect(segmentGroup, slicedSegments, r) && !children[getOutlet(r)]) {
            res[getOutlet(r)] = new url_tree_1.UrlSegmentGroup([], {});
        }
    }
    return collection_1.merge(children, res);
}
function createChildrenForEmptySegments(routes, primarySegmentGroup) {
    var res = {};
    res[shared_1.PRIMARY_OUTLET] = primarySegmentGroup;
    for (var _i = 0, routes_2 = routes; _i < routes_2.length; _i++) {
        var r = routes_2[_i];
        if (r.path === '' && getOutlet(r) !== shared_1.PRIMARY_OUTLET) {
            res[getOutlet(r)] = new url_tree_1.UrlSegmentGroup([], {});
        }
    }
    return res;
}
function containsEmptyPathRedirectsWithNamedOutlets(segmentGroup, slicedSegments, routes) {
    return routes
        .filter(function (r) { return emptyPathRedirect(segmentGroup, slicedSegments, r) &&
        getOutlet(r) !== shared_1.PRIMARY_OUTLET; })
        .length > 0;
}
function containsEmptyPathRedirects(segmentGroup, slicedSegments, routes) {
    return routes.filter(function (r) { return emptyPathRedirect(segmentGroup, slicedSegments, r); }).length > 0;
}
function emptyPathRedirect(segmentGroup, slicedSegments, r) {
    if ((segmentGroup.hasChildren() || slicedSegments.length > 0) &&
        (r.terminal || r.pathMatch === 'full'))
        return false;
    return r.path === '' && r.redirectTo !== undefined;
}
function getOutlet(route) {
    return route.outlet ? route.outlet : shared_1.PRIMARY_OUTLET;
}
//# sourceMappingURL=apply_redirects.js.map