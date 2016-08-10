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
var router_1 = require('../router');
var router_state_1 = require('../router_state');
var RouterLink = (function () {
    function RouterLink(router, route, locationStrategy) {
        this.router = router;
        this.route = route;
        this.locationStrategy = locationStrategy;
        this.commands = [];
    }
    Object.defineProperty(RouterLink.prototype, "routerLink", {
        set: function (data) {
            if (Array.isArray(data)) {
                this.commands = data;
            }
            else {
                this.commands = [data];
            }
        },
        enumerable: true,
        configurable: true
    });
    RouterLink.prototype.onClick = function (button, ctrlKey, metaKey) {
        if (button !== 0 || ctrlKey || metaKey) {
            return true;
        }
        this.router.navigateByUrl(this.urlTree);
        return false;
    };
    Object.defineProperty(RouterLink.prototype, "urlTree", {
        get: function () {
            return this.router.createUrlTree(this.commands, {
                relativeTo: this.route,
                queryParams: this.queryParams,
                fragment: this.fragment,
                preserveQueryParams: toBool(this.preserveQueryParams),
                preserveFragment: toBool(this.preserveFragment)
            });
        },
        enumerable: true,
        configurable: true
    });
    /** @nocollapse */
    RouterLink.decorators = [
        { type: core_1.Directive, args: [{ selector: ':not(a)[routerLink]' },] },
    ];
    /** @nocollapse */
    RouterLink.ctorParameters = [
        { type: router_1.Router, },
        { type: router_state_1.ActivatedRoute, },
        { type: common_1.LocationStrategy, },
    ];
    /** @nocollapse */
    RouterLink.propDecorators = {
        'queryParams': [{ type: core_1.Input },],
        'fragment': [{ type: core_1.Input },],
        'preserveQueryParams': [{ type: core_1.Input },],
        'preserveFragment': [{ type: core_1.Input },],
        'routerLink': [{ type: core_1.Input },],
        'onClick': [{ type: core_1.HostListener, args: ['click', ['$event.button', '$event.ctrlKey', '$event.metaKey'],] },],
    };
    return RouterLink;
}());
exports.RouterLink = RouterLink;
var RouterLinkWithHref = (function () {
    function RouterLinkWithHref(router, route, locationStrategy) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.locationStrategy = locationStrategy;
        this.commands = [];
        this.subscription = router.events.subscribe(function (s) {
            if (s instanceof router_1.NavigationEnd) {
                _this.updateTargetUrlAndHref();
            }
        });
    }
    Object.defineProperty(RouterLinkWithHref.prototype, "routerLink", {
        set: function (data) {
            if (Array.isArray(data)) {
                this.commands = data;
            }
            else {
                this.commands = [data];
            }
        },
        enumerable: true,
        configurable: true
    });
    RouterLinkWithHref.prototype.ngOnChanges = function (changes) { this.updateTargetUrlAndHref(); };
    RouterLinkWithHref.prototype.ngOnDestroy = function () { this.subscription.unsubscribe(); };
    RouterLinkWithHref.prototype.onClick = function (button, ctrlKey, metaKey) {
        if (button !== 0 || ctrlKey || metaKey) {
            return true;
        }
        if (typeof this.target === 'string' && this.target != '_self') {
            return true;
        }
        this.router.navigateByUrl(this.urlTree);
        return false;
    };
    RouterLinkWithHref.prototype.updateTargetUrlAndHref = function () {
        this.urlTree = this.router.createUrlTree(this.commands, {
            relativeTo: this.route,
            queryParams: this.queryParams,
            fragment: this.fragment,
            preserveQueryParams: toBool(this.preserveQueryParams),
            preserveFragment: toBool(this.preserveFragment)
        });
        if (this.urlTree) {
            this.href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree));
        }
    };
    /** @nocollapse */
    RouterLinkWithHref.decorators = [
        { type: core_1.Directive, args: [{ selector: 'a[routerLink]' },] },
    ];
    /** @nocollapse */
    RouterLinkWithHref.ctorParameters = [
        { type: router_1.Router, },
        { type: router_state_1.ActivatedRoute, },
        { type: common_1.LocationStrategy, },
    ];
    /** @nocollapse */
    RouterLinkWithHref.propDecorators = {
        'target': [{ type: core_1.Input },],
        'queryParams': [{ type: core_1.Input },],
        'fragment': [{ type: core_1.Input },],
        'routerLinkOptions': [{ type: core_1.Input },],
        'preserveQueryParams': [{ type: core_1.Input },],
        'preserveFragment': [{ type: core_1.Input },],
        'href': [{ type: core_1.HostBinding },],
        'routerLink': [{ type: core_1.Input },],
        'onClick': [{ type: core_1.HostListener, args: ['click', ['$event.button', '$event.ctrlKey', '$event.metaKey'],] },],
    };
    return RouterLinkWithHref;
}());
exports.RouterLinkWithHref = RouterLinkWithHref;
function toBool(s) {
    if (s === '')
        return true;
    return !!s;
}
//# sourceMappingURL=router_link.js.map