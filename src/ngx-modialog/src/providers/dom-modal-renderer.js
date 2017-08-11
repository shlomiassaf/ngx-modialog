var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ApplicationRef, Injector, Injectable, ReflectiveInjector } from '@angular/core';
import { createComponent } from '../framework/createComponent';
import { DialogRef } from '../models/dialog-ref';
import { ModalOverlay } from '../overlay/index';
var DOMOverlayRenderer = (function () {
    function DOMOverlayRenderer(appRef, injector) {
        this.appRef = appRef;
        this.injector = injector;
        this.isDoc = !(typeof document === 'undefined' || !document);
    }
    DOMOverlayRenderer.prototype.render = function (dialog, vcRef, injector) {
        var _this = this;
        if (!injector) {
            injector = this.injector;
        }
        var bindings = ReflectiveInjector.resolve([
            { provide: DialogRef, useValue: dialog }
        ]);
        var cmpRef = createComponent({
            component: ModalOverlay,
            vcRef: vcRef,
            injector: injector,
            bindings: bindings
        });
        if (!vcRef) {
            this.appRef.attachView(cmpRef.hostView);
            // TODO: doesn't look like this is needed, explore. leaving now to be on the safe side.
            dialog.onDestroy.subscribe(function () { return _this.appRef.detachView(cmpRef.hostView); });
        }
        if (vcRef && dialog.inElement) {
            vcRef.element.nativeElement.appendChild(cmpRef.location.nativeElement);
        }
        else if (this.isDoc) {
            document.body.appendChild(cmpRef.location.nativeElement);
        }
        return cmpRef;
    };
    DOMOverlayRenderer = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [ApplicationRef, Injector])
    ], DOMOverlayRenderer);
    return DOMOverlayRenderer;
}());
export { DOMOverlayRenderer };
//# sourceMappingURL=dom-modal-renderer.js.map