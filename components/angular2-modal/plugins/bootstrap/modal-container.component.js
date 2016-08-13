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
    return (c > 3 && r && Object.defineProperty(target, key, r), r);
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var angular2_modal_1 = require("angular2-modal");
var BSModalContainer = (function (_super) {
    __extends(BSModalContainer, _super);
    function BSModalContainer(dialog, el, sanitizer) {
        _super.call(this, sanitizer, el);
        this.dialog = dialog;
    }
    BSModalContainer.prototype.addComponent = function (type, bindings) {
        return _super.prototype._addComponent.call(this, type, this.vcRef, bindings);
    };
    __decorate([
        core_1.ViewChild('dlg', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], BSModalContainer.prototype, "vcRef", void 0);
    BSModalContainer = __decorate([
        core_1.Component({
            selector: 'bs-modal-container',
            encapsulation: core_1.ViewEncapsulation.None,
            template: "<div [ngClass]=\"dialog.context.dialogClass\" \n      [class.modal-lg]=\"dialog.context.size == 'lg'\"\n      [class.modal-sm]=\"dialog.context.size == 'sm'\">\n  <div class=\"modal-content\" style=\"display:block\" role=\"document\" overlayDialogBoundary>\n    <span #dlg></span>\n  </div>    \n</div>"
        }), 
        __metadata('design:paramtypes', [angular2_modal_1.DialogRef, core_1.ElementRef, platform_browser_1.DomSanitizationService])
    ], BSModalContainer);
    return BSModalContainer;
}(angular2_modal_1.BaseDynamicComponent));
exports.BSModalContainer = BSModalContainer;
//# sourceMappingURL=modal-container.component.js.map