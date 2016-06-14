"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var tokens_1 = require('../../../models/tokens');
var dialog_form_modal_1 = require('../dialog-form-modal');
var dialog_preset_1 = require('./dialog-preset');
var utils_1 = require('../../../framework/utils');
var DEFAULT_VALUES = {
    component: dialog_form_modal_1.DialogFormModal,
    content: dialog_form_modal_1.FormDropIn,
    okBtn: 'OK',
    cancelBtn: 'Cancel'
};
var DEFAULT_SETTERS = [
    'okBtn',
    'cancelBtn',
    'placeholder',
    'showCloseButton'
];
/**
 * Data definition
 */
var DropInPreset = (function (_super) {
    __extends(DropInPreset, _super);
    function DropInPreset() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(DropInPreset.prototype, "showInput", {
        get: function () {
            return this.dropInType === tokens_1.DROP_IN_TYPE.prompt;
        },
        enumerable: true,
        configurable: true
    });
    return DropInPreset;
}(dialog_preset_1.DialogPreset));
exports.DropInPreset = DropInPreset;
/**
 * A Preset representing all 3 drop ins (alert, prompt, confirm)
 */
var DropInPresetBuilder = (function (_super) {
    __extends(DropInPresetBuilder, _super);
    function DropInPresetBuilder(modal, dropInType, defaultValues) {
        if (defaultValues === void 0) { defaultValues = undefined; }
        _super.call(this, modal, utils_1.extend(utils_1.extend({ modal: modal, dropInType: dropInType }, DEFAULT_VALUES), defaultValues || {}), DEFAULT_SETTERS, DropInPreset);
    }
    DropInPresetBuilder.prototype.$$beforeOpen = function (config) {
        if (config.okBtn) {
            this.addOkButton(config.okBtn);
        }
        switch (config.dropInType) {
            case tokens_1.DROP_IN_TYPE.prompt:
                config.defaultResult = undefined;
            case tokens_1.DROP_IN_TYPE.confirm:
                if (config.cancelBtn) {
                    this.addCancelButton(config.cancelBtn);
                }
                break;
        }
        return _super.prototype.$$beforeOpen.call(this, config);
    };
    return DropInPresetBuilder;
}(dialog_preset_1.DialogPresetBuilder));
exports.DropInPresetBuilder = DropInPresetBuilder;
//# sourceMappingURL=dropin-preset.js.map