import {Component, ViewEncapsulation, ViewContainerRef} from 'angular2/core';

import {DialogRef} from 'angular2-modal';

import {
    VEXBuiltInThemes,
    VEX_MODAL_PROVIDERS,
    DropInModal,
    Modal,
    DropInPreset
} from '../../../components/angular2-modal/platform/vex';

@Component({
    selector: 'vex-demo',
    styles: [
        require('./css/vex.css'),
        require('./css/vex-theme-default.css'),
        require('./css/vex-theme-os.css'),
        require('./css/vex-theme-plain.css'),
        require('./css/vex-theme-wireframe.css'),
        require('./css/vex-theme-flat-attack.css'),
        require('./css/vex-theme-top.css'),
        require('./css/vex-theme-bottom-right-corner.css')
    ],
    template: require('./vex-demo.tpl.html'),
    providers: [...VEX_MODAL_PROVIDERS],
    encapsulation: ViewEncapsulation.None
})
export class VexDemo {
    public modal: Modal;
    result: any;

    theme: VEXBuiltInThemes = <VEXBuiltInThemes>'default';
    
    constructor(public modal: Modal, viewContainer: ViewContainerRef) {
        /**
         * A Default view container ref, usually the app root container ref.
         * Has to be set manually until we can find a way to get it automatically.
         */
        this.modal.defaultViewContainer = viewContainer;
    }

    processDialog(dialog: Promise<DialogRef<DropInPreset>>) {
        dialog.then((resultPromise) => {
            return resultPromise.result.then((result) => {
                this.result = result;
            }, () => this.result = 'Rejected!');
        });
    }


    dropIn(type: string){
        let dialog: any;
        switch (type) {
            case 'alert':
                dialog = this.modal.alert()
                    .className(this.theme)
                    .message('This is a native alert!')
                    .showCloseButton(true)
                    .open();
                break;
            case 'prompt':
                dialog = this.modal.prompt()
                    .className(this.theme)
                    .message('This is a native prompt!')
                    .placeholder('This is a default value')
                    .open();
                break;
            case 'confirm':
                dialog = this.modal.confirm()
                    .className(this.theme)
                    .message('Yes or No?')
                    .open();
                break;
            default:
                break;
        }

        this.processDialog(dialog);

    }
    
    open() {
            let dialog = this.modal.open(
                <any>DropInModal
            );
        this.processDialog(dialog);
    }

}
