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

## ~~Known issue - DI exception:~~  
Issues fixed in angular2.0-beta.6

~~If you encounter a version of the following exception:~~

```
EXCEPTION: No provider for XXXXX! (YYYYY -> XXXXX)
```

~~Where YYYYY will usually be a directive you've injected to a custom modal component you've built.~~

~~This is an error raised by angular core because it can't find a resolved providers for injectable tokens request by~~
~~the directive/s you want to use within your component.~~
~~These providers are common runtime objects that angular should know how to fetch, even if not defined.~~
~~There is a bug opend here [angular/angular#4330](https://github.com/angular/angular/issues/4330).~~

~~To workaround this issue supply these values in the resolved bindings array sent as a parameter ~~
~~to "open" or "openInside" calls.~~

    let bindings = Injector.resolve([
                provide(IterableDiffers, {useValue: this.injector.get(IterableDiffers)}),
                provide(KeyValueDiffers, {useValue: this.injector.get(KeyValueDiffers)}),
                provide(Renderer, {useValue: this.injector.get(Renderer)})
            ]);
                   
    let dialog = modal.openInside(..., ..., ..., bindings, ...);

~~click for [example](https://github.com/shlomiassaf/angular2-modal/blob/master/src/demo/app/demoPage/demoPage.ts#L58-L63)~~

~~Another workaround that might work is to supply the resolved providers as part of the bootstrap process. ~~
~~I'm not sure it will work as it depends on the life cycle logic of the injected values which I don't know deeply enough.~~
~~If you got it to work let me know.~~

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
