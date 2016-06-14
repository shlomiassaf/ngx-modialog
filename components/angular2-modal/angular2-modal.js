"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require('./framework/fluent-assign'));
var dialog_ref_1 = require('./models/dialog-ref');
exports.DialogRef = dialog_ref_1.DialogRef;
var tokens_1 = require('./models/tokens');
exports.DROP_IN_TYPE = tokens_1.DROP_IN_TYPE;
exports.ModalDropInFactory = tokens_1.ModalDropInFactory;
exports.ModalBackdropComponent = tokens_1.ModalBackdropComponent;
exports.ModalCompileConfig = tokens_1.ModalCompileConfig;
exports.ModalRenderer = tokens_1.ModalRenderer;
var modal_1 = require('./providers/modal');
exports.Modal = modal_1.Modal;
var dom_modal_renderer_1 = require('./providers/dom-modal-renderer');
exports.DOMModalRenderer = dom_modal_renderer_1.DOMModalRenderer;
var modal_context_1 = require('./models/modal-context');
exports.DEFAULT_VALUES = modal_context_1.DEFAULT_VALUES;
exports.ModalContext = modal_context_1.ModalContext;
exports.ModalContextBuilder = modal_context_1.ModalContextBuilder;
var modal_open_context_1 = require('./models/modal-open-context');
exports.ModalOpenContext = modal_open_context_1.ModalOpenContext;
exports.ModalOpenContextBuilder = modal_open_context_1.ModalOpenContextBuilder;
/**
 * Deprecated, use platform based providers.
 * @type {Array}
 */
exports.MODAL_PROVIDERS = [];
//# sourceMappingURL=angular2-modal.js.map