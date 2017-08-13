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
import { combineLatest } from 'rxjs/operator/combineLatest';
import { Injectable } from '@angular/core';
import { Overlay, DROP_IN_TYPE, Modal as Modal_, CSSBackdrop, CSSDialogContainer, PromiseCompleter } from 'ngx-modialog';
import { DropInPresetBuilder } from './presets/dropin-preset';
// TODO: use DI factory for this.
// TODO: consolidate dup code
var isDoc = !(typeof document === 'undefined' || !document);
var Modal = (function (_super) {
    __extends(Modal, _super);
    function Modal(overlay) {
        return _super.call(this, overlay) || this;
    }
    Modal.prototype.alert = function () {
        return new DropInPresetBuilder(this, DROP_IN_TYPE.alert, { isBlocking: false });
    };
    Modal.prototype.prompt = function () {
        return new DropInPresetBuilder(this, DROP_IN_TYPE.prompt, {
            isBlocking: true,
            keyboard: null
        });
    };
    Modal.prototype.confirm = function () {
        return new DropInPresetBuilder(this, DROP_IN_TYPE.confirm, {
            isBlocking: true,
            keyboard: null
        });
    };
    Modal.prototype.create = function (dialogRef, content) {
        var _this = this;
        var backdropRef = this.createBackdrop(dialogRef, CSSBackdrop);
        var containerRef = this.createContainer(dialogRef, CSSDialogContainer, content);
        var overlay = dialogRef.overlayRef.instance;
        var backdrop = backdropRef.instance;
        var container = containerRef.instance;
        dialogRef.inElement ? overlay.insideElement() : overlay.fullscreen();
        // add body class if this is the only dialog in the stack
        if (isDoc && !document.body.classList.contains('vex-open')) {
            document.body.classList.add('vex-open');
        }
        overlay.addClass("vex vex-theme-" + dialogRef.context.className);
        backdrop.addClass('vex-overlay');
        container.addClass(dialogRef.context.contentClassName);
        container.setStyle('display', 'block');
        if (dialogRef.inElement) {
            overlay.setStyle('padding', '0');
            container.setStyle('margin-top', '20px');
        }
        if (containerRef.location.nativeElement) {
            containerRef.location.nativeElement.focus();
        }
        if (dialogRef.context.className === 'bottom-right-corner') {
            overlay.setStyle('overflow-y', 'hidden');
            container.setStyle('position', 'absolute');
        }
        overlay.beforeDestroy(function () {
            overlay.addClass('vex-closing');
            var completer = new PromiseCompleter();
            var animationEnd$ = container.myAnimationEnd$();
            if (dialogRef.context.className !== 'bottom-right-corner') {
                animationEnd$ = combineLatest.call(animationEnd$, backdrop.myAnimationEnd$(), function (s1, s2) { return [s1, s2]; });
            }
            animationEnd$.subscribe(function (sources) {
                isDoc && _this.overlay.groupStackLength(dialogRef) === 1 && document.body.classList.remove('vex-open');
                completer.resolve();
            });
            return completer.promise;
        });
        overlay.setClickBoundary(containerRef.location.nativeElement);
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