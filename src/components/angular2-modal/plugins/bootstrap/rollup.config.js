
export default {
  entry: 'dist/esm/plugins/bootstrap/index.js',
  dest: '.tmp/angular2-modal.bootstrap.umd.js',
  format: 'umd',
  moduleName: 'angular2Modal.plugins.bootstrap',
  globals: {
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
    '@angular/compiler': 'ng.compiler',
    '@angular/platform-browser': 'ng.platformBrowser',
    '@angular/platform-browser-dynamic': 'ng.platformBrowserDynamic',
    'rxjs/Subject': 'Rx',
    'rxjs/observable/PromiseObservable': 'Rx',
    'rxjs/operator/toPromise': 'Rx.Observable.prototype',
    'rxjs/Observable': 'Rx',
    'angular2-modal': 'angular2-modal'
  }
}