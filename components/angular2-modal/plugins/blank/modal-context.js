"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var angular2_modal_1 = require('../../../../components/angular2-modal');
var DEFAULT_SETTERS = [
    'backdropCss',
    'overlayCss',
    'templateRef'
];
var BlankModalContext = (function (_super) {
    __extends(BlankModalContext, _super);
    function BlankModalContext() {
        _super.apply(this, arguments);
    }
    BlankModalContext.prototype.normalize = function () {
        if (!this.message)
            this.message = '';
    };
    return BlankModalContext;
}(angular2_modal_1.ModalOpenContext));
exports.BlankModalContext = BlankModalContext;
var BlankModalContextBuilder = (function (_super) {
    __extends(BlankModalContextBuilder, _super);
    function BlankModalContextBuilder(modal) {
        _super.call(this, { modal: modal }, DEFAULT_SETTERS, BlankModalContext);
    }
    return BlankModalContextBuilder;
}(angular2_modal_1.ModalOpenContextBuilder));
exports.BlankModalContextBuilder = BlankModalContextBuilder;
//# sourceMappingURL=modal-context.js.map