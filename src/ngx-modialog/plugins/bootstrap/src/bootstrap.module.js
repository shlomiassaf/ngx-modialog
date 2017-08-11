var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule, Modal as BaseModal } from 'ngx-modialog';
import { Modal } from './modal';
import { BSModalContainer } from './modal-container.component';
import { BSMessageModal, BSMessageModalTitle, BSMessageModalBody, BSModalFooter } from './message-modal.component';
export var providers = [
    { provide: BaseModal, useClass: Modal },
    { provide: Modal, useClass: Modal }
];
var BootstrapModalModule = (function () {
    function BootstrapModalModule() {
    }
    BootstrapModalModule.getProviders = function () {
        return providers;
    };
    BootstrapModalModule = __decorate([
        NgModule({
            imports: [ModalModule, CommonModule],
            declarations: [
                BSModalFooter,
                BSMessageModalTitle,
                BSMessageModalBody,
                BSMessageModal,
                BSModalContainer
            ],
            providers: providers,
            entryComponents: [
                BSModalContainer,
                BSMessageModal
            ]
        })
    ], BootstrapModalModule);
    return BootstrapModalModule;
}());
export { BootstrapModalModule };
//# sourceMappingURL=bootstrap.module.js.map