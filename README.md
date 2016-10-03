# Update
Version 1.1.2 & 2.0.0-beta.3 now support UMD bundles.
Version 2.0.0-beta.14 now supports AoT compilation.

# Angular 2: AIO Modal / Dialog window

A fully generic, customizable and fluent modal window implementation for Angular.
`angular2-modal` is UI platform/framework agnostic, **plugins**** are used to describe a UI implementation (e.g: Bootstrap)  
This means virtually any modal implementation out there can be ported into `angular2-modal`.
`angular2-modal` will come with some built in UI platforms, external UI platform can be added in the future or externally used using NPM modules.

See the DEMO: [shlomiassaf.github.io/angular2-modal](http://shlomiassaf.github.io/angular2-modal/)

## Quick walk through
Take 5 minutes to read a [quick walk through](https://github.com/shlomiassaf/angular2-modal/tree/master/QUICKTHROUGH.md) with samples of how to use **Angular 2 Modal**

## Built in plugins:
  * [Bootstrap]()
  * [Vex](http://github.hubspot.com/vex/docs/welcome/)
  * POC implementation of JS Native modal (window.alert/prompt/confirm) to demonstrate a hostile takeover :)


## Built with angular 2

## Features  

  - Easy to use API via Fluent API Presets (alert, propmt, confirm)
  - Can render Component's, TemplateRef's and literal string
  - Extendable via plugins.  

#### Bootstrap / VEX
  - Customizable with components, Presets and more...  
  - Select cancel/quit key.
  - Cascading modals.  
  - Element blocking.  
  - Blocking / Non blocking modal.  
  - Modal as a component, replace the content by supplying a custom component.   


That's how easy it is:  
```
modal.alert()
    .title('Hello World')
    .body('In Angular 2')
    .open();
```

Click [HERE](https://github.com/shlomiassaf/angular2-modal/tree/master/QUICKTHROUGH.md) for a quick walkthrough  
Click for the [Demo](http://shlomiassaf.github.io/angular2-modal/) Make sure to check the [code generator!](http://shlomiassaf.github.io/angular2-modal#/bootstrap-demo/customizeModals)  

## Plunker
Use [this plunker](http://plnkr.co/edit/ZAZqZu?p=preview) for quick showcasing and issue reports.


## Sample code: Custom Modal dialog
http://embed.plnkr.co/mbPzd8/

http://embed.plnkr.co/ZAZqZu/   (version 1.1.1)


![Code Generator!](/preview.png)

See [src/demo](https://github.com/shlomiassaf/angular2-modal/tree/master/src/demo) for demo app with examples.

## Installation
```
    npm install angular2-modal --save
```

## SystemJS
See systemJS example in [this plunker](http://embed.plnkr.co/mbPzd8/)
Include both module and UMD bundle approach

## Plugins
Plugins serve as a concrete UI implementation for a modal. It can be an implementation for a known library (e.g: bootstrap) or something unique.  
While `angular2-modal` has some built in plugins it is also possible to use external plugins from NPM, if someone decide to build one.



## Running locally
    git clone https://github.com/shlomiassaf/angular2-modal.git  
    npm install  
    typings install  
    npm run start
    browse to localhost:3000  

You can apply custom modals based on components.


# Issues and TODO's
## ~~Declarative modal component~~ IMPLEMENTED
~~Create a modal from declarative template syntax~~  


## ~~Animation~~ IMPLEMENTED
~~Not so complicated but not in angular 2 at the moment.~~  



## ~~Overlay~~ IMPLEMENTED
~~Switch to material2 overlay implementation when done.~~  



## ~~Bundle~~ IMPLEMENTED
~~Build a umd bundle.~~  



## ~~Base support~~ IMPLEMENTED
~~Provide base classes for generic components~~  


## Unit & E2E test
Add tests...
## Support Universal
Test against `universal-starter` to enable universal support.
## Support Change detection
Support `OnPush` with an observable api model (fluent observables)

# Known bugs
### The dialog closes when removing the target DOM element in a click event
ref [issue#111](https://github.com/shlomiassaf/angular2-modal/issues/111)

To avoid this problem use `event.stopPropagation();` or put the element removal inside a `setTimeout` call
