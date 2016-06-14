"use strict";
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
var common_1 = require('@angular/common');
var tokens_1 = require('../../models/tokens');
var angular2_modal_1 = require('../../angular2-modal');
var modal_1 = require('./modal');
var BlankModalBackdrop = (function () {
    function BlankModalBackdrop(dialog, _compileConfig, _modal, _cr) {
        this.dialog = dialog;
        this._compileConfig = _compileConfig;
        this._modal = _modal;
        this._cr = _cr;
        this.context = dialog.context;
    }
    BlankModalBackdrop.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._cr.resolveComponent(this._compileConfig.component)
            .then(function (cmpFactory) {
            var vcr = _this.vcOverlay, bindings = _this._compileConfig.bindings, ctxInjector = vcr.parentInjector;
            var childInjector = Array.isArray(bindings) && bindings.length > 0 ?
                core_1.ReflectiveInjector.fromResolvedProviders(bindings, ctxInjector) : ctxInjector;
            return _this.dialog.contentRef =
                vcr.createComponent(cmpFactory, vcr.length, childInjector);
        });
    };
    __decorate([
        core_1.ViewChild('overlay', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], BlankModalBackdrop.prototype, "vcOverlay", void 0);
    BlankModalBackdrop = __decorate([
        core_1.Component({
            selector: 'modal-backdrop',
            directives: [common_1.NgTemplateOutlet],
            template: "<div [class]=\"context.backdropCss\">\n    <div [class]=\"context.overlayCss\" #overlay></div>\n    <template [ngTemplateOutlet]=\"context.templateRef\"></template>\n</div>"
        }), 
        __metadata('design:paramtypes', [angular2_modal_1.DialogRef, tokens_1.ModalCompileConfig, modal_1.Modal, core_1.ComponentResolver])
    ], BlankModalBackdrop);
    return BlankModalBackdrop;
}());
exports.BlankModalBackdrop = BlankModalBackdrop;
//# sourceMappingURL=modal-backdrop.js.map