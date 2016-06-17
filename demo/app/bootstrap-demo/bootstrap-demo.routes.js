"use strict";
var bootstrap_demo_1 = require('./bootstrap-demo');
var bootstrap_demo_page_1 = require('./bootstrap-demo-page/bootstrap-demo-page');
var modal_customisation_wizard_1 = require('./modal-customisation-wizard/modal-customisation-wizard');
exports.BSDemoRoutes = [
    { path: 'bootstrap-demo', component: bootstrap_demo_1.BootstrapDemo, children: [
            { path: '', component: bootstrap_demo_page_1.BootstrapDemoPage, terminal: true },
            { path: 'customizeModals', component: modal_customisation_wizard_1.ModalCustomisationWizard },
        ] }
];
//# sourceMappingURL=bootstrap-demo.routes.js.map