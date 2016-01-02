# Angular 2: Bootstrap Modal/Dialog window.

>**DISCLAIMER**  
>
>Angular 2 is still in the works. The core concepts are solid, but the API may change. If you find that a code snippet that does not work, please message me, and I will update.
 
## Built with angular 2 Beta

## Features:  

  - Bootstrap model size configurable.  
  - Select cancel/quit key.  
  - Cascading.  
  - Element blocking.  
  - Blocking / Non blocking modal.  
  - Modal as a component, replace the content by supplying a custom component.  
  
Click for the [Demo](http://shlomiassaf.github.io/angular2-modal/)
Click for the auto generated [Docs](http://shlomiassaf.github.io/angular2-modal/docs)

### Blog post will be up soon! look for it in my [Blog](http://blog.assaf.co/)

See [src/demo](https://github.com/shlomiassaf/angular2-modal/tree/master/src/demo) for demo app with examples.

Will try to add documented examples if time allows.

## Running locally
    git clone https://github.com/shlomiassaf/angular2-modal.git  
    npm install  
    typings install  
    webpack-dev-server // development, webpack -p to build.  
    browse to localhost:3000  

You can apply custom modals based on components.

# Issues and TODO's
## Animation
Not so complicated but not in angular 2 at the moment.

## Module
Set webpack do build angular2-module.js as an initial webpack module (currently its not...)
This will allow using it as an input for other projects.

## ~~Minimize DOM interaction~~
~~Reduce manual DOM interaction, do more usage of `host` object in `@Component`.~~
~~Append child to the DOM using the angular 2 way, if you know tell me.~~
 
## Allow Element blocking modal to be set on any element.
Currently blocking an element requires it to have an angular template variable placed in one of his children.
This is due to the current angular implementation, as I see it.
I have yet to find an angular way of inserting a compiled element to a native element/component without effecting it.
See issue [6071](https://github.com/angular/angular/issues/6071)

## Bootstrap free / ShadowDOM
Make it fly solo....

## Support for custom backdrops. 
