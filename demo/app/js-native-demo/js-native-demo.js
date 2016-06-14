"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return (c > 3 && r && Object.defineProperty(target, key, r), r);
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var js_native_1 = require("angular2-modal/plugins/js-native");
var index_1 = require('../demo-head/index');
var presets = require('./presets');
var JSNativeDemo = (function () {
    function JSNativeDemo(modal) {
        var _this = this;
        this.modal = modal;
        this.modalCommands = ['alert', 'prompt', 'confirm'].map(function (dropin) {
            return {
                text: dropin + " drop in",
                factory: function () { return presets[dropin](_this.modal).open(); }
            };
        });
    }
    JSNativeDemo = __decorate([
        core_1.Component({
            selector: 'js-native-demo',
            viewProviders: js_native_1.JS_NATIVE_MODAL_PROVIDERS.slice(),
            template: "\n              <demo-head title=\"JS Native Dialog\"\n                         description=\"A (useless?) proof of concept how to apply a different renderer, ain't angular 2 great?\"\n                         [modalCommands]=\"modalCommands\">\n              </demo-head>\n            ",
            directives: [index_1.DemoHead],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [js_native_1.Modal])
    ], JSNativeDemo);
    return JSNativeDemo;
}());
exports.JSNativeDemo = JSNativeDemo;
//# sourceMappingURL=js-native-demo.js.map