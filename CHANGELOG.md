# Breaking changing from 0.1.4 to 0.1.5 (angular2 beta 15 to beta 17)

## Design
  * Angular 2s component interaction is now centered around `ViewContainerRef` which are logical units of view's, `angular2-modal` followed.
  * A default `ViewContainerRef` is needed for `angular2-modal`. This is done once (in 99%) and from there on you can forget about `ViewContainerRef`.
    This is 1 new code line, the other option was to force a mandatory element in the root template.
  * The way **dependency injection** is used is now very important.
    Since a Modal instance is paired with a default view container, every new instance of the modal requires setting a new default view container.
    This can be handy for advanced scenarios but for most cases setting the default view container once is what you should do. 
    If you set it once from in the top level component don’t request the Modal in the providers property of a component meta, if you do so you will get a new instance of `Modal`.
    **This is how a setting it once looks:**
    ```ts
    @Component({
        selector: 'app', 
        providers: [ ...MODAL_PROVIDERS], // list of angular2-modal tokens, Modal included.
        template: `
        <main>
          <router-outlet></router-outlet>
        </main>
      `
    })
    export class App {
        constructor(public modal: Modal, viewContainer: ViewContainerRef) {
            /**
             * A Default view container ref, usually the app root container ref.
             * Has to be set manually until we can find a way to get it automatically.
             */
            modal.defaultViewContainer = viewContainer;
        }
    }
    ```
    From here on, there's no need to require a new provider for `Modal`      
    So **don't** do this:
    ```ts
        @Component({
            selector: 'myComponent', 
            providers: [Modal], // results in a brand new instance of Modal
            template: `<h1>My Component></h1>`
        })
        export class MyComponent {}
    ```

## Generic type changes from angular2@2.0.0-beta.16
  * Every `ResolveProvider` is now `ResolvedReflectiveProviders`
  * Every `Injector` is now `ReflectiveInjector`

## Class changes:
#### BootstrapModalContainer: 
  * Change selector from `bootstrap-modal` to `modal-container`

#### Modal:
  * open() and openInside() now get ViewContainerRef instead of ElementRef
  * openInside() anchor parameter was removed
  * Added property defaultViewContainer, to be set on initial root app element load.

#### ModalDialogInstance: 
  * Change method dispose() to destroy()
  * Does not store a reference to Backdrop and BootstrapContainer ComponentRef
  * Destroy is now set by the Modal service, DialogRef starts with a noop destroy functionality

#### ModalAwarePreset: 
  * open method now get 1 optional parameter ViewContainerRef instead of the inside object.
    If supplied it modal will render inside that view, otherwise use the defaultViewContainer

## Demo:
Sample element is now modal agnostic, use parent component to get ViewContainerRef
