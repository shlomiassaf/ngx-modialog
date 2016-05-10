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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var tokens_1 = require('../models/tokens');
var dialog_ref_stack_1 = require('../models/dialog-ref-stack');
var dialog_ref_1 = require('../models/dialog-ref');
var _stack = new dialog_ref_stack_1.DialogRefStack();
var unsupportedDropIn = function () { throw new Error('Unsupported Drop-in.'); };
var UnsupportedDropInFactory = {
    alert: unsupportedDropIn,
    prompt: unsupportedDropIn,
    confirm: unsupportedDropIn
};
function normalizeDropInFactory(dropInFactory) {
    if (!dropInFactory)
        return UnsupportedDropInFactory;
    return ['alert', 'prompt', 'confirm']
        .reduce(function (dif, key) {
        if (typeof dif[key] !== 'function')
            dif[key] = unsupportedDropIn;
        return dif;
    }, dropInFactory);
}
var Modal = (function () {
    function Modal(_modalRenderer, _backdrop, _dropIn) {
        this._modalRenderer = _modalRenderer;
        this._backdrop = _backdrop;
        this._dropIn = normalizeDropInFactory(_dropIn);
    }
    Modal.prototype.alert = function () {
        return this._dropIn.alert(this);
    };
    Modal.prototype.prompt = function () {
        return this._dropIn.prompt(this);
    };
    Modal.prototype.confirm = function () {
        return this._dropIn.confirm(this);
    };
    /**
     * Opens a modal window inside an existing component.
     * If
     * @param componentType The angular Component to render as the modal content.
     * @param bindings Resolved providers that will inject into the component provided.
     * @param context The context for the modal, attached to the dialog instance, DialogRef.context.
     *        Default: {}
     * @param viewContainer The element to block using the modal.
     *        Default: The value set in defaultViewContainer.
     * @param inside If true, render's the component inside the ViewContainerRef,
     *        otherwise render's the component in the root element (body in DOM)
     *        Default: true if ViewContainer supplied, false if not supplied.
     * @returns {Promise<DialogRef>}
     */
    Modal.prototype.open = function (componentType, context, bindings, viewContainer, inside) {
        if (context === void 0) { context = undefined; }
        if (bindings === void 0) { bindings = undefined; }
        if (viewContainer === void 0) { viewContainer = undefined; }
        inside = inside === undefined ? !!viewContainer : !!inside;
        if (!viewContainer) {
            if (!this.defaultViewContainer) {
                throw new Error('defaultViewContainer not set.');
            }
            viewContainer = this.defaultViewContainer;
        }
        if (context) {
            context.normalize();
        }
        var dialog = new dialog_ref_1.DialogRef(context || {});
        dialog.inElement = inside;
        var compileConfig = new tokens_1.ModalCompileConfig(componentType, bindings || []);
        var b = core_1.ReflectiveInjector.resolve([
            core_1.provide(Modal, { useValue: this }),
            core_1.provide(tokens_1.ModalRenderer, { useValue: this._modalRenderer }),
            core_1.provide(dialog_ref_1.DialogRef, { useValue: dialog }),
            core_1.provide(tokens_1.ModalCompileConfig, { useValue: compileConfig })
        ]);
        return this._modalRenderer.render(this._backdrop, viewContainer, b, dialog)
            .then(function (dialog) {
            _stack.pushManaged(dialog);
            return dialog;
        });
    };
    /**
     * Check if a given DialogRef is the top most ref in the stack.
     * TODO: distinguish between body modal vs in element modal.
     * @param dialogRef
     * @returns {boolean}
     */
    Modal.prototype.isTopMost = function (dialogRef) {
        return _stack.indexOf(dialogRef) === _stack.length - 1;
    };
    Modal.prototype.stackPosition = function (dialogRef) {
        return _stack.indexOf(dialogRef);
    };
    Object.defineProperty(Modal.prototype, "stackLength", {
        get: function () {
            return _stack.length;
        },
        enumerable: true,
        configurable: true
    });
    Modal = __decorate([
        core_1.Injectable(),
        __param(2, core_1.Optional()), 
        __metadata('design:paramtypes', [tokens_1.ModalRenderer, tokens_1.ModalBackdropComponent, tokens_1.ModalDropInFactory])
    ], Modal);
    return Modal;
}());
exports.Modal = Modal;
//# sourceMappingURL=modal.js.map