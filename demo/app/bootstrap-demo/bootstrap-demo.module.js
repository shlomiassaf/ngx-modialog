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
var bootstrap_1 = require("angular2-modal/plugins/bootstrap");
var shared_module_1 = require('../shared.module');
var bootstrap_demo_routes_1 = require('./bootstrap-demo.routes');
var bootstrap_demo_1 = require('./bootstrap-demo');
var bootstrap_demo_page_1 = require('./bootstrap-demo-page/bootstrap-demo-page');
var custom_modal_sample_1 = require('./bootstrap-demo-page/custom-modal-sample');
var BootstrapDemoModule = (function () {
    function BootstrapDemoModule() {
    }
    BootstrapDemoModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, bootstrap_1.BootstrapModalModule, bootstrap_demo_routes_1.routing, shared_module_1.SharedModule],
            declarations: [
                bootstrap_demo_1.BootstrapDemo,
                bootstrap_demo_page_1.BootstrapDemoPage,
                custom_modal_sample_1.CustomModal
            ],
            entryComponents: [custom_modal_sample_1.CustomModal]
        }), 
        __metadata('design:paramtypes', [])
    ], BootstrapDemoModule);
    return BootstrapDemoModule;
}());
exports.BootstrapDemoModule = BootstrapDemoModule;
//# sourceMappingURL=bootstrap-demo.module.js.map