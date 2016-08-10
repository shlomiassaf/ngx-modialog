/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { LocationStrategy } from '@angular/common';
import { Directive, HostBinding, HostListener, Input } from '@angular/core';
import { NavigationEnd, Router } from '../router';
import { ActivatedRoute } from '../router_state';
export class RouterLink {
    constructor(router, route, locationStrategy) {
        this.router = router;
        this.route = route;
        this.locationStrategy = locationStrategy;
        this.commands = [];
    }
    set routerLink(data) {
        if (Array.isArray(data)) {
            this.commands = data;
        }
        else {
            this.commands = [data];
        }
    }
    onClick(button, ctrlKey, metaKey) {
        if (button !== 0 || ctrlKey || metaKey) {
            return true;
        }
        this.router.navigateByUrl(this.urlTree);
        return false;
    }
    get urlTree() {
        return this.router.createUrlTree(this.commands, {
            relativeTo: this.route,
            queryParams: this.queryParams,
            fragment: this.fragment,
            preserveQueryParams: toBool(this.preserveQueryParams),
            preserveFragment: toBool(this.preserveFragment)
        });
    }
}
/** @nocollapse */
RouterLink.decorators = [
    { type: Directive, args: [{ selector: ':not(a)[routerLink]' },] },
];
/** @nocollapse */
RouterLink.ctorParameters = [
    { type: Router, },
    { type: ActivatedRoute, },
    { type: LocationStrategy, },
];
/** @nocollapse */
RouterLink.propDecorators = {
    'queryParams': [{ type: Input },],
    'fragment': [{ type: Input },],
    'preserveQueryParams': [{ type: Input },],
    'preserveFragment': [{ type: Input },],
    'routerLink': [{ type: Input },],
    'onClick': [{ type: HostListener, args: ['click', ['$event.button', '$event.ctrlKey', '$event.metaKey'],] },],
};
export class RouterLinkWithHref {
    constructor(router, route, locationStrategy) {
        this.router = router;
        this.route = route;
        this.locationStrategy = locationStrategy;
        this.commands = [];
        this.subscription = router.events.subscribe(s => {
            if (s instanceof NavigationEnd) {
                this.updateTargetUrlAndHref();
            }
        });
    }
    set routerLink(data) {
        if (Array.isArray(data)) {
            this.commands = data;
        }
        else {
            this.commands = [data];
        }
    }
    ngOnChanges(changes) { this.updateTargetUrlAndHref(); }
    ngOnDestroy() { this.subscription.unsubscribe(); }
    onClick(button, ctrlKey, metaKey) {
        if (button !== 0 || ctrlKey || metaKey) {
            return true;
        }
        if (typeof this.target === 'string' && this.target != '_self') {
            return true;
        }
        this.router.navigateByUrl(this.urlTree);
        return false;
    }
    updateTargetUrlAndHref() {
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
    }
}
/** @nocollapse */
RouterLinkWithHref.decorators = [
    { type: Directive, args: [{ selector: 'a[routerLink]' },] },
];
/** @nocollapse */
RouterLinkWithHref.ctorParameters = [
    { type: Router, },
    { type: ActivatedRoute, },
    { type: LocationStrategy, },
];
/** @nocollapse */
RouterLinkWithHref.propDecorators = {
    'target': [{ type: Input },],
    'queryParams': [{ type: Input },],
    'fragment': [{ type: Input },],
    'routerLinkOptions': [{ type: Input },],
    'preserveQueryParams': [{ type: Input },],
    'preserveFragment': [{ type: Input },],
    'href': [{ type: HostBinding },],
    'routerLink': [{ type: Input },],
    'onClick': [{ type: HostListener, args: ['click', ['$event.button', '$event.ctrlKey', '$event.metaKey'],] },],
};
function toBool(s) {
    if (s === '')
        return true;
    return !!s;
}
//# sourceMappingURL=router_link.js.map