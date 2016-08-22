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



