declare const System: any;

function loadScript(url,callback){
    var script = document.createElement('script');

    script.onload = function(){
        //once the script is loaded, run the callback
        if (callback){callback()};
    };

    //create the script and add it to the DOM
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}

function getScripts(prefix, scripts, cb) {
    if (scripts.length) {
        loadScript(prefix + scripts.shift(), function() {
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
    'es6-shim/es6-shim.js',
    'zone.js/dist/zone.js',
    'zone.js/dist/long-stack-trace-zone.js',
    'reflect-metadata/Reflect.js',
    'systemjs/dist/system.src.js'
];


getScripts(prefix, scripts, function() {
    System.config({
        baseURL: isGithub ? '/angular2-modal' : '/',
        map: {
            'rxjs': 'vendor/rxjs',
            '@angular/core': 'vendor/@angular/core/core.umd.js',
            '@angular/common': 'vendor/@angular/common/common.umd.js',
            '@angular/compiler': 'vendor/@angular/compiler/compiler.umd.js',
            '@angular/platform-browser-dynamic': 'vendor/@angular/platform-browser-dynamic/platform-browser-dynamic.umd.js',
            '@angular/http': 'vendor/@angular/http/http.umd.js',
            '@angular/upgrade': 'vendor/@angular/upgrade/upgrade.umd.js',
            '@angular/router': 'vendor/@angular/router/router.umd.js',
            '@angular/router-deprecated': 'vendor/@angular/router-deprecated/router-deprecated.umd.js',

            //'@angular/platform-browser': '/vendor/@angular/platform-browser/platform-browser.umd.js',
            '@angular/platform-browser': 'vendor/@angular/platform-browser',

            '@angular/core/src/facade': 'vendor/@angular/core/src/facade',
            //'@angular/platform-browser/src/dom': '/vendor/@angular/platform-browser/src/dom',

            'angular2-modal': 'components/angular2-modal',
            'angular2-modal/platform-browser': 'components/angular2-modal/platform-browser'
        },
        packages: {
            'rxjs': {main: 'index'},
            '@angular/core/src/facade': {defaultExtension: 'js'},

            //'@angular/platform-browser/src/dom': {defaultExtension: 'js'},
            '@angular/platform-browser': {main: 'index.js', defaultExtension: 'js'},

            'demo': {defaultExtension: 'js'},

            'components/angular2-modal': {main: 'index.js', defaultExtension: 'js'},
            'components/angular2-modal/platform-browser': {main: 'index.js', defaultExtension: 'js'},
            'components/angular2-modal/plugins/bootstrap': {main: 'index.js', defaultExtension: 'js'},
            'components/angular2-modal/plugins/vex': {main: 'index.js', defaultExtension: 'js'},
            'components/angular2-modal/plugins/js-native': {main: 'index.js', defaultExtension: 'js'}
        }
    });

    System.import('bootstrap.js')
        .then(function(bootstrap) {
            if(!bootstrap.isBootstrapped()) {
                bootstrap.main();
            }
        })
        .catch(console.error.bind(console));
});
