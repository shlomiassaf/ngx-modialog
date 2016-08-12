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
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var utils_1 = require('../framework/utils');
var dialog_ref_1 = require('../models/dialog-ref');
var components_1 = require('../components');
/**
 * Represents the modal overlay.
 */
var ModalOverlay = (function (_super) {
    __extends(ModalOverlay, _super);
    function ModalOverlay(dialogRef, el, sanitizer) {
        _super.call(this, sanitizer, el);
        this.dialogRef = dialogRef;
        this.activateAnimationListener();
    }
    ModalOverlay.prototype.addComponent = function (type, bindings) {
        return _super.prototype._addComponent.call(this, type, this.vcRef, bindings);
    };
    ModalOverlay.prototype.fullscreen = function () {
        this.style = {
            position: 'fixed',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            'z-index': 1500
        };
        this.applyStyle();
    };
    ModalOverlay.prototype.insideElement = function () {
        this.style = {
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
        };
        this.applyStyle();
    };
    /**
     * Define an element that click inside it will not trigger modal close.
     * Since events bubble, clicking on a dialog will bubble up to the overlay, a plugin
     * must define an element that represent the dialog, the overlay will make sure no to close when
     * it was clicked.
     * @param element
     */
    ModalOverlay.prototype.setClickBoundary = function (element) {
        var _this = this;
        var target;
        var elListener = function (event) { return target = event.target; };
        var docListener = function (event) {
            if (_this.dialogRef.context.isBlocking || !_this.dialogRef.overlay.isTopMost(_this.dialogRef)) {
                return;
            }
            var current = event.target;
            // on click, this will hit.
            if (current === target)
                return;
            // on mouse down -> drag -> release the current might not be 'target', it might be
            // a sibling or a child (i.e: not part of the tree-up direction). It might also be a release
            // outside the dialog... so we compare to the boundary element
            do {
                if (current === element) {
                    return;
                }
            } while (current.parentNode && (current = current.parentNode));
            _this.dialogRef.dismiss();
        };
        this.dialogRef.onDestroy.subscribe(function () {
            element.removeEventListener('click', elListener, false);
            element.removeEventListener('touchstart', elListener, false);
            document.removeEventListener('click', docListener, false);
            document.removeEventListener('touchend', docListener, false);
        });
        setTimeout(function () {
            element.addEventListener('mousedown', elListener, false);
            element.addEventListener('touchstart', docListener, false);
            document.addEventListener('click', docListener, false);
            document.addEventListener('touchend', docListener, false);
        });
    };
    /**
     * Temp workaround for animation where destruction of the top level component does not
     * trigger child animations. Solution should be found either in animation module or in design
     * of the modal component tree.
     * @returns {Promise<void>}
     */
    ModalOverlay.prototype.canDestroy = function () {
        var completer = new utils_1.PromiseCompleter();
        if (!Array.isArray(this.beforeDestroyHandlers)) {
            completer.resolve();
        }
        else {
            // run destroy notification but protect against halt.
            var id_1 = setTimeout(function () {
                id_1 = null;
                completer.reject();
            }, 1000);
            var resolve = function () {
                if (id_1 === null)
                    return;
                clearTimeout(id_1);
                completer.resolve();
            };
            Promise.all(this.beforeDestroyHandlers.map(function (fn) { return fn(); }))
                .then(resolve)
                .catch(resolve);
        }
        return completer.promise;
    };
    /**
     * A handler running before destruction of the overlay
     * use to delay destruction due to animation.
     * This is part of the workaround for animation, see canDestroy.
     *
     * NOTE: There is no guarantee that the listeners will fire, use dialog.onDestory for that.
     * @param fn
     */
    ModalOverlay.prototype.beforeDestroy = function (fn) {
        if (!this.beforeDestroyHandlers) {
            this.beforeDestroyHandlers = [];
        }
        this.beforeDestroyHandlers.push(fn);
    };
    ModalOverlay.prototype.documentKeypress = function (event) {
        // check that this modal is the last in the stack.
        if (!this.dialogRef.overlay.isTopMost(this.dialogRef))
            return;
        if (utils_1.supportsKey(event.keyCode, this.dialogRef.context.keyboard)) {
            this.dialogRef.dismiss();
        }
    };
    ModalOverlay.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
        if (this.dialogRef.destroyed !== true) {
            // if we're here the overlay is destroyed by an external event that is not user invoked.
            // i.e: The user did no call dismiss or close and dialogRef.destroy() did not invoke.
            // this will happen when routing or killing an element containing a blocked overlay (ngIf)
            // we bail out, i.e gracefully shutting down.
            this.dialogRef.bailOut();
        }
    };
    __decorate([
        core_1.ViewChild('vcRef', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], ModalOverlay.prototype, "vcRef", void 0);
    ModalOverlay = __decorate([
        core_1.Component({
            selector: 'modal-overlay',
            host: {
                '[attr.style]': 'styleStr',
                '[attr.class]': 'cssClass',
                '(body:keydown)': 'documentKeypress($event)'
            },
            encapsulation: core_1.ViewEncapsulation.None,
            template: "<span #vcRef></span>"
        }), 
        __metadata('design:paramtypes', [dialog_ref_1.DialogRef, core_1.ElementRef, platform_browser_1.DomSanitizationService])
    ], ModalOverlay);
    return ModalOverlay;
}(components_1.BaseDynamicComponent));
exports.ModalOverlay = ModalOverlay;
//# sourceMappingURL=overlay.component.js.map