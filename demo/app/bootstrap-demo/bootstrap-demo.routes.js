"use strict";
var router_1 = require('@angular/router');
var bootstrap_demo_1 = require('./bootstrap-demo');
var bootstrap_demo_page_1 = require('./bootstrap-demo-page/bootstrap-demo-page');
exports.routing = router_1.RouterModule.forChild([
    { path: 'bootstrap-demo', component: bootstrap_demo_1.BootstrapDemo, children: [
            { path: '', component: bootstrap_demo_page_1.BootstrapDemoPage, terminal: true },
        ]
    }
]);
//# sourceMappingURL=bootstrap-demo.routes.js.map