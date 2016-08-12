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
var angular2_modal_1 = require("angular2-modal");
var modal_backdrop_1 = require('./modal-backdrop');
var modal_context_1 = require('./modal-context');
var Modal = (function (_super) {
    __extends(Modal, _super);
    function Modal(base) {
        _super.call(this, base);
    }
    Modal.prototype.alert = function () {
        return new modal_context_1.InAppModalContextBuilder(this);
    };
    Modal.prototype.create = function (dialogRef, type, bindings) {
        if (dialogRef.inElement) {
            dialogRef.overlayRef.instance.insideElement();
        }
        else {
            dialogRef.overlayRef.instance.fullscreen();
        }
        dialogRef.overlayRef.instance.addComponent(modal_backdrop_1.InAppModalBackdrop, bindings);
        dialogRef.overlayRef.instance.setStyle('position', 'relative');
        dialogRef.overlayRef.instance.setStyle('display', 'block');
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