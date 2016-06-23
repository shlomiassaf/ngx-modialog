# A Quick walkthrough

#### Install **angular2-modal**:
```
    npm install angular2-modal --save
```

#### Bootstrap you application
The important part here is to register `MODAL_BROWSER_PROVIDERS`
```ts
import {provide} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';

// Register providers for browser, this is mandatory.
import {MODAL_BROWSER_PROVIDERS} from 'angular2-modal/platform-browser';

import {App} from './app/app';


function main() {
    return bootstrap(App, [
        ...MODAL_BROWSER_PROVIDERS
        // you'r app providers here...
    ])
        .catch(err => console.error(err));
}

document.addEventListener('DOMContentLoaded', main);
```

#### Configure root element
```ts
import {Component, ViewContainerRef} from '@angular/core';
import {Modal, BS_MODAL_PROVIDERS} from 'angular2-modal/plugins/bootstrap';

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app', 
    viewProviders: [ ...BS_MODAL_PROVIDERS ],
    template: `Hello World`
})
export class App {
    constructor(public modal: Modal, viewContainer: ViewContainerRef) {
        modal.defaultViewContainer = viewContainer;
    }
}

```

In this example, we use the `bootstrap` plugin.
We import `Modal` and `BS_MODAL_PROVIDERS` from the `bootstrap` plugin.
`Modal` is imported for DI & annotation, `BS_MODAL_PROVIDERS` holds everything we need to use `angular2-modal`.  
From here on, all ancestors of our root component have access to `Modal` via DI.
  
In the constructor we set the default view container, this is done once for the whole app.
Why?  

  * A modal element does not exist until requested, the element added on demand. 
  * In `angular` adding components requires a logical UI parent.

The default view container serves as a logical UI parent for our modal.  
This can be overridden if a `ViewContainerRef` is supplied when calling one of the methods to open a modal, this happens to be the way to create a modal trapped inside an element.  
To sum up:
The default container is used to block the whole view.  
Overriding with a `ViewContainerRef` will block it, i.e: block only the element with an overlay.

#### Opening a modal
```ts
import {Component, ViewContainerRef} from '@angular/core';
import {Modal, BS_MODAL_PROVIDERS} from 'angular2-modal/plugins/bootstrap';

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app', 
    viewProviders: [ ...BS_MODAL_PROVIDERS ],
    template: `Hello World`
})
export class App {
    constructor(public modal: Modal, viewContainer: ViewContainerRef) {
        modal.defaultViewContainer = viewContainer;
    }
    
    openAlert() {
        return this.modal.alert()
                .size('lg')
                .showClose(true)
                .title('A simple Alert style modal window')
                .open();
    }
}

```

This is a demonstration of opening a modal using a drop in.
There are 3 drop in's: 
  * Alert
  * Prompt
  * Confirm
  
This is true for every plugin, however some might not implement all of them, the built in plugins support all 3 drop ins.
Plugins will probably implement different API for drop in's, here is an example for VEX:

```ts
import {Component, ViewContainerRef} from '@angular/core';
import {
    VEX_MODAL_PROVIDERS,
    Modal
} from 'angular2-modal/plugins/vex';

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app', 
    viewProviders: [ ...VEX_MODAL_PROVIDERS ],
    template: `Hello World`
})
export class App {
    constructor(public modal: Modal, viewContainer: ViewContainerRef) {
        modal.defaultViewContainer = viewContainer;
    }
    
    openAlert() {
        return this.modal.prompt()
           .className('wireframe')
           .message('Enter your name')
           .placeholder('Your name here')
           .open();
    }
}

```

#### Opening a modal using the open() method
Drop in's are nice for quick interaction with modals, however in some cases we need more control.  
For this we can use the `open()` method, which is used by all drop in's internally.


