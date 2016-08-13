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
var dialog_ref_1 = require('../models/dialog-ref');
/**
 * A component that acts as a top level container for an open modal window.
 */
var CSSDialogContainer = (function (_super) {
    __extends(CSSDialogContainer, _super);
    function CSSDialogContainer(dialog, el, sanitizer) {
        _super.call(this, sanitizer, el);
        this.dialog = dialog;
        this.tabIndex = -1;
        this.role = 'dialog';
        this.activateAnimationListener();
    }
    CSSDialogContainer.prototype.addComponent = function (type, bindings) {
        return _super.prototype._addComponent.call(this, type, this.vcRef, bindings);
    };
    __decorate([
        core_1.ViewChild('modalDialog', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], CSSDialogContainer.prototype, "vcRef", void 0);
    CSSDialogContainer = __decorate([
        core_1.Component({
            selector: 'css-dialog-container',
            host: {
                '[attr.tabindex]': 'tabIndex',
                '[attr.role]': 'role',
                '[attr.class]': 'cssClass',
                '[attr.style]': 'styleStr'
            },
            encapsulation: core_1.ViewEncapsulation.None,
            template: "<span #modalDialog></span>"
        }), 
        __metadata('design:paramtypes', [dialog_ref_1.DialogRef, core_1.ElementRef, platform_browser_1.DomSanitizationService])
    ], CSSDialogContainer);
    return CSSDialogContainer;
}(base_dynamic_component_1.BaseDynamicComponent));
exports.CSSDialogContainer = CSSDialogContainer;
//# sourceMappingURL=css-dialog-container.js.map