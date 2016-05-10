"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var message_modal_preset_1 = require('./message-modal-preset');
var utils_1 = require('../../../framework/utils');
/**
 * A Preset for a classic 1 button modal window.
 */
var OneButtonPresetBuilder = (function (_super) {
    __extends(OneButtonPresetBuilder, _super);
    function OneButtonPresetBuilder(modal, defaultValues) {
        if (defaultValues === void 0) { defaultValues = undefined; }
        _super.call(this, utils_1.extend({
            modal: modal,
            okBtn: 'OK',
            okBtnClass: 'btn btn-primary'
        }, defaultValues || {}), [
            'okBtn',
            'okBtnClass'
        ]);
    }
    OneButtonPresetBuilder.prototype.$$beforeOpen = function (config) {
        this.addButton(config.okBtnClass, config.okBtn, function (cmp, $event) { return cmp.dialog.close(true); });
        return _super.prototype.$$beforeOpen.call(this, config);
    };
    return OneButtonPresetBuilder;
}(message_modal_preset_1.MessageModalPresetBuilder));
exports.OneButtonPresetBuilder = OneButtonPresetBuilder;
//# sourceMappingURL=one-button-preset.js.map