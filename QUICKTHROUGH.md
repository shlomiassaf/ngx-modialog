# A Quick walkthrough

#### Install **angular2-modal**:
```
    npm install angular2-modal --save
```

#### Configure root element
```ts
import { Component, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';

@Component({
  selector: 'my-app',
  template: `<button (click)="onClick()">Alert</button>`
})
export class AppComponent {
  constructor(overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal) {
    overlay.defaultViewContainer = vcRef;
  }
  
  onClick() {
    this.modal.alert()
        .size('lg')
        .showClose(true)
        .title('A simple Alert style modal window')
        .body(`
            <h4>Alert is a classic (title/body/footer) 1 button modal window that 
            does not block.</h4>
            <b>Configuration:</b>
            <ul>
                <li>Non blocking (click anywhere outside to dismiss)</li>
                <li>Size large</li>
                <li>Dismissed with default keyboard key (ESC)</li>
                <li>Close wth button click</li>
                <li>HTML content</li>
            </ul>`)
        .open();
  }
}
```

#### Declare application module
```ts
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

import { AppComponent }   from './app.component';

@NgModule({
  imports: [ 
    BrowserModule, 
    ModalModule.forRoot(),
    BootstrapModalModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

```
#### Bootstrap you application
```ts
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// The app module
import { AppModule } from './app.module';

// Compile and launch the module
platformBrowserDynamic().bootstrapModule(AppModule);
```



#### Opening a modal using the open() method
Drop in's are nice for quick interaction with modals, however in some cases we need more control.  
For this we can use the `open()` method, which is used by all drop in's internally.


