import { RouterModule } from '@angular/router';
import { BootstrapDemo } from './bootstrap-demo';
import { BootstrapDemoPage } from './bootstrap-demo-page/bootstrap-demo-page';
import { ModalCustomisationWizard } from './modal-customisation-wizard/modal-customisation-wizard';
export var routing = RouterModule.forChild([
    { path: '', component: BootstrapDemo, children: [
            { path: '', component: BootstrapDemoPage, pathMatch: 'full' },
            { path: 'customizeModals', component: ModalCustomisationWizard }
        ]
    }
]);
//# sourceMappingURL=bootstrap-demo.routes.js.map