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
var common_1 = require('@angular/common');
var shared_module_1 = require('../shared.module');
var js_native_1 = require("angular2-modal/plugins/js-native");
var js_native_demo_routes_1 = require('./js-native-demo.routes');
var js_native_demo_1 = require('./js-native-demo');
var JSNativeDemoModule = (function () {
    function JSNativeDemoModule() {
    }
    JSNativeDemoModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, js_native_1.JSNativeModalModule, js_native_demo_routes_1.routing, shared_module_1.SharedModule],
            declarations: [js_native_demo_1.JSNativeDemo]
        }), 
        __metadata('design:paramtypes', [])
    ], JSNativeDemoModule);
    return JSNativeDemoModule;
}());
exports.JSNativeDemoModule = JSNativeDemoModule;
//# sourceMappingURL=js-native-demo.module.js.map