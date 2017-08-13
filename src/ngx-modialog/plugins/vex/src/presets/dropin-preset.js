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
import { DROP_IN_TYPE, extend } from 'ngx-modialog';
import { DialogFormModal as component, FormDropIn as content } from '../dialog-form-modal';
import { DialogPreset, DialogPresetBuilder } from './dialog-preset';
var DEFAULT_VALUES = {
    component: component,
    content: content,
    okBtn: 'OK',
    cancelBtn: 'Cancel'
};
var DEFAULT_SETTERS = [
    'okBtn',
    'cancelBtn',
    'placeholder'
];
/**
 * Data definition
 */
var DropInPreset = (function (_super) {
    __extends(DropInPreset, _super);
    function DropInPreset() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DropInPreset.prototype, "showInput", {
        get: function () {
            return this.dropInType === DROP_IN_TYPE.prompt;
        },
        enumerable: true,
        configurable: true
    });
    return DropInPreset;
}(DialogPreset));
export { DropInPreset };
/**
 * A Preset representing all 3 drop ins (alert, prompt, confirm)
 */
var DropInPresetBuilder = (function (_super) {
    __extends(DropInPresetBuilder, _super);
    function DropInPresetBuilder(modal, dropInType, defaultValues) {
        if (defaultValues === void 0) { defaultValues = undefined; }
        return _super.call(this, modal, extend(extend({ modal: modal, dropInType: dropInType }, DEFAULT_VALUES), defaultValues || {}), DEFAULT_SETTERS, DropInPreset) || this;
    }
    DropInPresetBuilder.prototype.$$beforeOpen = function (config) {
        _super.prototype.$$beforeOpen.call(this, config);
        if (config.okBtn) {
            this.addOkButton(config.okBtn);
        }
        switch (config.dropInType) {
            case DROP_IN_TYPE.prompt:
                config.defaultResult = undefined;
                break;
            case DROP_IN_TYPE.confirm:
                if (config.cancelBtn) {
                    this.addCancelButton(config.cancelBtn);
                }
                break;
        }
    };
    return DropInPresetBuilder;
}(DialogPresetBuilder));
export { DropInPresetBuilder };
//# sourceMappingURL=dropin-preset.js.map