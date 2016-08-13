declare const System: any;

function loadScript(url, callback) {
  var script = document.createElement('script');

  script.onload = function () {
    //once the script is loaded, run the callback
    if (callback) {
      callback()
    }
    ;
  };

  //create the script and add it to the DOM
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}

function getScripts(prefix, scripts, cb) {
  if (scripts.length) {
    loadScript(prefix + scripts.shift(), function () {
      getScripts(prefix, scripts, cb);
    });
  } else {
    cb();
  }
}

let isGithub = location.host.indexOf('github.io') > -1;

if (isGithub)
  document.querySelector('head base').setAttribute('href', '/angular2-modal');

var prefix = isGithub ? 'angular2-modal/vendor/' : 'vendor/';
var scripts = [
  'core-js/client/shim.min.js',
  'zone.js/dist/zone.js',
  'zone.js/dist/long-stack-trace-zone.js',
  'systemjs/dist/system.src.js'
];


getScripts(prefix, scripts, function () {
  System.config({
    baseURL: isGithub ? '/angular2-modal' : '/',
    map: {
      'rxjs': 'vendor/rxjs',
      '@angular/core': 'vendor/@angular/core/bundles/core.umd.js',
      '@angular/common': 'vendor/@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'vendor/@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'vendor/@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'vendor/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/forms': 'vendor/@angular/forms/bundles/forms.umd.js',
      '@angular/router': 'vendor/@angular/router/bundles/router.umd.js',

      'angular2-modal': 'components/angular2-modal',
      'angular2-modal/platform-browser': 'components/angular2-modal/platform-browser'
    },
    packages: {
      'rxjs': {main: 'index'},
      'demo': {defaultExtension: 'js'},

      'components/angular2-modal': {main: 'index.js', defaultExtension: 'js'},

      // Some internal directories in angular2-modal are barrel like (having index.ts)
      // this works great with webpack, with systemJS it needs mapping.
      'components/angular2-modal/providers': {main: 'index.js', defaultExtension: 'js'},

      // Plugins also need mappings.
      'components/angular2-modal/plugins/bootstrap': {main: 'index.js', defaultExtension: 'js'},
      'components/angular2-modal/plugins/vex': {main: 'index.js', defaultExtension: 'js'},
      'components/angular2-modal/plugins/js-native': {main: 'index.js', defaultExtension: 'js'}
    }
  });

  System.import('bootstrap.js')
    .then(function (bootstrap) {
      if (!bootstrap.isBootstrapped()) {
        bootstrap.main();
      }
    })
    .catch(console.error.bind(console));
});
