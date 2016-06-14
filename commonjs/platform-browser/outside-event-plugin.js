// heavily inspired by:
// http://www.bennadel.com/blog/3025-creating-custom-dom-and-host-event-bindings-in-angular-2-beta-6.htm
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var dom_adapter_1 = require('@angular/platform-browser/src/dom/dom_adapter');
var lang_1 = require('@angular/core/src/facade/lang');
var eventMap = {
    clickOutside: 'click',
    mousedownOutside: 'mousedown',
    mouseupOutside: 'mouseup',
    mousemoveOutside: 'mousemove'
};
/**
 * An event handler factory for event handlers that bubble the event to a given handler
 * if the event target is not an ancestor of the given element.
 * @param element
 * @param handler
 * @returns {function(any): undefined}
 */
function bubbleNonAncestorHandlerFactory(element, handler) {
    return function (event) {
        var current = event.target;
        do {
            if (current === element) {
                return;
            }
        } while (current.parentNode && (current = current.parentNode));
        handler(event);
    };
}
var DOMOutsideEventPlugin = (function (_super) {
    __extends(DOMOutsideEventPlugin, _super);
    function DOMOutsideEventPlugin() {
        _super.call(this);
        this._DOM = dom_adapter_1.getDOM();
    }
    DOMOutsideEventPlugin.prototype.supports = function (eventName) {
        return eventMap.hasOwnProperty(eventName);
    };
    DOMOutsideEventPlugin.prototype.addEventListener = function (element, eventName, handler) {
        var _this = this;
        var zone = this.manager.getZone();
        // A Factory that registers the event on the document, instead of the element.
        // the handler is created at runtime, and it acts as a propagation/bubble predicate, it will
        // bubble up the event (i.e: execute our original event handler) only if the event targer
        // is an ancestor of our element.
        // The event is fired inside the angular zone so change detection can kick into action.
        var onceOnOutside = function () { return _this._DOM.onAndCancel(_this._DOM.getGlobalEventTarget('document'), eventMap[eventName], bubbleNonAncestorHandlerFactory(element, function (evt) { return zone.runGuarded(function () { return handler(evt); }); })); };
        // we run the event registration for the document in a different zone, this will make sure
        // change detection is off.
        // It turns out that if a component that use DOMOutsideEventPlugin is built from a click
        // event, we might get here before the event reached the document, causing a quick false
        // positive handling (when stopPropagation() was'nt invoked). To workaround this we wait
        // for the next vm turn and register.
        // Event registration returns a dispose function for that event, angular use it to clean
        // up after component get's destroyed. Since we need to return a dispose function
        // synchronously we have to put a wrapper for it since we will get it asynchronously,
        // i.e: after we need to return it.
        //
        return zone.runOutsideAngular(function () {
            var fn;
            setTimeout(function () { return fn = onceOnOutside(); }, 0);
            return function () { return fn(); };
        });
    };
    DOMOutsideEventPlugin.prototype.addGlobalEventListener = function (target, eventName, handler) {
        var _this = this;
        if ((target === 'document') || (target === 'window')) {
            return lang_1.noop;
        }
        else {
            var element_1 = this._DOM.getGlobalEventTarget(target), zone_1 = this.manager.getZone();
            return this.manager.getZone().runOutsideAngular(function () { return _this._DOM.onAndCancel(element_1, eventName, function (evt) { return zone_1.runGuarded(function () { return handler(evt); }); }); });
        }
    };
    DOMOutsideEventPlugin = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DOMOutsideEventPlugin);
    return DOMOutsideEventPlugin;
}(platform_browser_1.DomEventsPlugin));
exports.DOMOutsideEventPlugin = DOMOutsideEventPlugin;
//# sourceMappingURL=outside-event-plugin.js.map