# Angular 2 (rc.0): Modal/Dialog window (with Bootstrap presets).

A fully generic, customizable and fluent modal window implementation for Angular 2 with built in Bootstrap support.  
Generic means it can support any CSS framework or be a standalone, supply a Component, replace some Tokens and add some presets (optional) and you have an identical fluent API modal for your framework of choice.

>**DISCLAIMER**
Angular 2 is still in the works. The core concepts are solid, but the API may change. If you find that a code snippet that does not work, please message me, and I will update.
 
## Built with angular 2 rc.0

## Breaking changing from 0.1.4 to 0.1.5 (angular2 beta 15 to beta 17 and beyond)
See [here](https://github.com/shlomiassaf/angular2-modal/tree/master/CHANGELOG.md)

## Note: Next major version, 1.0.0
The next major version of angular2-modal will be ui platform/framework agnostic.

UI platforms/framework will describe their UI implementation and register with `angular2-modal` via angular's DI module.  
This means virtually any modal implementation out there can be ported into `angular2-modal`.
`angular2-modal' will come with some built in UI platforms, external UI platform can be added in the future or externally used using NPM modules.

`angular2-modal` makes heavy use of angular's dependency injection module to provide abstraction around modal creation so creating a plugin is straight forward.
This will also make customization a lot easier.
##### The current beta of 1.0.0 implements the following UI platforms:
  
  * Bootstrap's modal
  * [Vex](http://github.hubspot.com/vex/docs/welcome/) (WIP) 
  * POC implementation of JS Native modal (window.alert/prompt/confirm) to demonstrate a hostile takeover :)

Developer's using ES6 modules will import the providers for the UI platform of their choice.

End users of `angular2-modal` should expect mild breaking API changes in 1.0.0   
If you are currently extending `angular2-modal` you should expect some refactoring of your work. 1.0.0 include changes in:
  * File structure (UI platform holds it's own presets...)
  * File naming convention (moving to snake-case)
  * The logic to extend `angular2-modal`
  
1.0.0 is 70% complete.  
 
## Features  

  - Easy to use API via Fluent API Presets (alert, propmt, confirm)
  - Fully customizable.
  - Easily add your own Presets.  
  - Select cancel/quit key.  
  - Cascading.  
  - Element blocking.  
  - Blocking / Non blocking modal.  
  - Modal as a component, replace the content by supplying a custom component.
  - Built-in bootstrap implementation.
  - Bootstrap model size configurable.
  

That's how easy it is:  
```
modal.alert()
    .title('Hello World')
    .body('In Angular 2')
    .open();
```


Click for the [Demo](http://shlomiassaf.github.io/angular2-modal/) Make sure to check the [code generator!](http://shlomiassaf.github.io/angular2-modal#/customizeModals)  
If you're looking for a SystemJS demo, please see [this plunker](http://plnkr.co/edit/FnGdwU)  
Click for the auto generated [Docs](http://shlomiassaf.github.io/angular2-modal/docs)   

![Code Generator!](/preview.png)

### Blog post will be up soon! look for it in my [Blog](http://blog.assaf.co/)

See [src/demo](https://github.com/shlomiassaf/angular2-modal/tree/master/src/demo) for demo app with examples.

Will try to add documented examples if time allows.


## Installation
```
    npm install angular2-modal --save
```

## Running locally
    git clone https://github.com/shlomiassaf/angular2-modal.git  
    npm install  
    typings install  
    webpack-dev-server // development, webpack -p to build.  
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

## Bootstrap free / ShadowDOM
Make it fly solo....

## Support for custom backdrops. 
