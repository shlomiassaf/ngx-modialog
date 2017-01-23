import { NgModule }      from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'angular2-modal';

import { SharedModule } from './shared.module';
import { BootstrapDemoModule } from './bootstrap-demo/bootstrap-demo.module';
import { VexDemoModule } from './vex-demo/vex-demo.module';
import { JSNativeDemoModule } from './js-native-demo/js-native-demo.module';

import { App }  from './app';
import { Home } from './home/home';
import { routes } from './app.routes';
import { InAppModalModule } from './home/in-app-plugin/index';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: PreloadAllModules }),
    SharedModule.forRoot(),
    ModalModule.forRoot(),
    BootstrapDemoModule,
    VexDemoModule,
    JSNativeDemoModule,
    InAppModalModule
  ],
  declarations: [ App, Home ],
  bootstrap:    [ App ]
})
export class AppModule { }
