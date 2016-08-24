import { NgModule }      from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from '../../components/angular2-modal';

import { SharedModule } from './shared.module';
import { BootstrapDemoModule } from './bootstrap-demo/bootstrap-demo.module';
import { VexDemoModule } from './vex-demo/vex-demo.module';
import { NiftyDemoModule } from './nifty-demo/nifty-demo.module';
import { JSNativeDemoModule } from './js-native-demo/js-native-demo.module';

import { App }  from './app';
import { Home } from './home/home';
import { routing } from './app.routes';
import { InAppModalModule } from './home/in-app-plugin/index';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    SharedModule.forRoot(),
    ModalModule.forRoot(),
    BootstrapDemoModule,
    VexDemoModule,
    NiftyDemoModule,
    JSNativeDemoModule,
    InAppModalModule
  ],
  declarations: [ App, Home ],
  bootstrap:    [ App ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ]
})
export class AppModule { }
