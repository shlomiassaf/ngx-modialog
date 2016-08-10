/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
export class Tree {
    constructor(root) {
        this._root = root;
    }
    get root() { return this._root.value; }
    /**
     * @deprecated (use ActivatedRoute.parent instead)
     */
    parent(t) {
        const p = this.pathFromRoot(t);
        return p.length > 1 ? p[p.length - 2] : null;
    }
    /**
     * @deprecated (use ActivatedRoute.children instead)
     */
    children(t) {
        const n = findNode(t, this._root);
        return n ? n.children.map(t => t.value) : [];
    }
    /**
     * @deprecated (use ActivatedRoute.firstChild instead)
     */
    firstChild(t) {
        const n = findNode(t, this._root);
        return n && n.children.length > 0 ? n.children[0].value : null;
    }
    /**
     * @deprecated
     */
    siblings(t) {
        const p = findPath(t, this._root, []);
        if (p.length < 2)
            return [];
        const c = p[p.length - 2].children.map(c => c.value);
        return c.filter(cc => cc !== t);
    }
    /**
     * @deprecated (use ActivatedRoute.pathFromRoot instead)
     */
    pathFromRoot(t) { return findPath(t, this._root, []).map(s => s.value); }
}
function findNode(expected, c) {
    if (expected === c.value)
        return c;
    for (let cc of c.children) {
        const r = findNode(expected, cc);
        if (r)
            return r;
    }
    return null;
}
function findPath(expected, c, collected) {
    collected.push(c);
    if (expected === c.value)
        return collected;
    for (let cc of c.children) {
        const cloned = collected.slice(0);
        const r = findPath(expected, cc, cloned);
        if (r.length > 0)
            return r;
    }
    return [];
}
export class TreeNode {
    constructor(value, children) {
        this.value = value;
        this.children = children;
    }
    toString() { return `TreeNode(${this.value})`; }
}
//# sourceMappingURL=tree.js.map