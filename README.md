# UPDATE: Angular 2 Modal version 1 is out.

# Angular 2 (rc.1): AIO Modal / Dialog window 

A fully generic, customizable and fluent modal window implementation for Angular.
`angular2-modal` is UI platform/framework agnostic, **plugins**** are used to describe a UI implementation (e.g: Bootstrap)  
This means virtually any modal implementation out there can be ported into `angular2-modal`.
`angular2-modal` will come with some built in UI platforms, external UI platform can be added in the future or externally used using NPM modules.

See the DEMO: [shlomiassaf.github.io/angular2-modal](http://shlomiassaf.github.io/angular2-modal/)


## Built in plugins:
  * [Bootstrap]()
  * [Vex](http://github.hubspot.com/vex/docs/welcome/)
  * POC implementation of JS Native modal (window.alert/prompt/confirm) to demonstrate a hostile takeover :)
  
  
## Built with angular 2 rc.1

## Features  

  - Easy to use API via Fluent API Presets (alert, propmt, confirm)
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
If you're looking for a SystemJS demo, please see [this plunker](http://plnkr.co/edit/FnGdwU)  

![Code Generator!](/preview.png)

See [src/demo](https://github.com/shlomiassaf/angular2-modal/tree/master/src/demo) for demo app with examples.

## Installation
```
    npm install angular2-modal --save
```

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

## Publishing
Publishing is done using the TypeScript compiler directly (no webpack)
The process involves compiling into a directory called `dist`
Webpack is using the `build` directory.
Since I didn't find a way to instruct `tsc` what config file to use (i.e: a different tsconfig.json)
I created a `publish` directory instead and set the `--project` argument accordingly.

# Issues and TODO's
## Animation
Not so complicated but not in angular 2 at the moment.
## Overlay
Switch to material2 overlay implementation when done.