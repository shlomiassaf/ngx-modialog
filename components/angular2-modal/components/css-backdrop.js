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
var base_dynamic_component_1 = require('./base-dynamic-component');
/**
 * Represents the modal backdrop shaped by CSS.
 */
var CSSBackdrop = (function (_super) {
    __extends(CSSBackdrop, _super);
    function CSSBackdrop(el, sanitizer) {
        _super.call(this, sanitizer, el);
        this.activateAnimationListener();
        this.style = {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
        };
        this.applyStyle();
    }
    CSSBackdrop = __decorate([
        core_1.Component({
            selector: 'css-backdrop',
            host: {
                '[attr.class]': 'cssClass',
                '[attr.style]': 'styleStr'
            },
            encapsulation: core_1.ViewEncapsulation.None,
            template: ""
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, platform_browser_1.DomSanitizationService])
    ], CSSBackdrop);
    return CSSBackdrop;
}(base_dynamic_component_1.BaseDynamicComponent));
exports.CSSBackdrop = CSSBackdrop;
//# sourceMappingURL=css-backdrop.js.map