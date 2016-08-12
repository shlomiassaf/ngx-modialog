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
var createComponent_1 = require('../framework/createComponent');
var dialog_ref_1 = require('../models/dialog-ref');
var overlay_1 = require('../overlay');
var DOMOverlayRenderer = (function () {
    function DOMOverlayRenderer(_cr) {
        this._cr = _cr;
    }
    DOMOverlayRenderer.prototype.render = function (dialog, vcRef) {
        var b = core_1.ReflectiveInjector.resolve([
            { provide: dialog_ref_1.DialogRef, useValue: dialog }
        ]);
        var cmpRef = createComponent_1.default(this._cr, overlay_1.ModalOverlay, vcRef, b);
        if (dialog.inElement) {
            vcRef.element.nativeElement.appendChild(cmpRef.location.nativeElement);
        }
        else {
            document.body.appendChild(cmpRef.location.nativeElement);
        }
        return cmpRef;
    };
    DOMOverlayRenderer = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [core_1.ComponentFactoryResolver])
    ], DOMOverlayRenderer);
    return DOMOverlayRenderer;
}());
exports.DOMOverlayRenderer = DOMOverlayRenderer;
//# sourceMappingURL=dom-modal-renderer.js.map