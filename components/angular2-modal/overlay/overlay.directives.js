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
var dialog_ref_1 = require('../models/dialog-ref');
var vc_ref_store_1 = require('../models/vc-ref-store');
/**
 * A directive use to signal the overlay that the host of this directive
 * is a dialog boundary, i.e: over click outside of the element should close the modal
 * (if non blocking)
 */
var OverlayDialogBoundary = (function () {
    function OverlayDialogBoundary(el, dialogRef) {
        if (dialogRef && el.nativeElement) {
            dialogRef.overlayRef.instance.setClickBoundary(el.nativeElement);
        }
    }
    OverlayDialogBoundary = __decorate([
        core_1.Directive({
            selector: '[overlayDialogBoundary]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, dialog_ref_1.DialogRef])
    ], OverlayDialogBoundary);
    return OverlayDialogBoundary;
}());
exports.OverlayDialogBoundary = OverlayDialogBoundary;
var OverlayTarget = (function () {
    function OverlayTarget(vcRef) {
        this.vcRef = vcRef;
    }
    Object.defineProperty(OverlayTarget.prototype, "targetKey", {
        set: function (value) {
            this._targetKey = value;
            if (value) {
                vc_ref_store_1.vcRefStore.setVCRef(value, this.vcRef);
            }
        },
        enumerable: true,
        configurable: true
    });
    OverlayTarget.prototype.ngOnDestroy = function () {
        if (this._targetKey) {
            vc_ref_store_1.vcRefStore.delVCRef(this._targetKey, this.vcRef);
        }
    };
    __decorate([
        core_1.Input('overlayTarget'), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], OverlayTarget.prototype, "targetKey", null);
    OverlayTarget = __decorate([
        core_1.Directive({
            selector: '[overlayTarget]'
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef])
    ], OverlayTarget);
    return OverlayTarget;
}());
exports.OverlayTarget = OverlayTarget;
//# sourceMappingURL=overlay.directives.js.map