import { NgModule }      from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { ModalModule } from '../../components/angular2-modal';

import { routing } from './app.routes';
import { BootstrapDemoModule } from './bootstrap-demo/bootstrap-demo.module';
import { App }  from './app';
import { Home } from './home/home';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    ModalModule.forRoot(),
    BootstrapDemoModule
  ],
  declarations: [ App, Home ],
  bootstrap:    [ App ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ]
})
export class AppModule { }
