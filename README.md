# Angular 2: Bootstrap Modal/Dialog window.

>**DISCLAIMER**  
>
>Angular 2 is still in the works. The core concepts are solid, but the API may change. If you find that a code snippet that does not work, please message me, and I will update.
 
## Built with angular 2, alpha 26

Click for the [Demo](http://shlomiassaf.github.io/angular2-modal/)

### Blog post will be up soon! look for it in my [Blog](http://blog.assaf.co/)

See [demo/components/App/App.ts](https://github.com/shlomiassaf/angular2-modal/blob/master/demo/components/App/App.ts) for code examples.

Will try to add documented examples if time allows.

## Running locally
```
git clone https://github.com/shlomiassaf/angular2-modal.git
npm install
gulp serve
```
Open http://localhost:3005 in your browser to see the app. The webpage will automatically refresh itself as you save files inside the project.
## Developing
```
git clone https://github.com/shlomiassaf/angular2-modal.git
npm install
gulp serve
gulp watch
```
Component is in `src/BootstrapMoal`, any change will automatically trigger a build.
This is the case for the demo, where you check your changes. (Sorry, no unit tests)


# Issues and TODO's
## Animation
Not so complicated but not in angular 2 at the moment.

## Minimize DOM interaction
Angular2 is all about components, it aims to provide a high-level API so the component builders will have minimal, if any, interaction with the DOM. 
I managed to use some of the methods in `DynamicComponentLoader`, but I other failed. Specifically, I couldn't insert an element inside another using the `DynamicComponentLoader` API.
I will get back to it on next versions...
 
## Bootstrap free / ShadowDOM
Make it fly solo....

## Directive
the `open` method in `Modal` accepts an `ElementRef` object, if you supply one and configure the modal so it will show inside the element, you will get a modal bordered within an element.
If the `ElementRef` is a directive it will not work, this is related to the fact that a `Directive` doesn't have `View`. 
This will be more clear going forward... 
