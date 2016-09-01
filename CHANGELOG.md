<a name="2.0.0-beta.12"></a>
# [2.0.0-beta.12](https://github.com/shlomiassaf/angular2-modal/compare/2.0.0-beta.11...v2.0.0-beta.12) (2016-09-01)


### Bug Fixes

* **bootstrap:** removed the dependency of the FormModule in the prompt modal ([07fcce8](https://github.com/shlomiassaf/angular2-modal/commit/07fcce8))
* remove `Renderer` use in the `Modal` service, create projetables in the overlay component ([71a5c2c](https://github.com/shlomiassaf/angular2-modal/commit/71a5c2c)), closes [#174](https://github.com/shlomiassaf/angular2-modal/issues/174) [#175](https://github.com/shlomiassaf/angular2-modal/issues/175)


### Features

* **bootstrap:** Added proper prompt support in bootstrap. closes #https://github.com/shlomiassaf/angular2-modal/issues/119 ([329f987](https://github.com/shlomiassaf/angular2-modal/commit/329f987))



<a name="2.0.0-beta.11"></a>
# [2.0.0-beta.11](https://github.com/shlomiassaf/angular2-modal/compare/2.0.0-beta.9...v2.0.0-beta.11) (2016-08-30)


### Features

* **DefaultOverlayTarget:** directive to the the default view container, can be used instead of the manual way which has some boilerplate ([8d0c932](https://github.com/shlomiassaf/angular2-modal/commit/8d0c932))
* **SwapComponent:** a directive that creates a dynamic component inside a template ([bd8182e](https://github.com/shlomiassaf/angular2-modal/commit/bd8182e))
* add `overlayConfigFactory`, a factory/helper to make it easy to open custom modals using the `open()` method ([852fd17](https://github.com/shlomiassaf/angular2-modal/commit/852fd17))
* allow registering dynamic components ([250f234](https://github.com/shlomiassaf/angular2-modal/commit/250f234))
* builders inheriting from OverlayContextBuilder return an OverlayConfig, simple and quick way to open modals ([d115100](https://github.com/shlomiassaf/angular2-modal/commit/d115100))
* support for TemplateRef and literal string as modal content ([2e6f6a0](https://github.com/shlomiassaf/angular2-modal/commit/2e6f6a0))
* support stacks of a specific group (i.e: overlay stack per plugin) ([18acd51](https://github.com/shlomiassaf/angular2-modal/commit/18acd51))
* TemplateRef can access the dialog so it can control the modal and access the context ([5e6c59e](https://github.com/shlomiassaf/angular2-modal/commit/5e6c59e))
* **VEX:** support `ContainerContent` ([cb1f779](https://github.com/shlomiassaf/angular2-modal/commit/cb1f779))

### Bug Fixes

* css dialog container should not bind to class and style ([e8196e8](https://github.com/shlomiassaf/angular2-modal/commit/e8196e8))
* overlay component should hide overflow when inside element ([cf432b3](https://github.com/shlomiassaf/angular2-modal/commit/cf432b3))
* wrong banner in build ([2c9bca5](https://github.com/shlomiassaf/angular2-modal/commit/2c9bca5))
* **bootstrap:** backdrop position should be absolute when inside element ([33201ae](https://github.com/shlomiassaf/angular2-modal/commit/33201ae))
* **bootstrap:** undeclared component in module ([76a7c08](https://github.com/shlomiassaf/angular2-modal/commit/76a7c08)), closes [#168](https://github.com/shlomiassaf/angular2-modal/issues/168)
* **VEX:** normalize context ([97adecd](https://github.com/shlomiassaf/angular2-modal/commit/97adecd))


### Code Refactoring

* `CSSDialogContainer` support for `ContainerContent` (support string, TepmlateRef and Components as content) ([975afea](https://github.com/shlomiassaf/angular2-modal/commit/975afea))



### BREAKING CHANGES

* until now a modal can only open a component, this change allows a modal to open A `ContainerContent` which is a type the can be `string`, `TemplateRef` or a component (`Type`). To support this feature some partially breaking changes were made in the `Modal` class
For developers using the library the `modal.open(componentType: any, config?: OverlayConfig)`, the 1st parameter is now called `content` and it's type is  `ContainerContent`: `modal.open(content: ContainerContent, config?: OverlayConfig)`.
For developers building plugins the same rule apply on the 2nd parameter of the`create` method.
 Also, the `createModal` method is deprecated, plugins should now use the `createBackdrop` and `createContainer` methods.
 Each container component supplied to `createContainer` must express `<ng-content` in it's template so the content (string, templateRef, component) can be injected into it.
* method `CSSDialogContainer.addComponent()` was removed since modal containers are based on `ng-content`. Also removed the bindings for `tabindex` and `role`, they are now static


<a name="2.0.0-beta.10"></a>
# [2.0.0-beta.10](https://github.com/shlomiassaf/angular2-modal/compare/2.0.0-beta.9...v2.0.0-beta.10) (2016-08-23)


### Code Refactoring
* implement overlay stack per plugin for vex & bootstrap ([2c9bca5](https://github.com/shlomiassaf/angular2-modal/commit/2c9bca5))
* move dynamic CSS/Style component to use direct element update (via renderer) instead of binding. Binding is bad for animation and since the whole purpose of this base class is to support animation direct access is needed. ([7fb6c12](https://github.com/shlomiassaf/angular2-modal/commit/7fb6c12))

### Bug Fixes

* wrong banner in build ([2c9bca5](https://github.com/shlomiassaf/angular2-modal/commit/2c9bca5))
* change overlay destroy order, first run hooks, then observable then destroy overlay component ref ([18acd51](https://github.com/shlomiassaf/angular2-modal/commit/18acd51))
* fix backdrop "on show" flicker in bootstrap plugin ([7fb6c12](https://github.com/shlomiassaf/angular2-modal/commit/7fb6c12))

### Features

* allow registering dynamic components ([250f234](https://github.com/shlomiassaf/angular2-modal/commit/250f234))
* support stacks of a specific group (i.e: overlay stack per plugin) ([18acd51](https://github.com/shlomiassaf/angular2-modal/commit/18acd51))



<a name="2.0.0-beta.9"></a>
# [2.0.0-beta.9](https://github.com/shlomiassaf/angular2-modal/compare/2.0.0-beta.8...v2.0.0-beta.9) (2016-08-22)


### Code Refactoring

* **overlay:** add `inElement` as a base context property (overlay-context) ([8ec342c](https://github.com/shlomiassaf/angular2-modal/commit/8ec342c))
* **overlay:** add remove `inside` property from `OverlayConfig` ([8ec342c](https://github.com/shlomiassaf/angular2-modal/commit/8ec342c))


### BREAKING CHANGES

* overlay: `OverlayConfig` no longer sets the bounds area of the overlay, instead the context is used which means it is now user configurable



<a name="2.0.0-beta.8"></a>
# [2.0.0-beta.8](https://github.com/shlomiassaf/angular2-modal/compare/2.0.0-beta.7...v2.0.0-beta.8) (2016-08-22)


### Bug Fixes

* fixed incorrect `inside element` resolution logic ([69895b6](https://github.com/shlomiassaf/angular2-modal/commit/69895b6))


### BREAKING CHANGES

* previously if `inside` config property was not set (undefined) and viewContainerRef was supplied `inElement` resolved to true, now only if `inside` is explicitly true the modal is considered to be inside an element (i.e: inside the view container)



<a name="2.0.0-beta.7"></a>
# [2.0.0-beta.7](https://github.com/shlomiassaf/angular2-modal/compare/2.0.0-beta.6...v2.0.0-beta.7) (2016-08-21)


### Bug Fixes

* typo in overlay selector ([f091153](https://github.com/shlomiassaf/angular2-modal/commit/f091153))
* **bootstrap:** modal wont animate when closing via clicking outside of modal bounds ([7b73461](https://github.com/shlomiassaf/angular2-modal/commit/7b73461))
* **vex:** modal wont animate on close/dismiss ([7b73461](https://github.com/shlomiassaf/angular2-modal/commit/7b73461))



<a name="2.0.0-beta.6"></a>
# [2.0.0-beta.6](https://github.com/shlomiassaf/angular2-modal/compare/1.1.4...v2.0.0-beta.6) (2016-08-21)


### Bug Fixes

* import paths for systemjs ([c6fff42](https://github.com/shlomiassaf/angular2-modal/commit/c6fff42))
* import paths for systemjs ([987e21b](https://github.com/shlomiassaf/angular2-modal/commit/987e21b))
* reference directory with index.ts to the index file directly ([18a3ba8](https://github.com/shlomiassaf/angular2-modal/commit/18a3ba8))
* rename relative exports ([ee66675](https://github.com/shlomiassaf/angular2-modal/commit/ee66675))


### Features
* use overlay DOM structure
* use CSS animation for plugins based on CSS libraries (e.g: bootstrap, vex)


### BREAKING CHANGES
* The modal `open()` command now accepts different variables.
* plugin structure change (affects plugin development only)



<a name="1.1.4"></a>
## [1.1.4](https://github.com/shlomiassaf/angular2-modal/compare/1.1.3...v1.1.4) (2016-08-21)


### Bug Fixes

* be greedy when replacing d.ts imports ([2347cf2](https://github.com/shlomiassaf/angular2-modal/commit/2347cf2))



<a name="1.1.3"></a>
## [1.1.3](https://github.com/shlomiassaf/angular2-modal/compare/1.0.0...1.1.3) (2016-08-21)


### Bug Fixes

* github publishing ([7e1f343](https://github.com/shlomiassaf/angular2-modal/commit/7e1f343))
* **demo-vex:** remove button from noButtons example ([0418ecf](https://github.com/shlomiassaf/angular2-modal/commit/0418ecf))
* **vex:** missing setter in the api ([2699bf5](https://github.com/shlomiassaf/angular2-modal/commit/2699bf5))
* set context on function call ([bab38c0](https://github.com/shlomiassaf/angular2-modal/commit/bab38c0))
* set focus trap for VEX and set focus on container ([c1f33a8](https://github.com/shlomiassaf/angular2-modal/commit/c1f33a8))
* **vex:** set focus on internal element to workaround bug with css animation and focus outline ([22bfcab](https://github.com/shlomiassaf/angular2-modal/commit/22bfcab)), closes [#121](https://github.com/shlomiassaf/angular2-modal/issues/121)
* systemJS not working due to barrel imports and relative paths ([2f72ebe](https://github.com/shlomiassaf/angular2-modal/commit/2f72ebe))
* trap focus inside bootstrap container - fixes [#113](https://github.com/shlomiassaf/angular2-modal/issues/113) ([c7113b4](https://github.com/shlomiassaf/angular2-modal/commit/c7113b4))
* us workaround to allow uglify/minify, see angular/angular[#10618](https://github.com/shlomiassaf/angular2-modal/issues/10618) ([bcd4525](https://github.com/shlomiassaf/angular2-modal/commit/bcd4525)), closes [#157](https://github.com/shlomiassaf/angular2-modal/issues/157)


### Features

* **animation:** in / out animation in bootstrap plugin ([63ad352](https://github.com/shlomiassaf/angular2-modal/commit/63ad352))
* **core:** support Angular RC5 ([e4bbcc4](https://github.com/shlomiassaf/angular2-modal/commit/e4bbcc4))
* **vex:** support Angular RC5 ([2783d51](https://github.com/shlomiassaf/angular2-modal/commit/2783d51))



<a name="1.0.0"></a>
# [1.0.0](https://github.com/shlomiassaf/angular2-modal/compare/f5a4135...1.0.0) (2016-05-10)



