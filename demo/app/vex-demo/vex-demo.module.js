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
var forms_1 = require('@angular/forms');
var vex_1 = require("angular2-modal/plugins/vex");
var shared_module_1 = require('../shared.module');
var vex_demo_routes_1 = require('./vex-demo.routes');
var vex_demo_1 = require('./vex-demo');
var login_dialog_1 = require('./login-dialog');
var VexDemoModule = (function () {
    function VexDemoModule() {
    }
    VexDemoModule = __decorate([
        core_1.NgModule({
            imports: [forms_1.FormsModule, common_1.CommonModule, vex_1.VexModalModule, vex_demo_routes_1.routing, shared_module_1.SharedModule],
            declarations: [vex_demo_1.VexDemo, login_dialog_1.LoginDialog],
            entryComponents: [login_dialog_1.LoginDialog]
        }), 
        __metadata('design:paramtypes', [])
    ], VexDemoModule);
    return VexDemoModule;
}());
exports.VexDemoModule = VexDemoModule;
//# sourceMappingURL=vex-demo.module.js.map