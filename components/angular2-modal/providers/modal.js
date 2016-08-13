"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var dialog_ref_1 = require('../models/dialog-ref');
var UnsupportedDropInError = (function (_super) {
    __extends(UnsupportedDropInError, _super);
    function UnsupportedDropInError(dropInName) {
        _super.call(this);
        this.message = "Unsupported Drop-In " + dropInName;
    }
    return UnsupportedDropInError;
}(Error));
exports.UnsupportedDropInError = UnsupportedDropInError;
var Modal = (function () {
    function Modal(overlay) {
        this.overlay = overlay;
    }
    Modal.prototype.alert = function () {
        throw new UnsupportedDropInError('alert');
    };
    Modal.prototype.prompt = function () {
        throw new UnsupportedDropInError('prompt');
    };
    Modal.prototype.confirm = function () {
        throw new UnsupportedDropInError('confirm');
    };
    /**
     * Opens a modal window inside an existing component.
     * @param componentType The angular Component to render as the modal content.
     * @param config Additional settings.
     * @returns {Promise<DialogRef>}
     */
    Modal.prototype.open = function (componentType, config) {
        config = config || {};
        try {
            var dialogs = this.overlay.open(config);
            if (dialogs.length > 1) {
                console.warn("Attempt to open more then 1 overlay detected.\n        Multiple modal copies are not supported at the moment, \n        only the first viewContainer will display.");
            }
            // TODO:  Currently supporting 1 view container, hence working on dialogs[0].
            //        upgrade to multiple containers.
            return Promise.resolve(this.create(dialogs[0], componentType, config.bindings));
        }
        catch (e) {
            return Promise.reject(e);
        }
    };
    /**
     * A helper function for derived classes to create backdrop & container
     * @param dialogRef
     * @param backdrop
     * @param container
     * @returns { backdropRef: ComponentRef<B>, containerRef: ComponentRef<C> }
     */
    Modal.prototype.createModal = function (dialogRef, backdrop, container) {
        var b = core_1.ReflectiveInjector.resolve([{ provide: dialog_ref_1.DialogRef, useValue: dialogRef }]);
        return {
            backdropRef: dialogRef.overlayRef.instance.addComponent(backdrop, b),
            containerRef: dialogRef.overlayRef.instance.addComponent(container, b)
        };
    };
    return Modal;
}());
exports.Modal = Modal;
//# sourceMappingURL=modal.js.map