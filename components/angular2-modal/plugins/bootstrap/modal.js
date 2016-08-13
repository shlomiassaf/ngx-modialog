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
require('rxjs/add/operator/first');
var core_1 = require('@angular/core');
var angular2_modal_1 = require("angular2-modal");
var modal_container_component_1 = require('./modal-container.component');
var one_button_preset_1 = require('./../bootstrap/presets/one-button-preset');
var two_button_preset_1 = require('./../bootstrap/presets/two-button-preset');
var Modal = (function (_super) {
    __extends(Modal, _super);
    function Modal(overlay) {
        _super.call(this, overlay);
    }
    Modal.prototype.alert = function () {
        return new one_button_preset_1.OneButtonPresetBuilder(this, { isBlocking: false });
    };
    Modal.prototype.prompt = function () {
        return new one_button_preset_1.OneButtonPresetBuilder(this, { isBlocking: true, keyboard: null });
    };
    Modal.prototype.confirm = function () {
        return new two_button_preset_1.TwoButtonPresetBuilder(this, { isBlocking: true, keyboard: null });
    };
    Modal.prototype.create = function (dialogRef, type, bindings) {
        var _this = this;
        var refs = this.createModal(dialogRef, angular2_modal_1.CSSBackdrop, angular2_modal_1.CSSDialogContainer);
        refs.containerRef
            .instance.addComponent(modal_container_component_1.BSModalContainer, bindings)
            .instance.addComponent(type, bindings);
        var overlay = dialogRef.overlayRef.instance;
        var backdrop = refs.backdropRef.instance;
        var container = refs.containerRef.instance;
        dialogRef.inElement ? overlay.insideElement() : overlay.fullscreen();
        // add body class if this is the only dialog in the stack
        if (!document.body.classList.contains('modal-open')) {
            document.body.classList.add('modal-open');
        }
        // on removal, remove if last.
        dialogRef.onDestroy
            .subscribe(function () { return _this.overlay.stackLength === 0 && document.body.classList.remove('modal-open'); });
        backdrop.addClass('modal-backdrop fade');
        backdrop.addClass('in', true);
        container.addClass('modal fade');
        container.setStyle('position', 'absolute');
        container.setStyle('display', 'block');
        container.addClass('in', true);
        if (refs.containerRef.location.nativeElement) {
            refs.containerRef.location.nativeElement.focus();
        }
        overlay.beforeDestroy(function () {
            var completer = new angular2_modal_1.PromiseCompleter();
            backdrop.removeClass('in');
            container.removeClass('in');
            backdrop.animationEnd$.first().subscribe(function (type) { return completer.resolve(); });
            return completer.promise;
        });
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