"use strict";
var router_1 = require('@angular/router');
var home_1 = require('./home/home');
exports.routes = [
    { path: 'home', component: home_1.Home },
    { path: '', redirectTo: 'home', terminal: true }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map