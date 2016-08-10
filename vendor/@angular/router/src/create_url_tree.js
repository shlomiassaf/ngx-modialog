/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
"use strict";
var shared_1 = require('./shared');
var url_tree_1 = require('./url_tree');
var collection_1 = require('./utils/collection');
function createUrlTree(route, urlTree, commands, queryParams, fragment) {
    if (commands.length === 0) {
        return tree(urlTree.root, urlTree.root, urlTree, queryParams, fragment);
    }
    var normalizedCommands = normalizeCommands(commands);
    validateCommands(normalizedCommands);
    if (navigateToRoot(normalizedCommands)) {
        return tree(urlTree.root, new url_tree_1.UrlSegmentGroup([], {}), urlTree, queryParams, fragment);
    }
    var startingPosition = findStartingPosition(normalizedCommands, urlTree, route);
    var segmentGroup = startingPosition.processChildren ?
        updateSegmentGroupChildren(startingPosition.segmentGroup, startingPosition.index, normalizedCommands.commands) :
        updateSegmentGroup(startingPosition.segmentGroup, startingPosition.index, normalizedCommands.commands);
    return tree(startingPosition.segmentGroup, segmentGroup, urlTree, queryParams, fragment);
}
exports.createUrlTree = createUrlTree;
function validateCommands(n) {
    if (n.isAbsolute && n.commands.length > 0 && isMatrixParams(n.commands[0])) {
        throw new Error('Root segment cannot have matrix parameters');
    }
    var c = n.commands.filter(function (c) { return typeof c === 'object' && c.outlets !== undefined; });
    if (c.length > 0 && c[0] !== n.commands[n.commands.length - 1]) {
        throw new Error('{outlets:{}} has to be the last command');
    }
}
function isMatrixParams(command) {
    return typeof command === 'object' && command.outlets === undefined &&
        command.segmentPath === undefined;
}
function tree(oldSegmentGroup, newSegmentGroup, urlTree, queryParams, fragment) {
    if (urlTree.root === oldSegmentGroup) {
        return new url_tree_1.UrlTree(newSegmentGroup, stringify(queryParams), fragment);
    }
    else {
        return new url_tree_1.UrlTree(replaceSegment(urlTree.root, oldSegmentGroup, newSegmentGroup), stringify(queryParams), fragment);
    }
}
function replaceSegment(current, oldSegment, newSegment) {
    var children = {};
    collection_1.forEach(current.children, function (c, outletName) {
        if (c === oldSegment) {
            children[outletName] = newSegment;
        }
        else {
            children[outletName] = replaceSegment(c, oldSegment, newSegment);
        }
    });
    return new url_tree_1.UrlSegmentGroup(current.segments, children);
}
function navigateToRoot(normalizedChange) {
    return normalizedChange.isAbsolute && normalizedChange.commands.length === 1 &&
        normalizedChange.commands[0] == '/';
}
var NormalizedNavigationCommands = (function () {
    function NormalizedNavigationCommands(isAbsolute, numberOfDoubleDots, commands) {
        this.isAbsolute = isAbsolute;
        this.numberOfDoubleDots = numberOfDoubleDots;
        this.commands = commands;
    }
    return NormalizedNavigationCommands;
}());
function normalizeCommands(commands) {
    if ((typeof commands[0] === 'string') && commands.length === 1 && commands[0] == '/') {
        return new NormalizedNavigationCommands(true, 0, commands);
    }
    var numberOfDoubleDots = 0;
    var isAbsolute = false;
    var res = [];
    var _loop_1 = function(i) {
        var c = commands[i];
        if (typeof c === 'object' && c.outlets !== undefined) {
            var r_1 = {};
            collection_1.forEach(c.outlets, function (commands, name) {
                if (typeof commands === 'string') {
                    r_1[name] = commands.split('/');
                }
                else {
                    r_1[name] = commands;
                }
            });
            res.push({ outlets: r_1 });
            return "continue";
        }
        if (typeof c === 'object' && c.segmentPath !== undefined) {
            res.push(c.segmentPath);
            return "continue";
        }
        if (!(typeof c === 'string')) {
            res.push(c);
            return "continue";
        }
        if (i === 0) {
            var parts = c.split('/');
            for (var j = 0; j < parts.length; ++j) {
                var cc = parts[j];
                if (j == 0 && cc == '.') {
                }
                else if (j == 0 && cc == '') {
                    isAbsolute = true;
                }
                else if (cc == '..') {
                    numberOfDoubleDots++;
                }
                else if (cc != '') {
                    res.push(cc);
                }
            }
        }
        else {
            res.push(c);
        }
    };
    for (var i = 0; i < commands.length; ++i) {
        _loop_1(i);
    }
    return new NormalizedNavigationCommands(isAbsolute, numberOfDoubleDots, res);
}
var Position = (function () {
    function Position(segmentGroup, processChildren, index) {
        this.segmentGroup = segmentGroup;
        this.processChildren = processChildren;
        this.index = index;
    }
    return Position;
}());
function findStartingPosition(normalizedChange, urlTree, route) {
    if (normalizedChange.isAbsolute) {
        return new Position(urlTree.root, true, 0);
    }
    else if (route.snapshot._lastPathIndex === -1) {
        return new Position(route.snapshot._urlSegment, true, 0);
    }
    else if (route.snapshot._lastPathIndex + 1 - normalizedChange.numberOfDoubleDots >= 0) {
        return new Position(route.snapshot._urlSegment, false, route.snapshot._lastPathIndex + 1 - normalizedChange.numberOfDoubleDots);
    }
    else {
        throw new Error('Invalid number of \'../\'');
    }
}
function getPath(command) {
    return "" + command;
}
function getOutlets(commands) {
    if (!(typeof commands[0] === 'object'))
        return (_a = {}, _a[shared_1.PRIMARY_OUTLET] = commands, _a);
    if (commands[0].outlets === undefined)
        return (_b = {}, _b[shared_1.PRIMARY_OUTLET] = commands, _b);
    return commands[0].outlets;
    var _a, _b;
}
function updateSegmentGroup(segmentGroup, startIndex, commands) {
    if (!segmentGroup) {
        segmentGroup = new url_tree_1.UrlSegmentGroup([], {});
    }
    if (segmentGroup.segments.length === 0 && segmentGroup.hasChildren()) {
        return updateSegmentGroupChildren(segmentGroup, startIndex, commands);
    }
    var m = prefixedWith(segmentGroup, startIndex, commands);
    var slicedCommands = commands.slice(m.lastIndex);
    if (m.match && slicedCommands.length === 0) {
        return new url_tree_1.UrlSegmentGroup(segmentGroup.segments, {});
    }
    else if (m.match && !segmentGroup.hasChildren()) {
        return createNewSegmentGroup(segmentGroup, startIndex, commands);
    }
    else if (m.match) {
        return updateSegmentGroupChildren(segmentGroup, 0, slicedCommands);
    }
    else {
        return createNewSegmentGroup(segmentGroup, startIndex, commands);
    }
}
function updateSegmentGroupChildren(segmentGroup, startIndex, commands) {
    if (commands.length === 0) {
        return new url_tree_1.UrlSegmentGroup(segmentGroup.segments, {});
    }
    else {
        var outlets_1 = getOutlets(commands);
        var children_1 = {};
        collection_1.forEach(outlets_1, function (commands, outlet) {
            if (commands !== null) {
                children_1[outlet] = updateSegmentGroup(segmentGroup.children[outlet], startIndex, commands);
            }
        });
        collection_1.forEach(segmentGroup.children, function (child, childOutlet) {
            if (outlets_1[childOutlet] === undefined) {
                children_1[childOutlet] = child;
            }
        });
        return new url_tree_1.UrlSegmentGroup(segmentGroup.segments, children_1);
    }
}
function prefixedWith(segmentGroup, startIndex, commands) {
    var currentCommandIndex = 0;
    var currentPathIndex = startIndex;
    var noMatch = { match: false, lastIndex: 0 };
    while (currentPathIndex < segmentGroup.segments.length) {
        if (currentCommandIndex >= commands.length)
            return noMatch;
        var path = segmentGroup.segments[currentPathIndex];
        var curr = getPath(commands[currentCommandIndex]);
        var next = currentCommandIndex < commands.length - 1 ? commands[currentCommandIndex + 1] : null;
        if (curr && next && (typeof next === 'object') && next.outlets === undefined) {
            if (!compare(curr, next, path))
                return noMatch;
            currentCommandIndex += 2;
        }
        else {
            if (!compare(curr, {}, path))
                return noMatch;
            currentCommandIndex++;
        }
        currentPathIndex++;
    }
    return { match: true, lastIndex: currentCommandIndex };
}
function createNewSegmentGroup(segmentGroup, startIndex, commands) {
    var paths = segmentGroup.segments.slice(0, startIndex);
    var i = 0;
    while (i < commands.length) {
        if (typeof commands[i] === 'object' && commands[i].outlets !== undefined) {
            var children = createNewSegmentChldren(commands[i].outlets);
            return new url_tree_1.UrlSegmentGroup(paths, children);
        }
        // if we start with an object literal, we need to reuse the path part from the segment
        if (i === 0 && (typeof commands[0] === 'object')) {
            var p = segmentGroup.segments[startIndex];
            paths.push(new url_tree_1.UrlSegment(p.path, commands[0]));
            i++;
            continue;
        }
        var curr = getPath(commands[i]);
        var next = (i < commands.length - 1) ? commands[i + 1] : null;
        if (curr && next && (typeof next === 'object')) {
            paths.push(new url_tree_1.UrlSegment(curr, stringify(next)));
            i += 2;
        }
        else {
            paths.push(new url_tree_1.UrlSegment(curr, {}));
            i++;
        }
    }
    return new url_tree_1.UrlSegmentGroup(paths, {});
}
function createNewSegmentChldren(outlets) {
    var children = {};
    collection_1.forEach(outlets, function (commands, outlet) {
        if (commands !== null) {
            children[outlet] = createNewSegmentGroup(new url_tree_1.UrlSegmentGroup([], {}), 0, commands);
        }
    });
    return children;
}
function stringify(params) {
    var res = {};
    collection_1.forEach(params, function (v, k) { return res[k] = "" + v; });
    return res;
}
function compare(path, params, segment) {
    return path == segment.path && collection_1.shallowEqual(params, segment.parameters);
}
//# sourceMappingURL=create_url_tree.js.map