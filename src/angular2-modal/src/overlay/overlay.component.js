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
import { Component, ElementRef, ReflectiveInjector, ViewChild, ViewContainerRef, ViewEncapsulation, Renderer, TemplateRef } from '@angular/core';
import { PromiseCompleter, supportsKey } from '../framework/utils';
import { DialogRef } from '../models/dialog-ref';
import { BaseDynamicComponent } from '../components/index';
// TODO: use DI factory for this.
// TODO: consolidate dup code
var isDoc = !(typeof document === 'undefined' || !document);
/**
 * Represents the modal overlay.
 */
var ModalOverlay = (function (_super) {
    __extends(ModalOverlay, _super);
    function ModalOverlay(dialogRef, vcr, el, renderer) {
        var _this = _super.call(this, el, renderer) || this;
        _this.dialogRef = dialogRef;
        _this.vcr = vcr;
        _this.activateAnimationListener();
        return _this;
    }
    /**
     * @internal
     */
    ModalOverlay.prototype.getProjectables = function (content, bindings) {
        var nodes;
        if (typeof content === 'string') {
            nodes = [[this.renderer.createText(null, "" + content)]];
        }
        else if (content instanceof TemplateRef) {
            nodes = [this.vcr.createEmbeddedView(content, { dialogRef: this.dialogRef }).rootNodes];
        }
        else {
            nodes = [this.embedComponent({ component: content, bindings: bindings }).rootNodes];
        }
        return nodes;
    };
    ModalOverlay.prototype.embedComponent = function (config) {
        var ctx = config;
        if (ctx.bindings) {
            ctx.injector = ReflectiveInjector.fromResolvedProviders(ctx.bindings, this.vcr.parentInjector);
        }
        return this.vcr.createEmbeddedView(this.template, {
            $implicit: ctx
        });
    };
    ModalOverlay.prototype.addComponent = function (type, bindings, projectableNodes) {
        if (bindings === void 0) { bindings = []; }
        if (projectableNodes === void 0) { projectableNodes = []; }
        return _super.prototype._addComponent.call(this, {
            component: type,
            vcRef: this.innerVcr,
            bindings: bindings,
            projectableNodes: projectableNodes
        });
    };
    ModalOverlay.prototype.fullscreen = function () {
        var _this = this;
        var style = {
            position: 'fixed',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            'z-index': 1500
        };
        Object.keys(style).forEach(function (k) { return _this.setStyle(k, style[k]); });
    };
    ModalOverlay.prototype.insideElement = function () {
        var _this = this;
        var style = {
            position: 'absolute',
            overflow: 'hidden',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
        };
        Object.keys(style).forEach(function (k) { return _this.setStyle(k, style[k]); });
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
        if (isDoc) {
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
        }
    };
    /**
     * Temp workaround for animation where destruction of the top level component does not
     * trigger child animations. Solution should be found either in animation module or in design
     * of the modal component tree.
     * @returns {Promise<void>}
     */
    ModalOverlay.prototype.canDestroy = function () {
        var completer = new PromiseCompleter();
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
        if (supportsKey(event.keyCode, this.dialogRef.context.keyboard)) {
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
        ViewChild('innerView', { read: ViewContainerRef }),
        __metadata("design:type", ViewContainerRef)
    ], ModalOverlay.prototype, "innerVcr", void 0);
    __decorate([
        ViewChild('template'),
        __metadata("design:type", TemplateRef)
    ], ModalOverlay.prototype, "template", void 0);
    ModalOverlay = __decorate([
        Component({
            selector: 'modal-overlay',
            host: {
                '(body:keydown)': 'documentKeypress($event)'
            },
            encapsulation: ViewEncapsulation.None,
            templateUrl: './overlay.component.html'
        }),
        __metadata("design:paramtypes", [DialogRef,
            ViewContainerRef,
            ElementRef,
            Renderer])
    ], ModalOverlay);
    return ModalOverlay;
}(BaseDynamicComponent));
export { ModalOverlay };
//# sourceMappingURL=overlay.component.js.map