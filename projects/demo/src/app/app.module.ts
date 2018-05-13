import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-modialog';

import { SharedModule } from './shared.module';
import { VexDemoModule } from './vex-demo/vex-demo.module';
import { JSNativeDemoModule } from './js-native-demo/js-native-demo.module';

import { App } from './app.component';
import { Home } from './home/home';
import { DocumentationComponent } from './documentation/documentation.component';
import { routes } from './app.routes';
import { InAppModalModule } from './home/in-app-plugin/index';

@NgModule({
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
  declarations: [ App, Home, DocumentationComponent ],
  bootstrap:    [ App ]
})
export class AppModule { }
