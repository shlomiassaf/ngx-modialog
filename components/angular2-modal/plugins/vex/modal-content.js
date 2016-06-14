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
var modal_1 = require('./modal');
var tokens_1 = require('../../models/tokens');
var dialog_ref_1 = require('../../models/dialog-ref');
/**
 * A component that acts as a top level container for an open modal window.
 */
var VexModalContent = (function () {
    function VexModalContent(dialog, el, _modal, _compileConfig, _cr) {
        this.dialog = dialog;
        this.el = el;
        this._modal = _modal;
        this._compileConfig = _compileConfig;
        this._cr = _cr;
        this.context = dialog.context;
    }
    VexModalContent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._cr.resolveComponent(this._compileConfig.component)
            .then(function (cmpFactory) {
            var vcr = _this._viewContainer, bindings = _this._compileConfig.bindings, ctxInjector = vcr.parentInjector;
            var childInjector = Array.isArray(bindings) && bindings.length > 0 ?
                core_1.ReflectiveInjector.fromResolvedProviders(bindings, ctxInjector) : ctxInjector;
            if (_this.el.nativeElement) {
                _this.el.nativeElement.focus();
            }
            return _this.dialog.contentRef =
                vcr.createComponent(cmpFactory, vcr.length, childInjector);
        });
    };
    VexModalContent.prototype.onClickOutside = function () {
        // check that this modal is the last in the stack.
        return this._modal.isTopMost(this.dialog) &&
            !this.dialog.context.isBlocking &&
            this.dialog.dismiss();
    };
    __decorate([
        core_1.ViewChild('modalDialog', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], VexModalContent.prototype, "_viewContainer", void 0);
    VexModalContent = __decorate([
        core_1.Component({
            selector: 'modal-content',
            host: {
                'tabindex': '-1',
                'role': 'dialog'
            },
            template: "<div tabindex=\"-1\" role=\"dialog\"\n      [class]=\"context.contentClassName\" (clickOutside)=\"onClickOutside()\">\n    <div style=\"display: none\" #modalDialog></div>    \n    <div *ngIf=\"context.showCloseButton\" \n         [class]=\"context.closeClassName\" \n         (click)=\"dialog.dismiss()\"></div>\n</div>",
            encapsulation: core_1.ViewEncapsulation.None,
        }), 
        __metadata('design:paramtypes', [dialog_ref_1.DialogRef, core_1.ElementRef, modal_1.Modal, tokens_1.ModalCompileConfig, core_1.ComponentResolver])
    ], VexModalContent);
    return VexModalContent;
}());
exports.VexModalContent = VexModalContent;
//# sourceMappingURL=modal-content.js.map