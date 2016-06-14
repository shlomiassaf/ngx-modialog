"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var modal_1 = require('../modal');
var modal_context_1 = require('../modal-context');
var JSNativePresetBuilder = (function (_super) {
    __extends(JSNativePresetBuilder, _super);
    function JSNativePresetBuilder(modal, dialogType) {
        _super.call(this, { modal: modal, dialogType: dialogType });
    }
    /**
     * Hook to alter config and return bindings.
     * @param config
     */
    JSNativePresetBuilder.prototype.$$beforeOpen = function (config) {
        return [];
    };
    /**
     * Open a modal window based on the configuration of this config instance.
     * @param viewContainer If set opens the modal inside the supplied viewContainer
     * @returns Promise<DialogRef>
     */
    JSNativePresetBuilder.prototype.open = function (viewContainer) {
        var config = this.toJSON();
        if (!(config.modal instanceof modal_1.Modal)) {
            return Promise.reject(new Error('Configuration Error: modal service not set.'));
        }
        var bindings = typeof this.$$beforeOpen === 'function' && this.$$beforeOpen(config);
        return config.modal.open(true, config, bindings, true);
    };
    return JSNativePresetBuilder;
}(modal_context_1.JSNativeModalContextBuilder));
exports.JSNativePresetBuilder = JSNativePresetBuilder;
//# sourceMappingURL=js-native-preset.js.map