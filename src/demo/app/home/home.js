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
import { InAppModalModule, Modal } from './in-app-plugin/index';
var Home = (function () {
    function Home(modal) {
        this.modal = modal;
    }
    Home.prototype.ngAfterViewInit = function () {
        this.modal.alert()
            .title('Angular 2 Modal')
            .templateRef(this.myTemplate)
            .inElement(true)
            .open('home-overlay-container')
            .then(function (d) { return d.result; })
            .catch(function (e) {
            console.log('This message should appear if you navigate away from the home page.');
            console.log('If a modal is opened in a view container within a component that is the page or' +
                'part of the page, navigation will destroy the page thus destroy the modal. To prevent ' +
                'memory leaks and unexpected behavior a "DialogBailOutError" error is thrown.');
            console.log(e);
        });
    };
    __decorate([
        ViewChild('myTemplate', { read: TemplateRef }),
        __metadata("design:type", TemplateRef)
    ], Home.prototype, "myTemplate", void 0);
    Home = __decorate([
        Component({
            selector: 'home',
            providers: InAppModalModule.getProviders(),
            templateUrl: './home.tpl.html',
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [Modal])
    ], Home);
    return Home;
}());
export { Home };
//# sourceMappingURL=home.js.map