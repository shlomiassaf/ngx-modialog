"use strict";
var core_1 = require('@angular/core');
var modal_1 = require('./modal');
var modal_backdrop_1 = require('./modal-backdrop');
var one_button_preset_1 = require('./presets/one-button-preset');
var two_button_preset_1 = require('./presets/two-button-preset');
var angular2_modal_1 = require('../../angular2-modal');
var modal_context_1 = require('./modal-context');
exports.BSModalContext = modal_context_1.BSModalContext;
exports.BSModalContextBuilder = modal_context_1.BSModalContextBuilder;
var modal_backdrop_2 = require('./modal-backdrop');
exports.BSModalBackdrop = modal_backdrop_2.BSModalBackdrop;
var modal_container_1 = require('./modal-container');
exports.BSModalContainer = modal_container_1.BSModalContainer;
var message_modal_1 = require('./message-modal');
exports.BSMessageModal = message_modal_1.BSMessageModal;
var modal_footer_1 = require('./modal-footer');
exports.BSModalFooter = modal_footer_1.BSModalFooter;
var message_modal_preset_1 = require('./presets/message-modal-preset');
exports.MessageModalPresetBuilder = message_modal_preset_1.MessageModalPresetBuilder;
var modal_open_context_1 = require('./../../models/modal-open-context');
exports.ModalOpenContext = modal_open_context_1.ModalOpenContext;
exports.ModalOpenContextBuilder = modal_open_context_1.ModalOpenContextBuilder;
var one_button_preset_2 = require('./presets/one-button-preset');
exports.OneButtonPresetBuilder = one_button_preset_2.OneButtonPresetBuilder;
var two_button_preset_2 = require('./presets/two-button-preset');
exports.TwoButtonPresetBuilder = two_button_preset_2.TwoButtonPresetBuilder;
var modal_2 = require('./modal');
exports.Modal = modal_2.Modal;
exports.BS_MODAL_PROVIDERS = angular2_modal_1.MODAL_PROVIDERS.concat([
    new core_1.Provider(angular2_modal_1.Modal, { useClass: modal_1.Modal }),
    new core_1.Provider(modal_1.Modal, { useClass: modal_1.Modal }),
    new core_1.Provider(angular2_modal_1.ModalBackdropComponent, { useValue: modal_backdrop_1.BSModalBackdrop }),
    new core_1.Provider(angular2_modal_1.ModalDropInFactory, { useValue: {
            alert: function (modal) { return new one_button_preset_1.OneButtonPresetBuilder(modal, { isBlocking: false }); },
            prompt: function (modal) { return new one_button_preset_1.OneButtonPresetBuilder(modal, { isBlocking: true, keyboard: null }); },
            confirm: function (modal) { return new two_button_preset_1.TwoButtonPresetBuilder(modal, { isBlocking: true, keyboard: null }); }
        } })
]);
//# sourceMappingURL=index.js.map