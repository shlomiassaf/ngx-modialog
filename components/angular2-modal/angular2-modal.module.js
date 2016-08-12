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
var platform_browser_1 = require('@angular/platform-browser');
var providers_1 = require('./providers');
var angular2_modal_1 = require('../angular2-modal');
var overlay_1 = require('./overlay');
var ModalModule = (function () {
    function ModalModule() {
    }
    ModalModule.forRoot = function () {
        return {
            ngModule: ModalModule,
            providers: [
                overlay_1.Overlay,
                { provide: angular2_modal_1.OverlayRenderer, useClass: angular2_modal_1.DOMOverlayRenderer },
                { provide: platform_browser_1.EVENT_MANAGER_PLUGINS, useClass: providers_1.DOMOutsideEventPlugin, multi: true },
            ]
        };
    };
    ModalModule = __decorate([
        core_1.NgModule({
            declarations: [
                overlay_1.ModalOverlay,
                angular2_modal_1.CSSBackdrop,
                angular2_modal_1.CSSDialogContainer,
                angular2_modal_1.OverlayDialogBoundary,
                angular2_modal_1.OverlayTarget
            ],
            exports: [
                angular2_modal_1.CSSBackdrop,
                angular2_modal_1.CSSDialogContainer,
                angular2_modal_1.OverlayDialogBoundary,
                angular2_modal_1.OverlayTarget
            ],
            entryComponents: [
                overlay_1.ModalOverlay,
                angular2_modal_1.CSSBackdrop,
                angular2_modal_1.CSSDialogContainer
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ModalModule);
    return ModalModule;
}());
exports.ModalModule = ModalModule;
//# sourceMappingURL=angular2-modal.module.js.map