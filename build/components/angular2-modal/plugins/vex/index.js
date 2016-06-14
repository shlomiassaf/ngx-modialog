"use strict";
var core_1 = require('@angular/core');
var modal_1 = require('./modal');
var angular2_modal_1 = require('../../angular2-modal');
var modal_backdrop_1 = require('./modal-backdrop');
var dropin_preset_1 = require('./presets/dropin-preset');
var modal_2 = require('./modal');
exports.Modal = modal_2.Modal;
var modal_backdrop_2 = require('./modal-backdrop');
exports.VexModalBackdrop = modal_backdrop_2.VexModalBackdrop;
var modal_content_1 = require('./modal-content');
exports.VexModalContent = modal_content_1.VexModalContent;
var modal_context_1 = require('./modal-context');
exports.VEXModalContext = modal_context_1.VEXModalContext;
exports.VEXModalContextBuilder = modal_context_1.VEXModalContextBuilder;
var dropin_preset_2 = require('./presets/dropin-preset');
exports.DropInPreset = dropin_preset_2.DropInPreset;
exports.DropInPresetBuilder = dropin_preset_2.DropInPresetBuilder;
var dialog_form_modal_1 = require('./dialog-form-modal');
exports.DialogFormModal = dialog_form_modal_1.DialogFormModal;
exports.FormDropIn = dialog_form_modal_1.FormDropIn;
exports.VEXDialogButtons = dialog_form_modal_1.VEXDialogButtons;
var dialog_preset_1 = require('./presets/dialog-preset');
exports.DialogPreset = dialog_preset_1.DialogPreset;
exports.DialogPresetBuilder = dialog_preset_1.DialogPresetBuilder;
var dropInFactory = {
    alert: function (modal) { return new dropin_preset_1.DropInPresetBuilder(modal, angular2_modal_1.DROP_IN_TYPE.alert, { isBlocking: false }); },
    prompt: function (modal) { return new dropin_preset_1.DropInPresetBuilder(modal, angular2_modal_1.DROP_IN_TYPE.prompt, { isBlocking: true, keyboard: null }); },
    confirm: function (modal) { return new dropin_preset_1.DropInPresetBuilder(modal, angular2_modal_1.DROP_IN_TYPE.confirm, { isBlocking: true, keyboard: null }); }
};
exports.VEX_MODAL_PROVIDERS = angular2_modal_1.MODAL_PROVIDERS.concat([
    new core_1.Provider(angular2_modal_1.Modal, { useClass: modal_1.Modal }),
    new core_1.Provider(modal_1.Modal, { useClass: modal_1.Modal }),
    new core_1.Provider(angular2_modal_1.ModalBackdropComponent, { useValue: modal_backdrop_1.VexModalBackdrop }),
    new core_1.Provider(angular2_modal_1.ModalDropInFactory, { useValue: dropInFactory })
]);
//# sourceMappingURL=index.js.map