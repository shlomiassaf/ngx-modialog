"use strict";
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
var common_1 = require('@angular/common');
var modal_1 = require('./modal');
var modal_backdrop_1 = require('./modal-backdrop');
var modal_context_1 = require('./modal-context');
var angular2_modal_1 = require("angular2-modal");
var modal_2 = require('./modal');
exports.Modal = modal_2.Modal;
var modal_context_2 = require('./modal-context');
exports.InAppModalContext = modal_context_2.InAppModalContext;
exports.InAppModalContextBuilder = modal_context_2.InAppModalContextBuilder;
function getProviders() {
    return [
        { provide: angular2_modal_1.Modal, useClass: modal_1.Modal },
        { provide: modal_1.Modal, useClass: modal_1.Modal },
        { provide: angular2_modal_1.ModalBackdropComponent, useValue: modal_backdrop_1.InAppModalBackdrop },
        { provide: angular2_modal_1.ModalDropInFactory, useValue: {
                alert: function (modal) { return new modal_context_1.InAppModalContextBuilder(modal); },
                prompt: undefined,
                confirm: undefined
            } }
    ];
}
var InAppModalModule = (function () {
    function InAppModalModule() {
    }
    InAppModalModule.getProviders = function () {
        return getProviders();
    };
    InAppModalModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [
                modal_backdrop_1.InAppModalBackdrop
            ],
            providers: getProviders(),
            entryComponents: [
                modal_backdrop_1.InAppModalBackdrop
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], InAppModalModule);
    return InAppModalModule;
}());
exports.InAppModalModule = InAppModalModule;
//# sourceMappingURL=index.js.map