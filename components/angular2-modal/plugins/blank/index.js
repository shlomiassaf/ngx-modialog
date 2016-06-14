"use strict";
var core_1 = require('@angular/core');
var angular2_modal_1 = require('../../../../components/angular2-modal');
var modal_1 = require('./modal');
var modal_backdrop_1 = require('./modal-backdrop');
var modal_context_1 = require('./modal-context');
var dropInFactory = {
    alert: function (modal) { return new modal_context_1.BlankModalContextBuilder(modal); },
    prompt: function (modal) { return new modal_context_1.BlankModalContextBuilder(modal); },
    confirm: function (modal) { return new modal_context_1.BlankModalContextBuilder(modal); }
};
var modal_2 = require('./modal');
exports.Modal = modal_2.Modal;
var modal_context_2 = require('./modal-context');
exports.BlankModalContext = modal_context_2.BlankModalContext;
exports.BlankModalContextBuilder = modal_context_2.BlankModalContextBuilder;
exports.BLANK_MODAL_PROVIDERS = angular2_modal_1.MODAL_PROVIDERS.concat([
    new core_1.Provider(modal_1.Modal, { useClass: modal_1.Modal }),
    new core_1.Provider(angular2_modal_1.ModalBackdropComponent, { useValue: modal_backdrop_1.BlankModalBackdrop }),
    new core_1.Provider(angular2_modal_1.ModalDropInFactory, { useValue: dropInFactory })
]);
//# sourceMappingURL=index.js.map