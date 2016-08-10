/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ContentChildren, Directive, ElementRef, Input, Renderer } from '@angular/core';
import { NavigationEnd, Router } from '../router';
import { RouterLink, RouterLinkWithHref } from './router_link';
export class RouterLinkActive {
    constructor(router, element, renderer) {
        this.router = router;
        this.element = element;
        this.renderer = renderer;
        this.classes = [];
        this.routerLinkActiveOptions = { exact: false };
        this.subscription = router.events.subscribe(s => {
            if (s instanceof NavigationEnd) {
                this.update();
            }
        });
    }
    ngAfterContentInit() {
        this.links.changes.subscribe(s => this.update());
        this.linksWithHrefs.changes.subscribe(s => this.update());
        this.update();
    }
    set routerLinkActive(data) {
        if (Array.isArray(data)) {
            this.classes = data;
        }
        else {
            this.classes = data.split(' ');
        }
    }
    ngOnChanges(changes) { this.update(); }
    ngOnDestroy() { this.subscription.unsubscribe(); }
    update() {
        if (!this.links || !this.linksWithHrefs || !this.router.navigated)
            return;
        const isActiveLinks = this.reduceList(this.links);
        const isActiveLinksWithHrefs = this.reduceList(this.linksWithHrefs);
        this.classes.forEach(c => this.renderer.setElementClass(this.element.nativeElement, c, isActiveLinks || isActiveLinksWithHrefs));
    }
    reduceList(q) {
        return q.reduce((res, link) => res || this.router.isActive(link.urlTree, this.routerLinkActiveOptions.exact), false);
    }
}
/** @nocollapse */
RouterLinkActive.decorators = [
    { type: Directive, args: [{ selector: '[routerLinkActive]' },] },
];
/** @nocollapse */
RouterLinkActive.ctorParameters = [
    { type: Router, },
    { type: ElementRef, },
    { type: Renderer, },
];
/** @nocollapse */
RouterLinkActive.propDecorators = {
    'links': [{ type: ContentChildren, args: [RouterLink, { descendants: true },] },],
    'linksWithHrefs': [{ type: ContentChildren, args: [RouterLinkWithHref, { descendants: true },] },],
    'routerLinkActiveOptions': [{ type: Input },],
    'routerLinkActive': [{ type: Input },],
};
//# sourceMappingURL=router_link_active.js.map