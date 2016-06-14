"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var modal_open_context_1 = require('../../models/modal-open-context');
var utils_1 = require('./../../framework/utils');
var DEFAULT_VALUES = {
    dialogClass: 'modal-dialog',
    showClose: false
};
var DEFAULT_SETTERS = [
    'dialogClass',
    'size',
    'showClose'
];
var BSModalContext = (function (_super) {
    __extends(BSModalContext, _super);
    function BSModalContext() {
        _super.apply(this, arguments);
    }
    BSModalContext.prototype.normalize = function () {
        if (!this.dialogClass) {
            this.dialogClass = DEFAULT_VALUES.dialogClass;
        }
        _super.prototype.normalize.call(this);
    };
    return BSModalContext;
}(modal_open_context_1.ModalOpenContext));
exports.BSModalContext = BSModalContext;
var BSModalContextBuilder = (function (_super) {
    __extends(BSModalContextBuilder, _super);
    function BSModalContextBuilder(defaultValues, initialSetters, baseType) {
        if (defaultValues === void 0) { defaultValues = undefined; }
        if (initialSetters === void 0) { initialSetters = undefined; }
        if (baseType === void 0) { baseType = undefined; }
        _super.call(this, utils_1.extend(DEFAULT_VALUES, defaultValues || {}), utils_1.arrayUnion(DEFAULT_SETTERS, initialSetters || []), baseType || BSModalContext // https://github.com/Microsoft/TypeScript/issues/7234
        );
    }
    return BSModalContextBuilder;
}(modal_open_context_1.ModalOpenContextBuilder));
exports.BSModalContextBuilder = BSModalContextBuilder;
//# sourceMappingURL=modal-context.js.map