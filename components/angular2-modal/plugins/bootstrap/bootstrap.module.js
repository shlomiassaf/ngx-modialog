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
var angular2_modal_1 = require("angular2-modal");
var modal_1 = require('./modal');
var modal_container_component_1 = require('./modal-container.component');
var message_modal_component_1 = require('./message-modal.component');
function getProviders() {
    return [
        { provide: angular2_modal_1.Modal, useClass: modal_1.Modal },
        { provide: modal_1.Modal, useClass: modal_1.Modal }
    ];
}
var BootstrapModalModule = (function () {
    function BootstrapModalModule() {
    }
    BootstrapModalModule.getProviders = function () {
        return getProviders();
    };
    BootstrapModalModule = __decorate([
        core_1.NgModule({
            imports: [angular2_modal_1.ModalModule, common_1.CommonModule],
            declarations: [
                modal_container_component_1.BSModalContainer,
                message_modal_component_1.BSMessageModal,
                message_modal_component_1.BSMessageModalTitle,
                message_modal_component_1.BSMessageModalBody,
                message_modal_component_1.BSModalFooter
            ],
            providers: getProviders(),
            entryComponents: [
                modal_container_component_1.BSModalContainer,
                message_modal_component_1.BSMessageModal
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], BootstrapModalModule);
    return BootstrapModalModule;
}());
exports.BootstrapModalModule = BootstrapModalModule;
//# sourceMappingURL=bootstrap.module.js.map