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
import { Modal } from '../modal';
import { JSNativeModalContextBuilder } from '../modal-context';
import { JSNativeModalRenderer } from '../js-native-modal-renderer';
var JSNativePresetBuilder = (function (_super) {
    __extends(JSNativePresetBuilder, _super);
    function JSNativePresetBuilder(modal, dialogType) {
        return _super.call(this, { modal: modal, dialogType: dialogType }) || this;
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
        var context = this.toJSON();
        if (!(context.modal instanceof Modal)) {
            return Promise.reject(new Error('Configuration Error: modal service not set.'));
        }
        var overlayConfig = {
            context: context,
            renderer: new JSNativeModalRenderer(),
            viewContainer: viewContainer,
            bindings: typeof this.$$beforeOpen === 'function' && this.$$beforeOpen(context)
        };
        return context.modal.open(context.component, overlayConfig);
    };
    return JSNativePresetBuilder;
}(JSNativeModalContextBuilder));
export { JSNativePresetBuilder };
//# sourceMappingURL=js-native-preset.js.map