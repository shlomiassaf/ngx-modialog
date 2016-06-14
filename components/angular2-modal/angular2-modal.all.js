"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = require('@angular/core');
var tokens_1 = require('./models/tokens');
var modal_1 = require('./providers/modal');
var dom_modal_renderer_1 = require('./providers/dom-modal-renderer');
__export(require('./framework/fluent-assign'));
__export(require('./models/tokens'));
__export(require('./models/dialog-ref'));
__export(require('./models/modal-context'));
__export(require('./models/modal-open-context'));
var modal_2 = require('./providers/modal');
exports.Modal = modal_2.Modal;
var dom_modal_renderer_2 = require('./providers/dom-modal-renderer');
exports.DOMModalRenderer = dom_modal_renderer_2.DOMModalRenderer;
exports.MODAL_PROVIDERS = [
    new core_1.Provider(modal_1.Modal, { useClass: modal_1.Modal }),
    new core_1.Provider(tokens_1.ModalRenderer, { useClass: dom_modal_renderer_1.DOMModalRenderer })
];
var bootstrap = require('./plugins/bootstrap/index');
var vex = require('./plugins/vex/index');
exports.plugins = { bootstrap: bootstrap, vex: vex };
//# sourceMappingURL=angular2-modal.all.js.map