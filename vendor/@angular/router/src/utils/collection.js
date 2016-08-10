/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
"use strict";
require('rxjs/add/operator/concatAll');
require('rxjs/add/operator/last');
var Observable_1 = require('rxjs/Observable');
var fromPromise_1 = require('rxjs/observable/fromPromise');
var of_1 = require('rxjs/observable/of');
var shared_1 = require('../shared');
function shallowEqualArrays(a, b) {
    if (a.length !== b.length)
        return false;
    for (var i = 0; i < a.length; ++i) {
        if (!shallowEqual(a[i], b[i]))
            return false;
    }
    return true;
}
exports.shallowEqualArrays = shallowEqualArrays;
function shallowEqual(a, b) {
    var k1 = Object.keys(a);
    var k2 = Object.keys(b);
    if (k1.length != k2.length) {
        return false;
    }
    var key;
    for (var i = 0; i < k1.length; i++) {
        key = k1[i];
        if (a[key] !== b[key]) {
            return false;
        }
    }
    return true;
}
exports.shallowEqual = shallowEqual;
function flatten(a) {
    var target = [];
    for (var i = 0; i < a.length; ++i) {
        for (var j = 0; j < a[i].length; ++j) {
            target.push(a[i][j]);
        }
    }
    return target;
}
exports.flatten = flatten;
function first(a) {
    return a.length > 0 ? a[0] : null;
}
exports.first = first;
function last(a) {
    return a.length > 0 ? a[a.length - 1] : null;
}
exports.last = last;
function and(bools) {
    return bools.reduce(function (a, b) { return a && b; }, true);
}
exports.and = and;
function merge(m1, m2) {
    var m = {};
    for (var attr in m1) {
        if (m1.hasOwnProperty(attr)) {
            m[attr] = m1[attr];
        }
    }
    for (var attr in m2) {
        if (m2.hasOwnProperty(attr)) {
            m[attr] = m2[attr];
        }
    }
    return m;
}
exports.merge = merge;
function forEach(map, callback) {
    for (var prop in map) {
        if (map.hasOwnProperty(prop)) {
            callback(map[prop], prop);
        }
    }
}
exports.forEach = forEach;
function waitForMap(obj, fn) {
    var waitFor = [];
    var res = {};
    forEach(obj, function (a, k) {
        if (k === shared_1.PRIMARY_OUTLET) {
            waitFor.push(fn(k, a).map(function (_) {
                res[k] = _;
                return _;
            }));
        }
    });
    forEach(obj, function (a, k) {
        if (k !== shared_1.PRIMARY_OUTLET) {
            waitFor.push(fn(k, a).map(function (_) {
                res[k] = _;
                return _;
            }));
        }
    });
    if (waitFor.length > 0) {
        return of_1.of.apply(void 0, waitFor).concatAll().last().map(function (last) { return res; });
    }
    else {
        return of_1.of(res);
    }
}
exports.waitForMap = waitForMap;
function andObservables(observables) {
    return observables.mergeAll().every(function (result) { return result === true; });
}
exports.andObservables = andObservables;
function wrapIntoObservable(value) {
    if (value instanceof Observable_1.Observable) {
        return value;
    }
    else if (value instanceof Promise) {
        return fromPromise_1.fromPromise(value);
    }
    else {
        return of_1.of(value);
    }
}
exports.wrapIntoObservable = wrapIntoObservable;
//# sourceMappingURL=collection.js.map