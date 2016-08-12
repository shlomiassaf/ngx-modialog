"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DialogBailOutError = (function (_super) {
    __extends(DialogBailOutError, _super);
    function DialogBailOutError(value) {
        _super.call(this);
        if (!value) {
            value = 'Dialog was forced to close by an unknown source.';
        }
        this.message = value;
    }
    return DialogBailOutError;
}(Error));
exports.DialogBailOutError = DialogBailOutError;
//# sourceMappingURL=errors.js.map