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
import { extend } from 'ngx-modialog';
import { MessageModalPresetBuilder } from './message-modal-preset';
/**
 * A Preset for a classic 1 button modal window.
 */
var OneButtonPresetBuilder = (function (_super) {
    __extends(OneButtonPresetBuilder, _super);
    function OneButtonPresetBuilder(modal, defaultValues) {
        if (defaultValues === void 0) { defaultValues = undefined; }
        return _super.call(this, extend({
            modal: modal,
            okBtn: 'OK',
            okBtnClass: 'btn btn-primary'
        }, defaultValues || {}), [
            'okBtn',
            'okBtnClass'
        ]) || this;
    }
    OneButtonPresetBuilder.prototype.$$beforeOpen = function (config) {
        _super.prototype.$$beforeOpen.call(this, config);
        this.addButton(config.okBtnClass, config.okBtn, function (cmp, $event) { return cmp.dialog.close(true); });
    };
    return OneButtonPresetBuilder;
}(MessageModalPresetBuilder));
export { OneButtonPresetBuilder };
//# sourceMappingURL=one-button-preset.js.map