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
var common_1 = require('@angular/common');
var modal_1 = require('./modal');
var modal_backdrop_1 = require('./modal-backdrop');
var message_modal_1 = require('./message-modal');
var modal_container_1 = require('./modal-container');
var modal_footer_1 = require('./modal-footer');
var one_button_preset_1 = require('./presets/one-button-preset');
var two_button_preset_1 = require('./presets/two-button-preset');
var angular2_modal_1 = require('../../angular2-modal');
function getProviders() {
    return [
        { provide: angular2_modal_1.Modal, useClass: modal_1.Modal },
        { provide: modal_1.Modal, useClass: modal_1.Modal },
        { provide: angular2_modal_1.ModalBackdropComponent, useValue: modal_backdrop_1.BSModalBackdrop },
        { provide: angular2_modal_1.ModalDropInFactory, useValue: {
                alert: function (modal) { return new one_button_preset_1.OneButtonPresetBuilder(modal, { isBlocking: false }); },
                prompt: function (modal) { return new one_button_preset_1.OneButtonPresetBuilder(modal, { isBlocking: true, keyboard: null }); },
                confirm: function (modal) { return new two_button_preset_1.TwoButtonPresetBuilder(modal, { isBlocking: true, keyboard: null }); }
            } }
    ];
}
var BootstrapModalModule = (function () {
    function BootstrapModalModule() {
    }
    BootstrapModalModule.getProviders = function () {
        return getProviders();
    };
    BootstrapModalModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [
                modal_backdrop_1.BSModalBackdrop,
                message_modal_1.BSMessageModal,
                modal_container_1.BSModalContainer,
                modal_footer_1.BSModalFooter
            ],
            providers: getProviders(),
            entryComponents: [
                modal_backdrop_1.BSModalBackdrop,
                message_modal_1.BSMessageModal
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], BootstrapModalModule);
    return BootstrapModalModule;
}());
exports.BootstrapModalModule = BootstrapModalModule;
//# sourceMappingURL=bootstrap.module.js.map