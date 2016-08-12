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
var utils_1 = require('./../framework/utils');
var overlay_context_1 = require('./overlay-context');
exports.DEFAULT_VALUES = {};
var DEFAULT_SETTERS = [
    'message'
];
var ModalContext = (function (_super) {
    __extends(ModalContext, _super);
    function ModalContext() {
        _super.apply(this, arguments);
    }
    return ModalContext;
}(overlay_context_1.OverlayContext));
exports.ModalContext = ModalContext;
/**
 * A core context builder for a modal window instance, used to define the context upon
 * a modal choose it's behaviour.
 */
var ModalContextBuilder = (function (_super) {
    __extends(ModalContextBuilder, _super);
    function ModalContextBuilder(defaultValues, initialSetters, baseType) {
        if (defaultValues === void 0) { defaultValues = undefined; }
        if (initialSetters === void 0) { initialSetters = undefined; }
        if (baseType === void 0) { baseType = undefined; }
        _super.call(this, utils_1.extend(exports.DEFAULT_VALUES, defaultValues || {}), utils_1.arrayUnion(DEFAULT_SETTERS, initialSetters || []), baseType);
    }
    ModalContextBuilder = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [Object, Array, Function])
    ], ModalContextBuilder);
    return ModalContextBuilder;
}(overlay_context_1.OverlayContextBuilder));
exports.ModalContextBuilder = ModalContextBuilder;
//# sourceMappingURL=modal-context.js.map