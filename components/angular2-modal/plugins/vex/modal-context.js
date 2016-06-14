"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var modal_open_context_1 = require('../../models/modal-open-context');
var fluent_assign_1 = require('./../../framework/fluent-assign');
var utils_1 = require('./../../framework/utils');
var DEFAULT_VALUES = {
    className: 'default',
    overlayClassName: 'vex-overlay',
    contentClassName: 'vex-content',
    closeClassName: 'vex-close'
};
var DEFAULT_SETTERS = [
    'className',
    'overlayClassName',
    'contentClassName',
    'closeClassName',
    'showCloseButton'
];
var VEXModalContext = (function (_super) {
    __extends(VEXModalContext, _super);
    function VEXModalContext() {
        _super.apply(this, arguments);
    }
    return VEXModalContext;
}(modal_open_context_1.ModalOpenContext));
exports.VEXModalContext = VEXModalContext;
var VEXModalContextBuilder = (function (_super) {
    __extends(VEXModalContextBuilder, _super);
    function VEXModalContextBuilder(defaultValues, initialSetters, baseType) {
        if (defaultValues === void 0) { defaultValues = undefined; }
        if (initialSetters === void 0) { initialSetters = undefined; }
        if (baseType === void 0) { baseType = undefined; }
        _super.call(this, utils_1.extend(DEFAULT_VALUES, defaultValues || {}), utils_1.arrayUnion(DEFAULT_SETTERS, initialSetters || []), baseType || VEXModalContext // https://github.com/Microsoft/TypeScript/issues/7234
        );
    }
    /**
     *
     * @aliasFor isBlocking
     */
    VEXModalContextBuilder.prototype.overlayClosesOnClick = function (value) {
        this[fluent_assign_1.privateKey('isBlocking')] = !value;
        return this;
    };
    return VEXModalContextBuilder;
}(modal_open_context_1.ModalOpenContextBuilder));
exports.VEXModalContextBuilder = VEXModalContextBuilder;
//# sourceMappingURL=modal-context.js.map