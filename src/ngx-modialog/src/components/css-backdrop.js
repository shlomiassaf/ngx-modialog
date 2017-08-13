var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, ViewEncapsulation, Renderer2 } from '@angular/core';
import { BaseDynamicComponent } from './base-dynamic-component';
/**
 * Represents the modal backdrop shaped by CSS.
 */
var CSSBackdrop = (function (_super) {
    __extends(CSSBackdrop, _super);
    function CSSBackdrop(el, renderer) {
        var _this = _super.call(this, el, renderer) || this;
        _this.activateAnimationListener();
        var style = {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
        };
        Object.keys(style).forEach(function (k) { return _this.setStyle(k, style[k]); });
        return _this;
    }
    CSSBackdrop = __decorate([
        Component({
            selector: 'css-backdrop',
            host: {
                '[attr.class]': 'cssClass',
                '[attr.style]': 'styleStr'
            },
            encapsulation: ViewEncapsulation.None,
            template: ""
        }),
        __metadata("design:paramtypes", [ElementRef, Renderer2])
    ], CSSBackdrop);
    return CSSBackdrop;
}(BaseDynamicComponent));
export { CSSBackdrop };
//# sourceMappingURL=css-backdrop.js.map