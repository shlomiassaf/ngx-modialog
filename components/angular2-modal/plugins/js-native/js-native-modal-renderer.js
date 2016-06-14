"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var tokens_1 = require('../../models/tokens');
var JSNativeModalRenderer = (function () {
    function JSNativeModalRenderer() {
    }
    JSNativeModalRenderer.prototype.render = function (type, viewContainer, bindings, dialog) {
        var result;
        switch (dialog.context.dialogType) {
            case tokens_1.DROP_IN_TYPE.alert:
                window.alert(dialog.context.message);
                result = true;
                break;
            case tokens_1.DROP_IN_TYPE.prompt:
                result = window.prompt(dialog.context.message, dialog.context.promptDefault);
                break;
            case tokens_1.DROP_IN_TYPE.confirm:
                result = window.confirm(dialog.context.message);
                break;
        }
        dialog.destroy = function () { };
        if (result === false) {
            dialog.dismiss();
        }
        else {
            dialog.close(result);
        }
        return Promise.resolve(dialog);
    };
    JSNativeModalRenderer = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], JSNativeModalRenderer);
    return JSNativeModalRenderer;
}());
exports.JSNativeModalRenderer = JSNativeModalRenderer;
//# sourceMappingURL=js-native-modal-renderer.js.map