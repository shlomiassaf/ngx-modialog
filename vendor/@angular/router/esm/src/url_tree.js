/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { PRIMARY_OUTLET } from './shared';
import { forEach, shallowEqual } from './utils/collection';
export function createEmptyUrlTree() {
    return new UrlTree(new UrlSegmentGroup([], {}), {}, null);
}
export function containsTree(container, containee, exact) {
    if (exact) {
        return equalSegmentGroups(container.root, containee.root);
    }
    else {
        return containsSegmentGroup(container.root, containee.root);
    }
}
function equalSegmentGroups(container, containee) {
    if (!equalPath(container.segments, containee.segments))
        return false;
    if (container.numberOfChildren !== containee.numberOfChildren)
        return false;
    for (let c in containee.children) {
        if (!container.children[c])
            return false;
        if (!equalSegmentGroups(container.children[c], containee.children[c]))
            return false;
    }
    return true;
}
function containsSegmentGroup(container, containee) {
    return containsSegmentGroupHelper(container, containee, containee.segments);
}
function containsSegmentGroupHelper(container, containee, containeePaths) {
    if (container.segments.length > containeePaths.length) {
        const current = container.segments.slice(0, containeePaths.length);
        if (!equalPath(current, containeePaths))
            return false;
        if (containee.hasChildren())
            return false;
        return true;
    }
    else if (container.segments.length === containeePaths.length) {
        if (!equalPath(container.segments, containeePaths))
            return false;
        for (let c in containee.children) {
            if (!container.children[c])
                return false;
            if (!containsSegmentGroup(container.children[c], containee.children[c]))
                return false;
        }
        return true;
    }
    else {
        const current = containeePaths.slice(0, container.segments.length);
        const next = containeePaths.slice(container.segments.length);
        if (!equalPath(container.segments, current))
            return false;
        if (!container.children[PRIMARY_OUTLET])
            return false;
        return containsSegmentGroupHelper(container.children[PRIMARY_OUTLET], containee, next);
    }
}
/**
 * A URL in the tree form.
 *
 * @stable
 */
export class UrlTree {
    /**
     * @internal
     */
    constructor(root, queryParams, fragment) {
        this.root = root;
        this.queryParams = queryParams;
        this.fragment = fragment;
    }
    toString() { return new DefaultUrlSerializer().serialize(this); }
}
/**
 * @stable
 */
export class UrlSegmentGroup {
    constructor(segments, children) {
        this.segments = segments;
        this.children = children;
        this.parent = null;
        forEach(children, (v, k) => v.parent = this);
    }
    /**
     * Return true if the segment has child segments
     */
    hasChildren() { return this.numberOfChildren > 0; }
    /**
     * Returns the number of child sements.
     */
    get numberOfChildren() { return Object.keys(this.children).length; }
    toString() { return serializePaths(this); }
}
/**
 * @stable
 */
export class UrlSegment {
    constructor(path, parameters) {
        this.path = path;
        this.parameters = parameters;
    }
    toString() { return serializePath(this); }
}
export function equalSegments(a, b) {
    if (a.length !== b.length)
        return false;
    for (let i = 0; i < a.length; ++i) {
        if (a[i].path !== b[i].path)
            return false;
        if (!shallowEqual(a[i].parameters, b[i].parameters))
            return false;
    }
    return true;
}
export function equalPath(a, b) {
    if (a.length !== b.length)
        return false;
    for (let i = 0; i < a.length; ++i) {
        if (a[i].path !== b[i].path)
            return false;
    }
    return true;
}
export function mapChildrenIntoArray(segment, fn) {
    let res = [];
    forEach(segment.children, (child, childOutlet) => {
        if (childOutlet === PRIMARY_OUTLET) {
            res = res.concat(fn(child, childOutlet));
        }
    });
    forEach(segment.children, (child, childOutlet) => {
        if (childOutlet !== PRIMARY_OUTLET) {
            res = res.concat(fn(child, childOutlet));
        }
    });
    return res;
}
/**
 * Defines a way to serialize/deserialize a url tree.
 *
 * @experimental
 */
export class UrlSerializer {
}
/**
 * A default implementation of the serialization.
 *
 * @experimental
 */
export class DefaultUrlSerializer {
    parse(url) {
        const p = new UrlParser(url);
        return new UrlTree(p.parseRootSegment(), p.parseQueryParams(), p.parseFragment());
    }
    serialize(tree) {
        const segment = `/${serializeSegment(tree.root, true)}`;
        const query = serializeQueryParams(tree.queryParams);
        const fragment = tree.fragment !== null && tree.fragment !== undefined ?
            `#${encodeURIComponent(tree.fragment)}` :
            '';
        return `${segment}${query}${fragment}`;
    }
}
export function serializePaths(segment) {
    return segment.segments.map(p => serializePath(p)).join('/');
}
function serializeSegment(segment, root) {
    if (segment.hasChildren() && root) {
        const primary = segment.children[PRIMARY_OUTLET] ?
            serializeSegment(segment.children[PRIMARY_OUTLET], false) :
            '';
        const children = [];
        forEach(segment.children, (v, k) => {
            if (k !== PRIMARY_OUTLET) {
                children.push(`${k}:${serializeSegment(v, false)}`);
            }
        });
        if (children.length > 0) {
            return `${primary}(${children.join('//')})`;
        }
        else {
            return `${primary}`;
        }
    }
    else if (segment.hasChildren() && !root) {
        const children = mapChildrenIntoArray(segment, (v, k) => {
            if (k === PRIMARY_OUTLET) {
                return [serializeSegment(segment.children[PRIMARY_OUTLET], false)];
            }
            else {
                return [`${k}:${serializeSegment(v, false)}`];
            }
        });
        return `${serializePaths(segment)}/(${children.join('//')})`;
    }
    else {
        return serializePaths(segment);
    }
}
export function encode(s) {
    return encodeURIComponent(s);
}
export function decode(s) {
    return decodeURIComponent(s);
}
export function serializePath(path) {
    return `${encode(path.path)}${serializeParams(path.parameters)}`;
}
function serializeParams(params) {
    return pairs(params).map(p => `;${encode(p.first)}=${encode(p.second)}`).join('');
}
function serializeQueryParams(params) {
    const strs = pairs(params).map(p => `${encode(p.first)}=${encode(p.second)}`);
    return strs.length > 0 ? `?${strs.join("&")}` : '';
}
class Pair {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
}
function pairs(obj) {
    const res = [];
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            res.push(new Pair(prop, obj[prop]));
        }
    }
    return res;
}
const SEGMENT_RE = /^[^\/\(\)\?;=&#]+/;
function matchSegments(str) {
    SEGMENT_RE.lastIndex = 0;
    const match = str.match(SEGMENT_RE);
    return match ? match[0] : '';
}
const QUERY_PARAM_RE = /^[^=\?&#]+/;
function matchQueryParams(str) {
    QUERY_PARAM_RE.lastIndex = 0;
    const match = str.match(SEGMENT_RE);
    return match ? match[0] : '';
}
const QUERY_PARAM_VALUE_RE = /^[^\?&#]+/;
function matchUrlQueryParamValue(str) {
    QUERY_PARAM_VALUE_RE.lastIndex = 0;
    const match = str.match(QUERY_PARAM_VALUE_RE);
    return match ? match[0] : '';
}
class UrlParser {
    constructor(url) {
        this.url = url;
        this.remaining = url;
    }
    peekStartsWith(str) { return this.remaining.startsWith(str); }
    capture(str) {
        if (!this.remaining.startsWith(str)) {
            throw new Error(`Expected "${str}".`);
        }
        this.remaining = this.remaining.substring(str.length);
    }
    parseRootSegment() {
        if (this.remaining.startsWith('/')) {
            this.capture('/');
        }
        if (this.remaining === '' || this.remaining.startsWith('?') || this.remaining.startsWith('#')) {
            return new UrlSegmentGroup([], {});
        }
        else {
            return new UrlSegmentGroup([], this.parseChildren());
        }
    }
    parseChildren() {
        if (this.remaining.length == 0) {
            return {};
        }
        if (this.peekStartsWith('/')) {
            this.capture('/');
        }
        let paths = [];
        if (!this.peekStartsWith('(')) {
            paths.push(this.parseSegments());
        }
        while (this.peekStartsWith('/') && !this.peekStartsWith('//') && !this.peekStartsWith('/(')) {
            this.capture('/');
            paths.push(this.parseSegments());
        }
        let children = {};
        if (this.peekStartsWith('/(')) {
            this.capture('/');
            children = this.parseParens(true);
        }
        let res = {};
        if (this.peekStartsWith('(')) {
            res = this.parseParens(false);
        }
        if (paths.length > 0 || Object.keys(children).length > 0) {
            res[PRIMARY_OUTLET] = new UrlSegmentGroup(paths, children);
        }
        return res;
    }
    parseSegments() {
        const path = matchSegments(this.remaining);
        if (path === '' && this.peekStartsWith(';')) {
            throw new Error(`Empty path url segment cannot have parameters: '${this.remaining}'.`);
        }
        this.capture(path);
        let matrixParams = {};
        if (this.peekStartsWith(';')) {
            matrixParams = this.parseMatrixParams();
        }
        return new UrlSegment(decode(path), matrixParams);
    }
    parseQueryParams() {
        const params = {};
        if (this.peekStartsWith('?')) {
            this.capture('?');
            this.parseQueryParam(params);
            while (this.remaining.length > 0 && this.peekStartsWith('&')) {
                this.capture('&');
                this.parseQueryParam(params);
            }
        }
        return params;
    }
    parseFragment() {
        if (this.peekStartsWith('#')) {
            return decode(this.remaining.substring(1));
        }
        else {
            return null;
        }
    }
    parseMatrixParams() {
        const params = {};
        while (this.remaining.length > 0 && this.peekStartsWith(';')) {
            this.capture(';');
            this.parseParam(params);
        }
        return params;
    }
    parseParam(params) {
        const key = matchSegments(this.remaining);
        if (!key) {
            return;
        }
        this.capture(key);
        let value = 'true';
        if (this.peekStartsWith('=')) {
            this.capture('=');
            const valueMatch = matchSegments(this.remaining);
            if (valueMatch) {
                value = valueMatch;
                this.capture(value);
            }
        }
        params[decode(key)] = decode(value);
    }
    parseQueryParam(params) {
        const key = matchQueryParams(this.remaining);
        if (!key) {
            return;
        }
        this.capture(key);
        let value = '';
        if (this.peekStartsWith('=')) {
            this.capture('=');
            var valueMatch = matchUrlQueryParamValue(this.remaining);
            if (valueMatch) {
                value = valueMatch;
                this.capture(value);
            }
        }
        params[decode(key)] = decode(value);
    }
    parseParens(allowPrimary) {
        const segments = {};
        this.capture('(');
        while (!this.peekStartsWith(')') && this.remaining.length > 0) {
            const path = matchSegments(this.remaining);
            const next = this.remaining[path.length];
            // if is is not one of these characters, then the segment was unescaped
            // or the group was not closed
            if (next !== '/' && next !== ')' && next !== ';') {
                throw new Error(`Cannot parse url '${this.url}'`);
            }
            let outletName;
            if (path.indexOf(':') > -1) {
                outletName = path.substr(0, path.indexOf(':'));
                this.capture(outletName);
                this.capture(':');
            }
            else if (allowPrimary) {
                outletName = PRIMARY_OUTLET;
            }
            const children = this.parseChildren();
            segments[outletName] = Object.keys(children).length === 1 ? children[PRIMARY_OUTLET] :
                new UrlSegmentGroup([], children);
            if (this.peekStartsWith('//')) {
                this.capture('//');
            }
        }
        this.capture(')');
        return segments;
    }
}
//# sourceMappingURL=url_tree.js.map