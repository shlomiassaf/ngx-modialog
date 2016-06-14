"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var utils_1 = require('../../../framework/utils');
var message_modal_preset_1 = require('./message-modal-preset');
/**
 * A Preset for a classic 2 button modal window.
 */
var TwoButtonPresetBuilder = (function (_super) {
    __extends(TwoButtonPresetBuilder, _super);
    function TwoButtonPresetBuilder(modal, defaultValues) {
        if (defaultValues === void 0) { defaultValues = undefined; }
        _super.call(this, utils_1.extend({
            modal: modal,
            okBtn: 'OK',
            okBtnClass: 'btn btn-primary',
            cancelBtn: 'Cancel',
            cancelBtnClass: 'btn btn-default'
        }, defaultValues || {}), [
            'okBtn',
            'okBtnClass',
            'cancelBtn',
            'cancelBtnClass'
        ]);
    }
    TwoButtonPresetBuilder.prototype.$$beforeOpen = function (config) {
        this.addButton(config.okBtnClass, config.okBtn, function (cmp, $event) { return cmp.dialog.close(true); })
            .addButton(config.cancelBtnClass, config.cancelBtn, function (cmp, $event) { return cmp.dialog.dismiss(); });
        return _super.prototype.$$beforeOpen.call(this, config);
    };
    return TwoButtonPresetBuilder;
}(message_modal_preset_1.MessageModalPresetBuilder));
exports.TwoButtonPresetBuilder = TwoButtonPresetBuilder;
//# sourceMappingURL=two-button-preset.js.map