import { Subject } from 'rxjs/Subject';
import { filter } from 'rxjs/operator/filter';
import { createComponent } from '../framework/createComponent';
var BROWSER_PREFIX = ['webkit', 'moz', 'MS', 'o', ''];
function register(eventName, element, cb) {
    BROWSER_PREFIX.forEach(function (p) {
        element.addEventListener(p ? p + eventName : eventName.toLowerCase(), cb, false);
    });
}
/**
 * A base class for supporting dynamic components.
 * There are 3 main support areas:
 * 1 - Easy wrapper for dynamic styling via CSS classes and inline styles.
 * 2 - Easy wrapper for interception of transition/animation end events.
 * 3 - Easy wrapper for component creation and injection.
 *
 * Dynamic css is done via direct element manipulation (via renderer), it does not use change detection
 * or binding. This is to allow better control over animation.
 *
 * Animation support is limited, only transition/keyframes END even are notified.
 * The animation support is needed since currently the angular animation module is limited as well and
 * does not support CSS animation that are not pre-parsed and are not in the styles metadata of a component.
 *
 * Capabilities: Add/Remove styls, Add/Remove classes, listen to animation/transition end event,
 * add components
 */
var BaseDynamicComponent = (function () {
    function BaseDynamicComponent(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    BaseDynamicComponent.prototype.activateAnimationListener = function () {
        var _this = this;
        if (this.animationEnd)
            return;
        this.animationEnd = new Subject();
        this.animationEnd$ = this.animationEnd.asObservable();
        register('TransitionEnd', this.el.nativeElement, function (e) { return _this.onEnd(e); });
        register('AnimationEnd', this.el.nativeElement, function (e) { return _this.onEnd(e); });
    };
    /**
     * Set a specific inline style on the overlay host element.
     * @param prop The style key
     * @param value The value, undefined to remove
     * @returns {ModalOverlay}
     */
    BaseDynamicComponent.prototype.setStyle = function (prop, value) {
        this.renderer.setStyle(this.el.nativeElement, prop, value);
        return this;
    };
    BaseDynamicComponent.prototype.forceReflow = function () {
        this.el.nativeElement.offsetWidth;
    };
    BaseDynamicComponent.prototype.addClass = function (css, forceReflow) {
        var _this = this;
        if (forceReflow === void 0) { forceReflow = false; }
        css.split(' ')
            .forEach(function (c) { return _this.renderer.addClass(_this.el.nativeElement, c); });
        if (forceReflow)
            this.forceReflow();
    };
    BaseDynamicComponent.prototype.removeClass = function (css, forceReflow) {
        var _this = this;
        if (forceReflow === void 0) { forceReflow = false; }
        css.split(' ')
            .forEach(function (c) { return _this.renderer.removeClass(_this.el.nativeElement, c); });
        if (forceReflow)
            this.forceReflow();
    };
    BaseDynamicComponent.prototype.ngOnDestroy = function () {
        if (this.animationEnd && !this.animationEnd.closed) {
            this.animationEnd.complete();
        }
    };
    BaseDynamicComponent.prototype.myAnimationEnd$ = function () {
        var _this = this;
        return filter.call(this.animationEnd$, function (e) { return e.target === _this.el.nativeElement; });
    };
    /**
     * Add a component, supply a view container ref.
     * Note: The components vcRef will result in a sibling.
     * @returns {Promise<ComponentRef<any>>}
     */
    BaseDynamicComponent.prototype._addComponent = function (instructions) {
        var cmpRef = createComponent(instructions);
        cmpRef.changeDetectorRef.detectChanges();
        return cmpRef;
    };
    BaseDynamicComponent.prototype.onEnd = function (event) {
        if (!this.animationEnd.closed) {
            this.animationEnd.next(event);
        }
    };
    return BaseDynamicComponent;
}());
export { BaseDynamicComponent };
//# sourceMappingURL=base-dynamic-component.js.map