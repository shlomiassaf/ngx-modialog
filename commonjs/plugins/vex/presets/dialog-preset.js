"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var fluent_assign_1 = require('../../../framework/fluent-assign');
var modal_context_1 = require('../modal-context');
var dialog_form_modal_1 = require('../dialog-form-modal');
var utils_1 = require('../../../framework/utils');
var DEFAULT_SETTERS = [
    'content'
];
/**
 * Data definition
 */
var DialogPreset = (function (_super) {
    __extends(DialogPreset, _super);
    function DialogPreset() {
        _super.apply(this, arguments);
    }
    return DialogPreset;
}(modal_context_1.VEXModalContext));
exports.DialogPreset = DialogPreset;
/**
 * A Preset representing the configuration needed to open MessageModal.
 * This is an abstract implementation with no concrete behaviour.
 * Use derived implementation.
 */
var DialogPresetBuilder = (function (_super) {
    __extends(DialogPresetBuilder, _super);
    function DialogPresetBuilder(modal, defaultValues, initialSetters, baseType) {
        if (defaultValues === void 0) { defaultValues = undefined; }
        if (initialSetters === void 0) { initialSetters = undefined; }
        if (baseType === void 0) { baseType = undefined; }
        _super.call(this, utils_1.extend({ modal: modal, component: dialog_form_modal_1.DialogFormModal, buttons: [], defaultResult: true }, defaultValues || {}), utils_1.arrayUnion(DEFAULT_SETTERS, initialSetters || []), baseType || DialogPreset // https://github.com/Microsoft/TypeScript/issues/7234
        );
    }
    DialogPresetBuilder.prototype.addButton = function (css, caption, onClick) {
        var btn = {
            cssClass: css,
            caption: caption,
            onClick: onClick
        };
        var key = fluent_assign_1.privateKey('buttons');
        this[key].push(btn);
        return this;
    };
    DialogPresetBuilder.prototype.addOkButton = function (text) {
        if (text === void 0) { text = 'OK'; }
        this.addButton('vex-dialog-button-primary vex-dialog-button vex-first', text, function (cmp, $event) { return cmp.dialog.close(cmp.dialog.context.defaultResult); });
        return this;
    };
    DialogPresetBuilder.prototype.addCancelButton = function (text) {
        if (text === void 0) { text = 'CANCEL'; }
        this.addButton('vex-dialog-button-secondary vex-dialog-button vex-last', text, function (cmp, $event) { return cmp.dialog.dismiss(); });
        return this;
    };
    return DialogPresetBuilder;
}(modal_context_1.VEXModalContextBuilder));
exports.DialogPresetBuilder = DialogPresetBuilder;
//# sourceMappingURL=dialog-preset.js.map