
export default {
  entry: 'dist_package/esm/plugins/vex/index.js',
  dest: '.tmp/angular2-modal.vex.umd.js',
  format: 'umd',
  moduleName: 'angular2Modal.plugins.vex',
  globals: {
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
    '@angular/compiler': 'ng.compiler',
    '@angular/platform-browser': 'ng.platformBrowser',
    '@angular/platform-browser-dynamic': 'ng.platformBrowserDynamic',
    'angular2-modal': 'angular2Modal',
    'rxjs/Subject': 'Rx',
    'rxjs/observable/PromiseObservable': 'Rx',
    'rxjs/operator/toPromise': 'Rx.Observable.prototype',
    'rxjs/Observable': 'Rx'
  }
}