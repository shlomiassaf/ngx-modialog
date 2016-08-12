"use strict";
var core_1 = require('@angular/core');
var Subject_1 = require('rxjs/Subject');
var createComponent_1 = require('../framework/createComponent');
var BROWSER_PREFIX = ['webkit', 'moz', 'MS', 'o', ''];
function register(eventName, element, cb) {
    BROWSER_PREFIX.forEach(function (p) {
        element.addEventListener(p ? p + eventName : eventName.toLowerCase(), cb, false);
    });
}
/**
 * A base class that expose customisation methods in derived components.
 * Capabilities: Add/Remove styls, Add/Remove classes, listen to animation/transition end event,
 * add components
 */
var BaseDynamicComponent = (function () {
    function BaseDynamicComponent(sanitizer, el) {
        this.sanitizer = sanitizer;
        this.el = el;
        this.style = {};
        this.styleStr = '';
        this.cssClass = '';
        this.classArray = [];
    }
    BaseDynamicComponent.prototype.activateAnimationListener = function () {
        if (this.animationEnd)
            return;
        this.animationEnd = new Subject_1.Subject();
        this.animationEnd$ = this.animationEnd.asObservable();
        register('TransitionEnd', this.el.nativeElement, this.onEndTransition.bind(this));
        register('AnimationEnd', this.el.nativeElement, this.onEndAnimation.bind(this));
    };
    /**
     * Set a specific inline style on the overlay host element.
     * @param prop The style key
     * @param value The value, undefined to remove
     * @returns {ModalOverlay}
     */
    BaseDynamicComponent.prototype.setStyle = function (prop, value) {
        if (this.style[prop] !== value) {
            if (value === undefined) {
                delete this.style[prop];
            }
            else {
                this.style[prop] = value;
            }
            this.applyStyle();
        }
        return this;
    };
    /**
     * Remove's all inline styles from the overlay host element.
     */
    BaseDynamicComponent.prototype.clearStyles = function () {
        this.style = {};
        this.applyStyle();
    };
    BaseDynamicComponent.prototype.addClass = function (css, nextTurn) {
        var _this = this;
        if (nextTurn === void 0) { nextTurn = false; }
        if (typeof css === 'string') {
            css.split(' ').forEach(function (c) { return _this._addClass(c, nextTurn); });
        }
    };
    BaseDynamicComponent.prototype.removeClass = function (css, nextTurn) {
        var _this = this;
        if (nextTurn === void 0) { nextTurn = false; }
        if (typeof css === 'string') {
            css.split(' ').forEach(function (c) { return _this._removeClass(c, nextTurn); });
        }
    };
    BaseDynamicComponent.prototype.ngOnDestroy = function () {
        if (this.animationEnd && !this.animationEnd.isUnsubscribed) {
            this.animationEnd.complete();
        }
    };
    BaseDynamicComponent.prototype.applyStyle = function () {
        this.styleStr = this.sanitizer.bypassSecurityTrustStyle(JSON.stringify(this.style)
            .replace('{', '')
            .replace('}', '')
            .replace(/,/g, ';')
            .replace(/"/g, ''));
    };
    BaseDynamicComponent.prototype.applyClasses = function (nextTurn) {
        var _this = this;
        if (nextTurn === true) {
            if (!this.applyOnNextTurn) {
                this.applyOnNextTurn = true;
                setTimeout(function () {
                    _this.applyOnNextTurn = false;
                    _this.applyClasses(false);
                });
            }
        }
        else {
            this.cssClass = this.classArray.join(' ');
        }
    };
    /**
     * Add a component, supply a view container ref.
     * Note: The components vcRef will result in a sibling.
     * @param type The component to add
     * @param vcRef The container to add to
     * @param bindings Bindings to use (added on top of the ViewContainerRef)
     * @returns {Promise<ComponentRef<any>>}
     */
    BaseDynamicComponent.prototype._addComponent = function (type, vcRef, bindings) {
        var cmpRef = createComponent_1.createComponent(vcRef.injector.get(core_1.ComponentFactoryResolver), type, vcRef, bindings || []);
        cmpRef.changeDetectorRef.detectChanges();
        return cmpRef;
    };
    BaseDynamicComponent.prototype.onEndTransition = function () {
        if (!this.animationEnd.isUnsubscribed) {
            this.animationEnd.next('transition');
        }
    };
    BaseDynamicComponent.prototype.onEndAnimation = function () {
        if (!this.animationEnd.isUnsubscribed) {
            this.animationEnd.next('animation');
        }
    };
    BaseDynamicComponent.prototype._addClass = function (css, nextTurn) {
        if (nextTurn === void 0) { nextTurn = false; }
        if (this.classArray.indexOf(css) > -1)
            return;
        this.classArray.push(css);
        this.applyClasses(nextTurn);
    };
    BaseDynamicComponent.prototype._removeClass = function (css, nextTurn) {
        if (nextTurn === void 0) { nextTurn = false; }
        var idx = this.classArray.indexOf(css);
        if (idx > -1) {
            this.classArray.splice(idx, 1);
            this.applyClasses(nextTurn);
        }
    };
    return BaseDynamicComponent;
}());
exports.BaseDynamicComponent = BaseDynamicComponent;
//# sourceMappingURL=base-dynamic-component.js.map