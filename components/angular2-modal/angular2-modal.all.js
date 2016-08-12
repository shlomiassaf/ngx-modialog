"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = require('@angular/core');
var tokens_1 = require('./models/tokens');
var providers_1 = require('./providers');
__export(require('./framework/fluent-assign'));
__export(require('./models/tokens'));
__export(require('./models/dialog-ref'));
__export(require('./models/modal-context'));
__export(require('./models/modal-open-context'));
var providers_2 = require('./providers');
exports.DOMOverlayRenderer = providers_2.DOMOverlayRenderer;
exports.Modal = providers_2.Modal;
exports.MODAL_PROVIDERS = [
    new core_1.Provider(providers_1.Modal, { useClass: providers_1.Modal }),
    new core_1.Provider(tokens_1.OverlayRenderer, { useClass: providers_1.DOMOverlayRenderer })
];
var bootstrap = require('./plugins/bootstrap/index');
var vex = require('./plugins/vex/index');
exports.plugins = { bootstrap: bootstrap, vex: vex };
//# sourceMappingURL=angular2-modal.all.js.map