var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';
import { SharedModule } from '../shared.module';
import { routing } from './bootstrap-demo.routes';
import { BootstrapDemo } from './bootstrap-demo';
import { BootstrapDemoPage } from './bootstrap-demo-page/bootstrap-demo-page';
import { CustomModal } from './bootstrap-demo-page/custom-modal-sample';
import { ModalCustomisationWizard } from './modal-customisation-wizard/modal-customisation-wizard';
var BootstrapDemoModule = (function () {
    function BootstrapDemoModule() {
    }
    BootstrapDemoModule = __decorate([
        NgModule({
            imports: [FormsModule, CommonModule, BootstrapModalModule, routing, SharedModule],
            declarations: [
                BootstrapDemo,
                BootstrapDemoPage,
                CustomModal,
                ModalCustomisationWizard
            ],
            entryComponents: [CustomModal]
        })
    ], BootstrapDemoModule);
    return BootstrapDemoModule;
}());
export { BootstrapDemoModule };
//# sourceMappingURL=bootstrap-demo.module.js.map