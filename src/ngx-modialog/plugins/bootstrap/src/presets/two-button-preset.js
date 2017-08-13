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
import { extend, arrayUnion } from 'ngx-modialog';
import { MessageModalPresetBuilder } from './message-modal-preset';
/** Common two button preset */
var AbstractTwoButtonPresetBuilder = (function (_super) {
    __extends(AbstractTwoButtonPresetBuilder, _super);
    function AbstractTwoButtonPresetBuilder(modal, defaultValues, initialSetters) {
        if (defaultValues === void 0) { defaultValues = undefined; }
        if (initialSetters === void 0) { initialSetters = []; }
        return _super.call(this, extend({
            modal: modal,
            okBtn: 'OK',
            okBtnClass: 'btn btn-primary',
            cancelBtn: 'Cancel',
            cancelBtnClass: 'btn btn-default'
        }, defaultValues || {}), arrayUnion([
            'okBtn',
            'okBtnClass',
            'cancelBtn',
            'cancelBtnClass',
        ], initialSetters)) || this;
    }
    AbstractTwoButtonPresetBuilder.prototype.$$beforeOpen = function (config) {
        _super.prototype.$$beforeOpen.call(this, config);
        this.addButton(config.cancelBtnClass, config.cancelBtn, function (cmp, $event) { return cmp.dialog.dismiss(); });
    };
    return AbstractTwoButtonPresetBuilder;
}(MessageModalPresetBuilder));
export { AbstractTwoButtonPresetBuilder };
/**
 * A Preset for a classic 2 button modal window.
 */
var TwoButtonPresetBuilder = (function (_super) {
    __extends(TwoButtonPresetBuilder, _super);
    function TwoButtonPresetBuilder(modal, defaultValues) {
        if (defaultValues === void 0) { defaultValues = undefined; }
        return _super.call(this, modal, defaultValues) || this;
    }
    TwoButtonPresetBuilder.prototype.$$beforeOpen = function (config) {
        _super.prototype.$$beforeOpen.call(this, config);
        this.addButton(config.okBtnClass, config.okBtn, function (cmp, $event) { return cmp.dialog.close(true); });
    };
    return TwoButtonPresetBuilder;
}(AbstractTwoButtonPresetBuilder));
export { TwoButtonPresetBuilder };
var PromptPresetBuilder = (function (_super) {
    __extends(PromptPresetBuilder, _super);
    function PromptPresetBuilder(modal, defaultValues) {
        if (defaultValues === void 0) { defaultValues = undefined; }
        return _super.call(this, modal, extend({ showInput: true, defaultValue: '' }, defaultValues || {}), ['placeholder', 'defaultValue']) || this;
    }
    PromptPresetBuilder.prototype.$$beforeOpen = function (config) {
        _super.prototype.$$beforeOpen.call(this, config);
        this.addButton(config.okBtnClass, config.okBtn, function (cmp, $event) {
            return cmp.dialog.close(cmp.dialog.context.defaultValue);
        });
    };
    return PromptPresetBuilder;
}(AbstractTwoButtonPresetBuilder));
export { PromptPresetBuilder };
//# sourceMappingURL=two-button-preset.js.map