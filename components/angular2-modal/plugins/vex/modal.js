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
require('rxjs/add/operator/first');
var angular2_modal_1 = require('../../../angular2-modal');
var dropin_preset_1 = require('./presets/dropin-preset');
var Modal = (function (_super) {
    __extends(Modal, _super);
    function Modal(base) {
        _super.call(this, base);
    }
    Modal.prototype.alert = function () {
        return new dropin_preset_1.DropInPresetBuilder(this, angular2_modal_1.DROP_IN_TYPE.alert, { isBlocking: false });
    };
    Modal.prototype.prompt = function () {
        return new dropin_preset_1.DropInPresetBuilder(this, angular2_modal_1.DROP_IN_TYPE.prompt, {
            isBlocking: true,
            keyboard: null
        });
    };
    Modal.prototype.confirm = function () {
        return new dropin_preset_1.DropInPresetBuilder(this, angular2_modal_1.DROP_IN_TYPE.confirm, {
            isBlocking: true,
            keyboard: null
        });
    };
    Modal.prototype.create = function (dialogRef, type, bindings) {
        var _this = this;
        var refs = this.createModal(dialogRef, angular2_modal_1.CSSBackdrop, angular2_modal_1.CSSDialogContainer);
        refs.containerRef.instance.addComponent(type, bindings);
        var overlay = dialogRef.overlayRef.instance;
        var backdrop = refs.backdropRef.instance;
        var container = refs.containerRef.instance;
        dialogRef.inElement ? overlay.insideElement() : overlay.fullscreen();
        // add body class if this is the only dialog in the stack
        if (!document.body.classList.contains('vex-open')) {
            document.body.classList.add('vex-open');
        }
        // on removal, remove if last.
        dialogRef.onDestroy
            .subscribe(function () { return _this.overlay.stackLength === 0 && document.body.classList.remove('vex-open'); });
        overlay.addClass("vex vex-theme-" + dialogRef.context.className);
        backdrop.addClass('vex-overlay');
        container.addClass(dialogRef.context.contentClassName);
        container.setStyle('display', 'block');
        if (dialogRef.inElement) {
            overlay.setStyle('padding', '0');
            container.setStyle('margin-top', '20px');
        }
        if (refs.containerRef.location.nativeElement) {
            refs.containerRef.location.nativeElement.focus();
        }
        overlay.beforeDestroy(function () {
            overlay.addClass('vex-closing');
            var completer = new angular2_modal_1.PromiseCompleter();
            container.animationEnd$.first().subscribe(function (type) { return completer.resolve(); });
            return completer.promise;
        });
        if (dialogRef.context.className === 'bottom-right-corner') {
            overlay.setStyle('overflow-y', 'hidden');
            container.setStyle('position', 'absolute');
        }
        else {
            overlay.beforeDestroy(function () {
                var completer = new angular2_modal_1.PromiseCompleter();
                backdrop.animationEnd$.first().subscribe(function (type) { return completer.resolve(); });
                return completer.promise;
            });
        }
        overlay.setClickBoundary(refs.containerRef.location.nativeElement);
        return dialogRef;
    };
    Modal = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [angular2_modal_1.Overlay])
    ], Modal);
    return Modal;
}(angular2_modal_1.Modal));
exports.Modal = Modal;
//# sourceMappingURL=modal.js.map