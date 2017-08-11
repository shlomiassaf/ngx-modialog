var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Overlay, Modal as Modal_ } from 'angular2-modal';
import { InAppModalBackdrop } from './modal-backdrop';
import { InAppModalContextBuilder } from './modal-context';
var Modal = (function (_super) {
    __extends(Modal, _super);
    function Modal(overlay) {
        return _super.call(this, overlay) || this;
    }
    Modal.prototype.alert = function () {
        return new InAppModalContextBuilder(this);
    };
    Modal.prototype.create = function (dialogRef, content, bindings) {
        if (dialogRef.inElement) {
            dialogRef.overlayRef.instance.insideElement();
        }
        else {
            dialogRef.overlayRef.instance.fullscreen();
        }
        dialogRef.overlayRef.instance.addComponent(InAppModalBackdrop, bindings);
        dialogRef.overlayRef.instance.setStyle('position', 'relative');
        dialogRef.overlayRef.instance.setStyle('display', 'block');
        return dialogRef;
    };
    Modal = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Overlay])
    ], Modal);
    return Modal;
}(Modal_));
export { Modal };
//# sourceMappingURL=modal.js.map