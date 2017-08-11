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
import { privateKey, setAssignAlias, extend, arrayUnion } from 'ngx-modialog';
import { BSMessageModal } from '../message-modal.component';
import { BSModalContextBuilder } from '../modal-context';
var DEFAULT_VALUES = {
    component: BSMessageModal,
    headerClass: 'modal-header',
    bodyClass: 'modal-body',
    footerClass: 'modal-footer'
};
var DEFAULT_SETTERS = [
    'headerClass',
    'title',
    'titleHtml',
    'bodyClass',
    'footerClass'
];
/**
 * A Preset representing the configuration needed to open MessageModal.
 * This is an abstract implementation with no concrete behaviour.
 * Use derived implementation.
 */
var MessageModalPresetBuilder = (function (_super) {
    __extends(MessageModalPresetBuilder, _super);
    function MessageModalPresetBuilder(defaultValues, initialSetters, baseType) {
        if (defaultValues === void 0) { defaultValues = undefined; }
        if (initialSetters === void 0) { initialSetters = undefined; }
        if (baseType === void 0) { baseType = undefined; }
        var _this = _super.call(this, extend(extend({ buttons: [] }, DEFAULT_VALUES), defaultValues || {}), arrayUnion(DEFAULT_SETTERS, initialSetters || []), baseType) || this;
        setAssignAlias(_this, 'body', 'message', true);
        return _this;
    }
    MessageModalPresetBuilder.prototype.addButton = function (css, caption, onClick) {
        var btn = {
            cssClass: css,
            caption: caption,
            onClick: onClick
        };
        var key = privateKey('buttons');
        this[key].push(btn);
        return this;
    };
    return MessageModalPresetBuilder;
}(BSModalContextBuilder));
export { MessageModalPresetBuilder };
//# sourceMappingURL=message-modal-preset.js.map