"use strict";
var core_1 = require('@angular/core');
var modal_1 = require('./modal');
var js_native_modal_renderer_1 = require('./js-native-modal-renderer');
var js_native_preset_1 = require('./presets/js-native-preset');
var angular2_modal_1 = require('../../angular2-modal');
var modal_2 = require('./modal');
exports.Modal = modal_2.Modal;
var modal_context_1 = require('./modal-context');
exports.JSNativeModalContext = modal_context_1.JSNativeModalContext;
exports.JSNativeModalContextBuilder = modal_context_1.JSNativeModalContextBuilder;
var js_native_modal_renderer_2 = require('./js-native-modal-renderer');
exports.JSNativeModalRenderer = js_native_modal_renderer_2.JSNativeModalRenderer;
var js_native_preset_2 = require('./presets/js-native-preset');
exports.JSNativePresetBuilder = js_native_preset_2.JSNativePresetBuilder;
exports.JS_NATIVE_MODAL_PROVIDERS = angular2_modal_1.MODAL_PROVIDERS.concat([
    new core_1.Provider(angular2_modal_1.Modal, { useClass: modal_1.Modal }),
    new core_1.Provider(modal_1.Modal, { useClass: modal_1.Modal }),
    new core_1.Provider(angular2_modal_1.ModalRenderer, { useClass: js_native_modal_renderer_1.JSNativeModalRenderer }),
    new core_1.Provider(angular2_modal_1.ModalBackdropComponent, { useValue: {} }),
    new core_1.Provider(angular2_modal_1.ModalDropInFactory, { useValue: {
            alert: function (modal) { return new js_native_preset_1.JSNativePresetBuilder(modal, angular2_modal_1.DROP_IN_TYPE.alert); },
            prompt: function (modal) { return new js_native_preset_1.JSNativePresetBuilder(modal, angular2_modal_1.DROP_IN_TYPE.prompt); },
            confirm: function (modal) { return new js_native_preset_1.JSNativePresetBuilder(modal, angular2_modal_1.DROP_IN_TYPE.confirm); }
        } })
]);
//# sourceMappingURL=index.js.map