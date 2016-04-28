import { Component, ViewEncapsulation, ViewContainerRef} from 'angular2/core';

import {ModalConfig, Modal, ModalContext, DialogRef, MODAL_PROVIDERS} from 'angular2-modal';

import {VEX_MODAL_PROVIDERS, VexMessageModal} from '../../../components/angular2-modal/platform/vex';

@Component({
    selector: 'vex-demo',
    directives: [],
    styles: [
        require('./css/vex.css'),
        require('./css/vex-theme-default.css')
    ],
    template: require('./vex-demo.tpl.html'),
    providers: [
        ...MODAL_PROVIDERS,
        ...VEX_MODAL_PROVIDERS
    ],
    encapsulation: ViewEncapsulation.None
})
export class VexDemo {
    public modal: Modal

    constructor(public modal: Modal, viewContainer: ViewContainerRef) {
        /**
         * A Default view container ref, usually the app root container ref.
         * Has to be set manually until we can find a way to get it automatically.
         */
        this.modal.defaultViewContainer = viewContainer;
    }

    processDialog(dialog: Promise<DialogRef>) {
        dialog.then((resultPromise) => {
            return resultPromise.result;
        });
    }

    open() {
            let dialog = this.modal.open(
                <any>VexMessageModal,
                [],
                new ModalConfig('lg', true, 27)
            );
        this.processDialog(dialog);
    }

}
