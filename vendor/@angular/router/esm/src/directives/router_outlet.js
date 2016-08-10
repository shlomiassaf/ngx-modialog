/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Attribute, ComponentFactoryResolver, Directive, EventEmitter, NoComponentFactoryError, Output, ReflectiveInjector, ViewContainerRef } from '@angular/core';
import { RouterOutletMap } from '../router_outlet_map';
import { PRIMARY_OUTLET } from '../shared';
export class RouterOutlet {
    constructor(parentOutletMap, location, resolver, name) {
        this.parentOutletMap = parentOutletMap;
        this.location = location;
        this.resolver = resolver;
        this.name = name;
        this.activateEvents = new EventEmitter();
        this.deactivateEvents = new EventEmitter();
        parentOutletMap.registerOutlet(name ? name : PRIMARY_OUTLET, this);
    }
    ngOnDestroy() { this.parentOutletMap.removeOutlet(this.name ? this.name : PRIMARY_OUTLET); }
    get isActivated() { return !!this.activated; }
    get component() {
        if (!this.activated)
            throw new Error('Outlet is not activated');
        return this.activated.instance;
    }
    get activatedRoute() {
        if (!this.activated)
            throw new Error('Outlet is not activated');
        return this._activatedRoute;
    }
    deactivate() {
        if (this.activated) {
            const c = this.component;
            this.activated.destroy();
            this.activated = null;
            this.deactivateEvents.emit(c);
        }
    }
    activate(activatedRoute, loadedResolver, loadedInjector, providers, outletMap) {
        this.outletMap = outletMap;
        this._activatedRoute = activatedRoute;
        const snapshot = activatedRoute._futureSnapshot;
        const component = snapshot._routeConfig.component;
        let factory;
        try {
            if (typeof component === 'string') {
                factory = snapshot._resolvedComponentFactory;
            }
            else if (loadedResolver) {
                factory = loadedResolver.resolveComponentFactory(component);
            }
            else {
                factory = this.resolver.resolveComponentFactory(component);
            }
        }
        catch (e) {
            if (!(e instanceof NoComponentFactoryError))
                throw e;
            const componentName = component ? component.name : null;
            console.warn(`'${componentName}' not found in entryComponents array.  To ensure all components referred
          to by the Routes are compiled, you must add '${componentName}' to the
          'entryComponents' array of your application component. This will be required in a future
          release of the router.`);
            factory = snapshot._resolvedComponentFactory;
        }
        const injector = loadedInjector ? loadedInjector : this.location.parentInjector;
        const inj = ReflectiveInjector.fromResolvedProviders(providers, injector);
        this.activated = this.location.createComponent(factory, this.location.length, inj, []);
        this.activated.changeDetectorRef.detectChanges();
        this.activateEvents.emit(this.activated.instance);
    }
}
/** @nocollapse */
RouterOutlet.decorators = [
    { type: Directive, args: [{ selector: 'router-outlet' },] },
];
/** @nocollapse */
RouterOutlet.ctorParameters = [
    { type: RouterOutletMap, },
    { type: ViewContainerRef, },
    { type: ComponentFactoryResolver, },
    { type: undefined, decorators: [{ type: Attribute, args: ['name',] },] },
];
/** @nocollapse */
RouterOutlet.propDecorators = {
    'activateEvents': [{ type: Output, args: ['activate',] },],
    'deactivateEvents': [{ type: Output, args: ['deactivate',] },],
};
//# sourceMappingURL=router_outlet.js.map