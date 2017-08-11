var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'angular2-modal';
import { ENV_PROVIDERS } from './environment';
import { SharedModule } from './shared.module';
import { VexDemoModule } from './vex-demo/vex-demo.module';
import { JSNativeDemoModule } from './js-native-demo/js-native-demo.module';
import { App } from './app.component';
import { Home } from './home/home';
import { routes } from './app.routes';
import { InAppModalModule } from './home/in-app-plugin/index';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            imports: [
                BrowserModule,
                BrowserAnimationsModule,
                RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: PreloadAllModules }),
                SharedModule.forRoot(),
                ModalModule.forRoot(),
                VexDemoModule,
                JSNativeDemoModule,
                InAppModalModule
            ],
            declarations: [App, Home],
            bootstrap: [App],
            providers: [
                ENV_PROVIDERS
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map