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
var DOMModalRenderer = (function () {
    function DOMModalRenderer(_cr) {
        this._cr = _cr;
    }
    DOMModalRenderer.prototype.render = function (type, viewContainer, bindings, dialog) {
        return this._cr.resolveComponent(type)
            .then(function (cmpFactory) {
            var ctxInjector = viewContainer.parentInjector;
            var childInjector = Array.isArray(bindings) && bindings.length > 0 ?
                core_1.ReflectiveInjector.fromResolvedProviders(bindings, ctxInjector) : ctxInjector;
            return viewContainer.createComponent(cmpFactory, viewContainer.length, childInjector);
        })
            .then(function (cmpRef) {
            if (dialog.inElement) {
                viewContainer.element.nativeElement.appendChild(cmpRef.hostView.rootNodes[0]);
            }
            else {
                document.body.appendChild(cmpRef.hostView.rootNodes[0]);
            }
            dialog.destroy = function () { return cmpRef.destroy(); };
            return dialog;
        });
    };
    DOMModalRenderer = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [core_1.ComponentResolver])
    ], DOMModalRenderer);
    return DOMModalRenderer;
}());
exports.DOMModalRenderer = DOMModalRenderer;
//# sourceMappingURL=dom-modal-renderer.js.map