var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewEncapsulation, ViewChild, TemplateRef } from '@angular/core';
import { overlayConfigFactory } from "angular2-modal";
import { Modal, DialogPresetBuilder, VEXModalContext, providers } from 'angular2-modal/plugins/vex';
import { DemoHead } from '../demo-head/index';
import * as presets from './presets';
import { LoginDialog } from './login-dialog';
var VexDemo = (function () {
    function VexDemo(modal) {
        var _this = this;
        this.modal = modal;
        this.theme = 'default';
        this.modalCommands = [
            {
                text: 'alert drop in',
                factory: function () { return presets.alert.call(_this, _this.modal).open(); }
            },
            {
                text: 'prompt drop in',
                factory: function () { return presets.prompt.call(_this, _this.modal).open(); }
            },
            {
                text: 'confirm drop in',
                factory: function () { return presets.confirm.call(_this, _this.modal).open(); }
            },
            {
                text: 'Cascading example',
                factory: function () { return presets.cascading.call(_this, _this.modal).open(); }
            },
            {
                text: 'In Element example',
                factory: function () { return presets.alert.call(_this, _this.modal).inElement(true).open('demo-head'); }
            },
            {
                text: 'String content',
                factory: function () { return _this.modal
                    .open('Hello modal!', overlayConfigFactory({ isBlocking: false }, VEXModalContext)); }
            },
            {
                text: 'TemplateRef content',
                factory: function () { return _this.modal
                    .open(_this.templateRef, overlayConfigFactory({ isBlocking: false }, VEXModalContext)); }
            },
            {
                text: 'Custom Modal example',
                factory: function () {
                    return new DialogPresetBuilder(_this.modal)
                        .className(_this.theme)
                        .content(LoginDialog)
                        .message('Ary you coming to the event?')
                        .addOkButton('Yep!')
                        .addButton('vex-dialog-button-primary vex-dialog-button', 'Maybe?', function (cmp, $event) { return cmp.dialog.close('Maybe'); })
                        .addCancelButton('Nope!')
                        .open();
                }
            },
            {
                text: 'no buttons',
                factory: function () { return presets.noButtons.call(_this, _this.modal).open(); }
            },
            {
                text: 'custom buttons',
                factory: function () { return presets.customButtons.call(_this, _this.modal).open(); }
            }
        ];
    }
    __decorate([
        ViewChild(DemoHead),
        __metadata("design:type", DemoHead)
    ], VexDemo.prototype, "demoHead", void 0);
    __decorate([
        ViewChild('templateRef'),
        __metadata("design:type", TemplateRef)
    ], VexDemo.prototype, "templateRef", void 0);
    VexDemo = __decorate([
        Component({
            selector: 'vex-demo',
            styleUrls: [
                './css/vex.css',
                './css/vex-theme-default.css',
                './css/vex-theme-os.css',
                './css/vex-theme-plain.css',
                './css/vex-theme-wireframe.css',
                './css/vex-theme-flat-attack.css',
                './css/vex-theme-top.css',
                './css/vex-theme-bottom-right-corner.css'
            ],
            templateUrl: './vex-demo.tpl.html',
            // We override providers set by the Module since this app is using multiple module plugins
            // (js-native, vex, bootstrap) which messes up the provider tree (last plugin wins)
            // usually an app will use one plugin and this line is not needed.
            providers: providers,
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [Modal])
    ], VexDemo);
    return VexDemo;
}());
export { VexDemo };
//# sourceMappingURL=vex-demo.js.map