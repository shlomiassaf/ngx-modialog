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
var tokens_1 = require('../models/tokens');
var dialog_ref_stack_1 = require('../models/dialog-ref-stack');
var vc_ref_store_1 = require('../models/vc-ref-store');
var dialog_ref_1 = require('../models/dialog-ref');
var _stack = new dialog_ref_stack_1.DialogRefStack();
var Overlay = (function () {
    function Overlay(_modalRenderer) {
        this._modalRenderer = _modalRenderer;
    }
    Object.defineProperty(Overlay.prototype, "stackLength", {
        get: function () {
            return _stack.length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Check if a given DialogRef is the top most ref in the stack.
     * TODO: distinguish between body modal vs in element modal.
     * @param dialogRef
     * @returns {boolean}
     */
    Overlay.prototype.isTopMost = function (dialogRef) {
        return _stack.indexOf(dialogRef) === _stack.length - 1;
    };
    Overlay.prototype.stackPosition = function (dialogRef) {
        return _stack.indexOf(dialogRef);
    };
    /**
     * Opens a modal window inside an existing component.
     */
    Overlay.prototype.open = function (config) {
        var _this = this;
        var viewContainer = config.viewContainer, containers = [];
        if (typeof viewContainer === 'string') {
            containers = vc_ref_store_1.vcRefStore.getVCRef(viewContainer);
        }
        else if (Array.isArray(viewContainer)) {
            containers = viewContainer;
        }
        else if (viewContainer) {
            containers = [viewContainer];
        }
        if (!containers || !containers[0]) {
            if (!this.defaultViewContainer) {
                throw new Error('defaultViewContainer not set.');
            }
            containers = [this.defaultViewContainer];
        }
        return containers.map(function (vc) { return _this.createOverlay(config.renderer || _this._modalRenderer, vc, config); });
    };
    Overlay.prototype.createOverlay = function (renderer, vcRef, config) {
        if (config.context) {
            config.context.normalize();
        }
        var dialog = new dialog_ref_1.DialogRef(this, config.context || {});
        dialog.inElement = config.inside === undefined ? !!vcRef : !!config.inside;
        var cmpRef = renderer.render(dialog, vcRef);
        Object.defineProperty(dialog, 'overlayRef', { value: cmpRef });
        _stack.pushManaged(dialog);
        dialog.onDestroy.subscribe(function () { return _stack.remove(dialog); });
        return dialog;
    };
    Overlay = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [tokens_1.OverlayRenderer])
    ], Overlay);
    return Overlay;
}());
exports.Overlay = Overlay;
//# sourceMappingURL=overlay.service.js.map