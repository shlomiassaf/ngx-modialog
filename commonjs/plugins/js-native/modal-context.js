"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var tokens_1 = require('../../models/tokens');
var modal_open_context_1 = require('../../models/modal-open-context');
var utils_1 = require('./../../framework/utils');
var DEFAULT_SETTERS = [
    'promptDefault'
];
var JSNativeModalContext = (function (_super) {
    __extends(JSNativeModalContext, _super);
    function JSNativeModalContext() {
        _super.apply(this, arguments);
    }
    JSNativeModalContext.prototype.normalize = function () {
        if (!this.message)
            this.message = '';
        if (this.dialogType === undefined)
            this.dialogType = tokens_1.DROP_IN_TYPE.alert;
    };
    return JSNativeModalContext;
}(modal_open_context_1.ModalOpenContext));
exports.JSNativeModalContext = JSNativeModalContext;
var JSNativeModalContextBuilder = (function (_super) {
    __extends(JSNativeModalContextBuilder, _super);
    function JSNativeModalContextBuilder(defaultValues, initialSetters, baseType) {
        if (defaultValues === void 0) { defaultValues = undefined; }
        if (initialSetters === void 0) { initialSetters = undefined; }
        if (baseType === void 0) { baseType = undefined; }
        _super.call(this, defaultValues || {}, utils_1.arrayUnion(DEFAULT_SETTERS, initialSetters || []), baseType || JSNativeModalContext);
    }
    return JSNativeModalContextBuilder;
}(modal_open_context_1.ModalOpenContextBuilder));
exports.JSNativeModalContextBuilder = JSNativeModalContextBuilder;
//# sourceMappingURL=modal-context.js.map