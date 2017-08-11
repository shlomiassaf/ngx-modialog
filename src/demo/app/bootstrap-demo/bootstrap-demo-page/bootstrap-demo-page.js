var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Compiler, Component, Injector, TemplateRef, ViewChild } from '@angular/core';
import { overlayConfigFactory } from "angular2-modal";
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { CustomModal } from './custom-modal-sample';
import * as presets from '../presets';
var runtimeModuleRefPromise;
var BootstrapDemoPage = (function () {
    function BootstrapDemoPage(modal, compiler, injector) {
        var _this = this;
        this.modal = modal;
        this.compiler = compiler;
        this.injector = injector;
        this.modalCommands = [
            {
                text: 'alert drop in',
                factory: function () { return presets.alert(_this.modal).open(); }
            },
            {
                text: 'prompt drop in',
                factory: function () { return presets.prompt(_this.modal).open(); }
            },
            {
                text: 'confirm drop in',
                factory: function () { return presets.confirm(_this.modal).open(); }
            },
            {
                text: 'Cascading example',
                factory: function () { return presets.cascading(_this.modal).open(); }
            },
            {
                text: 'In Element example',
                factory: function () { return presets.inElement(_this.modal).open('demo-head'); }
            },
            {
                text: 'String content',
                factory: function () { return _this.modal
                    .open('Hello modal!', overlayConfigFactory({ isBlocking: false }, BSModalContext)); }
            },
            {
                text: 'TemplateRef content',
                factory: function () { return _this.modal
                    .open(_this.templateRef, overlayConfigFactory({ isBlocking: false }, BSModalContext)); }
            },
            {
                text: 'Custom Modal content',
                factory: function () {
                    return _this.modal.open(CustomModal, overlayConfigFactory({ num1: 2, num2: 3 }, BSModalContext));
                    // we set the baseContextType to BSModalContext so the defaults for bootstrap will apply
                }
            },
        ];
    }
    __decorate([
        ViewChild('templateRef'),
        __metadata("design:type", TemplateRef)
    ], BootstrapDemoPage.prototype, "templateRef", void 0);
    BootstrapDemoPage = __decorate([
        Component({
            selector: 'bootstrap-demo-page',
            styleUrls: ['./bootstrap-demo-page.css'],
            templateUrl: './bootstrap-demo-page.tpl.html'
        }),
        __metadata("design:paramtypes", [Modal, Compiler, Injector])
    ], BootstrapDemoPage);
    return BootstrapDemoPage;
}());
export { BootstrapDemoPage };
//# sourceMappingURL=bootstrap-demo-page.js.map