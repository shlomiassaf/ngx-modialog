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
var angular2_modal_1 = require('../../angular2-modal');
var modal_1 = require('./modal');
var tokens_1 = require('../../models/tokens');
var dialog_ref_1 = require('../../models/dialog-ref');
/**
 * A component that acts as a top level container for an open modal window.
 */
var VexModalContent = (function () {
    function VexModalContent(dialog, _modal, _compileConfig, _cr) {
        this.dialog = dialog;
        this._modal = _modal;
        this._compileConfig = _compileConfig;
        this._cr = _cr;
        this.context = dialog.context;
    }
    VexModalContent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.dlgContainer.nativeElement) {
            this.dlgContainer.nativeElement.focus();
        }
        /*  TODO:
         In RC5 dynamic component creation is no longer async.
         Somewhere down the pipe of the created component a value change happens that fires
         a CD exception. setTimeout is a workaround that mimics the async behavior.
         Find out the error and remove setTimeout.
         */
        setTimeout(function () {
            _this.dialog.contentRef = angular2_modal_1.createComponent(_this._cr, _this._compileConfig.component, _this._viewContainer, _this._compileConfig.bindings);
        });
    };
    VexModalContent.prototype.onClickOutside = function () {
        // check that this modal is the last in the stack.
        if (this._modal.isTopMost(this.dialog) && !this.dialog.context.isBlocking)
            this.dialog.dismiss();
    };
    __decorate([
        core_1.ViewChild('dlgContainer'), 
        __metadata('design:type', core_1.ElementRef)
    ], VexModalContent.prototype, "dlgContainer", void 0);
    __decorate([
        core_1.ViewChild('modalDialog', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], VexModalContent.prototype, "_viewContainer", void 0);
    VexModalContent = __decorate([
        core_1.Component({
            selector: 'modal-content',
            template: "<div tabindex=\"-1\" role=\"dialog\"\n      [class]=\"context.contentClassName\" (clickOutside)=\"onClickOutside()\" #dlgContainer>\n    <div style=\"display: none\" #modalDialog></div>    \n    <div *ngIf=\"context.showCloseButton\" \n         [class]=\"context.closeClassName\" \n         (click)=\"dialog.dismiss()\"></div>\n</div>",
            encapsulation: core_1.ViewEncapsulation.None,
        }), 
        __metadata('design:paramtypes', [dialog_ref_1.DialogRef, modal_1.Modal, tokens_1.ModalCompileConfig, core_1.ComponentFactoryResolver])
    ], VexModalContent);
    return VexModalContent;
}());
exports.VexModalContent = VexModalContent;
//# sourceMappingURL=modal-content.js.map