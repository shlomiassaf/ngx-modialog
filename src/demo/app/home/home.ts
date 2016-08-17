import { Component, ViewEncapsulation, ViewContainerRef, ViewChild, TemplateRef} from '@angular/core';

import { InAppModalModule, Modal } from './in-app-plugin/index';

@Component({
    selector: 'home',
    providers: InAppModalModule.getProviders(),
    templateUrl: './home.tpl.html',
    encapsulation: ViewEncapsulation.None
})
export class Home {
    @ViewChild('injectPoint', {read: ViewContainerRef}) private injectVC: ViewContainerRef;
    @ViewChild('myTemplate', {read: TemplateRef}) private myTemplate: TemplateRef<any>;

    constructor(private modal: Modal) {}

    ngAfterViewInit() {
        this.modal.alert()
            .title('Angular 2 Modal')
            .templateRef(this.myTemplate)
            .open(this.injectVC);

    }
}
