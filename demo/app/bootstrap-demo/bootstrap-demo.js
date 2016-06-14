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
var router_deprecated_1 = require('@angular/router-deprecated');
var index_1 = require("angular2-modal/plugins/bootstrap/index");
var bootstrap_demo_page_1 = require('./bootstrap-demo-page/bootstrap-demo-page');
var modal_customisation_wizard_1 = require('./modal-customisation-wizard/modal-customisation-wizard');
var BootstrapDemo = (function () {
    function BootstrapDemo(modal, viewContainer) {
        this.modal = modal;
        /**
         * A Default view container ref, usually the app root container ref.
         * Has to be set manually until we can find a way to get it automatically.
         */
        modal.defaultViewContainer = viewContainer;
    }
    BootstrapDemo = __decorate([
        core_1.Component({
            selector: 'bootstrap-demo',
            viewProviders: index_1.BS_MODAL_PROVIDERS.slice(),
            template: "<router-outlet></router-outlet>",
            directives: [router_deprecated_1.RouterOutlet],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        router_deprecated_1.RouteConfig([
            { path: '/', component: bootstrap_demo_page_1.BootstrapDemoPage, name: 'BootstrapDemo', useAsDefault: true },
            { path: '/customizeModals', component: modal_customisation_wizard_1.ModalCustomisationWizard, name: 'CustomizeModals' },
        ]), 
        __metadata('design:paramtypes', [index_1.Modal, core_1.ViewContainerRef])
    ], BootstrapDemo);
    return BootstrapDemo;
}());
exports.BootstrapDemo = BootstrapDemo;
//# sourceMappingURL=bootstrap-demo.js.map