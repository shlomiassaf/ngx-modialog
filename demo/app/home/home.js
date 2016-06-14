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
var index_1 = require('./in-app-plugin/index');
var Home = (function () {
    function Home(modal) {
        this.modal = modal;
    }
    Home.prototype.ngAfterViewInit = function () {
        this.modal.alert()
            .title('Angular 2 Modal')
            .templateRef(this.myTemplate)
            .open(this.injectVC);
    };
    __decorate([
        core_1.ViewChild('injectPoint', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], Home.prototype, "injectVC", void 0);
    __decorate([
        core_1.ViewChild('myTemplate', { read: core_1.TemplateRef }), 
        __metadata('design:type', core_1.TemplateRef)
    ], Home.prototype, "myTemplate", void 0);
    Home = __decorate([
        core_1.Component({
            selector: 'home',
            viewProviders: index_1.IN_APP_MODAL_PROVIDERS.slice(),
            template: "\n              <section id=\"intro\" class=\"text-intro\">\n                  <div class=\"container\">\n                      <div class=\"row\">\n                          <div class=\"col-md-12\" #injectPoint>\n                          </div>\n                      </div>\n                  </div>\n              </section>\n\n              <template #myTemplate>\n                  <span>UI agnostic, Plugin oriented, easy to use.</span>\n                  <div style=\"padding: 15px 20%;\"><pre class=\"text-left\"><p>modal.alert()<br>  .message('Angular 2 Modal')<br>  .open();</p></pre>\n                  </div>\n                  <div class=\"text-gray\">\n                      <sub>* This window ia a ad-hoc plugin built within the demo application.</sub>\n                      <br>\n                      <sub>It is a simple OSX style modal plugin that display's a title and a <b>TemplateRef</b> provided to it.</sub>\n                      <br>\n                      <sub>Check it out in the demo application. (home component)</sub>\n                  </div>\n              </template>\n\n              <section class=\"section no-padding-bottom\">\n                  <div class=\"container\">\n                      <div class=\"row\">\n                          <div class=\"col-md-offset-2 col-md-8\">\n                              A generic, customizable and fluent modal/dialog window implementation for Angular 2.\n                              UI platform/framework agnostic, plugins are used to describe a UI implementation (e.g: Bootstrap)\n                              This means virtually any modal implementation out there can be ported into the library.\n                              Comes with some built in UI platforms, external UI platform can be added in the future or externally used using NPM modules.\n                          </div>\n                      </div>\n                  </div>\n              </section>\n            ",
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [index_1.Modal])
    ], Home);
    return Home;
}());
exports.Home = Home;
//# sourceMappingURL=home.js.map