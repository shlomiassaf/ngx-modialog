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
import { Modal } from '../providers/index';
import { ModalContext, ModalContextBuilder } from './modal-context';
import { arrayUnion } from '../framework/utils';
var DEFAULT_SETTERS = [
    'component'
];
var ModalOpenContext = (function (_super) {
    __extends(ModalOpenContext, _super);
    function ModalOpenContext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ModalOpenContext;
}(ModalContext));
export { ModalOpenContext };
/**
 * A Modal Context that knows about the modal service, and so can open a modal window on demand.
 * Use the fluent API to configure the preset and then invoke the 'open' method to open a modal
 * based on the context.
 */
var ModalOpenContextBuilder = (function (_super) {
    __extends(ModalOpenContextBuilder, _super);
    function ModalOpenContextBuilder(defaultValues, initialSetters, baseType) {
        if (defaultValues === void 0) { defaultValues = undefined; }
        if (initialSetters === void 0) { initialSetters = undefined; }
        if (baseType === void 0) { baseType = undefined; }
        return _super.call(this, defaultValues || {}, arrayUnion(DEFAULT_SETTERS, initialSetters || []), baseType) || this;
    }
    /**
     * Hook to alter config and return bindings.
     * @param config
     */
    ModalOpenContextBuilder.prototype.$$beforeOpen = function (config) { };
    /**
     * Open a modal window based on the configuration of this config instance.
     * @param viewContainer If set opens the modal inside the supplied viewContainer
     * @returns Promise<DialogRef>
     */
    ModalOpenContextBuilder.prototype.open = function (viewContainer) {
        var context = this.toJSON();
        if (!(context.modal instanceof Modal)) {
            return Promise.reject(new Error('Configuration Error: modal service not set.'));
        }
        this.$$beforeOpen(context);
        var overlayConfig = {
            context: context,
            viewContainer: viewContainer
        };
        return context.modal.open(context.component, overlayConfig);
    };
    return ModalOpenContextBuilder;
}(ModalContextBuilder));
export { ModalOpenContextBuilder };
//# sourceMappingURL=modal-open-context.js.map