"use strict";
(function (DROP_IN_TYPE) {
    DROP_IN_TYPE[DROP_IN_TYPE["alert"] = 0] = "alert";
    DROP_IN_TYPE[DROP_IN_TYPE["prompt"] = 1] = "prompt";
    DROP_IN_TYPE[DROP_IN_TYPE["confirm"] = 2] = "confirm";
})(exports.DROP_IN_TYPE || (exports.DROP_IN_TYPE = {}));
var DROP_IN_TYPE = exports.DROP_IN_TYPE;
var OverlayRenderer = (function () {
    function OverlayRenderer() {
    }
    return OverlayRenderer;
}());
exports.OverlayRenderer = OverlayRenderer;
//# sourceMappingURL=tokens.js.map