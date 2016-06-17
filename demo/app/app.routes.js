"use strict";
var router_1 = require('@angular/router');
var home_1 = require('./home/home');
var vex_demo_1 = require('./vex-demo/vex-demo');
var js_native_demo_1 = require('./js-native-demo/js-native-demo');
var bootstrap_demo_routes_1 = require('./bootstrap-demo/bootstrap-demo.routes');
exports.routes = [
    { path: 'home', component: home_1.Home },
    { path: '', redirectTo: 'home', terminal: true },
    { path: 'vex-demo', component: vex_demo_1.VexDemo },
    { path: 'js-native-demo', component: js_native_demo_1.JSNativeDemo }
].concat(bootstrap_demo_routes_1.BSDemoRoutes);
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map