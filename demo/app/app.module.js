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
var platform_browser_1 = require('@angular/platform-browser');
var angular2_modal_1 = require("angular2-modal");
var shared_module_1 = require('./shared.module');
var bootstrap_demo_module_1 = require('./bootstrap-demo/bootstrap-demo.module');
var vex_demo_module_1 = require('./vex-demo/vex-demo.module');
var js_native_demo_module_1 = require('./js-native-demo/js-native-demo.module');
var app_1 = require('./app');
var home_1 = require('./home/home');
var app_routes_1 = require('./app.routes');
var index_1 = require('./home/in-app-plugin/index');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                app_routes_1.routing,
                shared_module_1.SharedModule.forRoot(),
                angular2_modal_1.ModalModule.forRoot(),
                bootstrap_demo_module_1.BootstrapDemoModule,
                vex_demo_module_1.VexDemoModule,
                js_native_demo_module_1.JSNativeDemoModule,
                index_1.InAppModalModule
            ],
            declarations: [app_1.App, home_1.Home],
            bootstrap: [app_1.App],
            providers: [
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map