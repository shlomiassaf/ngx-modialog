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
var js_native_preset_1 = require('./presets/js-native-preset');
var Modal = (function (_super) {
    __extends(Modal, _super);
    function Modal(overlay) {
        _super.call(this, overlay);
    }
    Modal.prototype.alert = function () {
        return new js_native_preset_1.JSNativePresetBuilder(this, angular2_modal_1.DROP_IN_TYPE.alert);
    };
    Modal.prototype.prompt = function () {
        return new js_native_preset_1.JSNativePresetBuilder(this, angular2_modal_1.DROP_IN_TYPE.prompt);
    };
    Modal.prototype.confirm = function () {
        return new js_native_preset_1.JSNativePresetBuilder(this, angular2_modal_1.DROP_IN_TYPE.confirm);
    };
    Modal.prototype.create = function (dialogRef, type, bindings) {
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