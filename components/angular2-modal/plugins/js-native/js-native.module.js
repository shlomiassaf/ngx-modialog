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
var modal_1 = require('./modal');
var js_native_modal_renderer_1 = require('./js-native-modal-renderer');
var js_native_preset_1 = require('./presets/js-native-preset');
var angular2_modal_1 = require('../../angular2-modal');
function getProviders() {
    return [
        { provide: angular2_modal_1.Modal, useClass: modal_1.Modal },
        { provide: modal_1.Modal, useClass: modal_1.Modal },
        { provide: angular2_modal_1.ModalRenderer, useClass: js_native_modal_renderer_1.JSNativeModalRenderer },
        { provide: angular2_modal_1.ModalBackdropComponent, useValue: {} },
        { provide: angular2_modal_1.ModalDropInFactory, useValue: {
                alert: function (modal) { return new js_native_preset_1.JSNativePresetBuilder(modal, angular2_modal_1.DROP_IN_TYPE.alert); },
                prompt: function (modal) { return new js_native_preset_1.JSNativePresetBuilder(modal, angular2_modal_1.DROP_IN_TYPE.prompt); },
                confirm: function (modal) { return new js_native_preset_1.JSNativePresetBuilder(modal, angular2_modal_1.DROP_IN_TYPE.confirm); }
            } }
    ];
}
var JSNativeModalModule = (function () {
    function JSNativeModalModule() {
    }
    JSNativeModalModule.getProviders = function () {
        return getProviders();
    };
    JSNativeModalModule = __decorate([
        core_1.NgModule({
            providers: getProviders()
        }), 
        __metadata('design:paramtypes', [])
    ], JSNativeModalModule);
    return JSNativeModalModule;
}());
exports.JSNativeModalModule = JSNativeModalModule;
//# sourceMappingURL=js-native.module.js.map