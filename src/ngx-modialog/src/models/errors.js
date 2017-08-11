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
var DialogBailOutError = (function (_super) {
    __extends(DialogBailOutError, _super);
    function DialogBailOutError(value) {
        var _this = _super.call(this) || this;
        if (!value) {
            value = 'Dialog was forced to close by an unknown source.';
        }
        _this.message = value;
        return _this;
    }
    return DialogBailOutError;
}(Error));
export { DialogBailOutError };
//# sourceMappingURL=errors.js.map