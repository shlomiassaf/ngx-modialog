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
import { ModalOpenContextBuilder, ModalOpenContext } from 'ngx-modialog';
var InAppModalContext = (function (_super) {
    __extends(InAppModalContext, _super);
    function InAppModalContext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InAppModalContext.prototype.normalize = function () {
        if (!this.message)
            this.message = '';
    };
    return InAppModalContext;
}(ModalOpenContext));
export { InAppModalContext };
var InAppModalContextBuilder = (function (_super) {
    __extends(InAppModalContextBuilder, _super);
    function InAppModalContextBuilder(modal) {
        return _super.call(this, { modal: modal }, ['title', 'templateRef'], InAppModalContext
        // https://github.com/Microsoft/TypeScript/issues/7234
        ) || this;
    }
    return InAppModalContextBuilder;
}(ModalOpenContextBuilder));
export { InAppModalContextBuilder };
//# sourceMappingURL=modal-context.js.map