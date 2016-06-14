"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
(function (DROP_IN_TYPE) {
    DROP_IN_TYPE[DROP_IN_TYPE["alert"] = 0] = "alert";
    DROP_IN_TYPE[DROP_IN_TYPE["prompt"] = 1] = "prompt";
    DROP_IN_TYPE[DROP_IN_TYPE["confirm"] = 2] = "confirm";
})(exports.DROP_IN_TYPE || (exports.DROP_IN_TYPE = {}));
var DROP_IN_TYPE = exports.DROP_IN_TYPE;
var ModalCompileConfig = (function () {
    function ModalCompileConfig(component, bindings) {
        this.component = component;
        this.bindings = bindings;
    }
    return ModalCompileConfig;
}());
exports.ModalCompileConfig = ModalCompileConfig;
var ModalRenderer = (function () {
    function ModalRenderer() {
    }
    return ModalRenderer;
}());
exports.ModalRenderer = ModalRenderer;
var ModalBackdropComponent = (function (_super) {
    __extends(ModalBackdropComponent, _super);
    function ModalBackdropComponent() {
        _super.apply(this, arguments);
    }
    return ModalBackdropComponent;
}(core_1.Type));
exports.ModalBackdropComponent = ModalBackdropComponent;
var ModalDropInFactory = (function () {
    function ModalDropInFactory() {
    }
    return ModalDropInFactory;
}());
exports.ModalDropInFactory = ModalDropInFactory;
//# sourceMappingURL=tokens.js.map