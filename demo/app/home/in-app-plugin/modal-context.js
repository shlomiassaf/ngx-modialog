"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var angular2_modal_1 = require("angular2-modal");
var InAppModalContext = (function (_super) {
    __extends(InAppModalContext, _super);
    function InAppModalContext() {
        _super.apply(this, arguments);
    }
    InAppModalContext.prototype.normalize = function () {
        if (!this.message)
            this.message = '';
    };
    return InAppModalContext;
}(angular2_modal_1.ModalOpenContext));
exports.InAppModalContext = InAppModalContext;
var InAppModalContextBuilder = (function (_super) {
    __extends(InAppModalContextBuilder, _super);
    function InAppModalContextBuilder(modal) {
        _super.call(this, { modal: modal }, ['title', 'templateRef'], InAppModalContext);
    }
    return InAppModalContextBuilder;
}(angular2_modal_1.ModalOpenContextBuilder));
exports.InAppModalContextBuilder = InAppModalContextBuilder;
//# sourceMappingURL=modal-context.js.map