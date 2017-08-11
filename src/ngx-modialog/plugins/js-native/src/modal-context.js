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
import { DROP_IN_TYPE, ModalOpenContextBuilder, ModalOpenContext, arrayUnion } from 'ngx-modialog';
var DEFAULT_SETTERS = [
    'promptDefault'
];
var JSNativeModalContext = (function (_super) {
    __extends(JSNativeModalContext, _super);
    function JSNativeModalContext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JSNativeModalContext.prototype.normalize = function () {
        if (!this.message)
            this.message = '';
        if (this.dialogType === undefined)
            this.dialogType = DROP_IN_TYPE.alert;
    };
    return JSNativeModalContext;
}(ModalOpenContext));
export { JSNativeModalContext };
var JSNativeModalContextBuilder = (function (_super) {
    __extends(JSNativeModalContextBuilder, _super);
    function JSNativeModalContextBuilder(defaultValues, initialSetters, baseType) {
        if (defaultValues === void 0) { defaultValues = undefined; }
        if (initialSetters === void 0) { initialSetters = undefined; }
        if (baseType === void 0) { baseType = undefined; }
        return _super.call(this, defaultValues || {}, arrayUnion(DEFAULT_SETTERS, initialSetters || []), baseType || JSNativeModalContext
        // https://github.com/Microsoft/TypeScript/issues/7234
        ) || this;
    }
    return JSNativeModalContextBuilder;
}(ModalOpenContextBuilder));
export { JSNativeModalContextBuilder };
//# sourceMappingURL=modal-context.js.map