import {Component, ViewEncapsulation} from 'angular2/core';
import {DialogRef} from 'angular2-modal';

import {
    Modal,
    JSNativeModalContext,
    JS_NATIVE_MODAL_PROVIDERS
} from '../../../components/angular2-modal/platform/js-native';


@Component({
    selector: 'js-native-demo',
    viewProviders: [ ...JS_NATIVE_MODAL_PROVIDERS ],
    template: require('./js-native-demo.tpl.html'),
    encapsulation: ViewEncapsulation.None
})
export class JSNativeDemo {
    constructor(public modal: Modal) {}

    result: any;

    processDialog(dialog: Promise<DialogRef<JSNativeModalContext>>) {
        dialog.then((resultPromise) => {
            return resultPromise.result.then((result) => {
                this.result = result;
            }, () => this.result = 'Rejected!');
        });
    }

    open(type: string) {
        let dialog: any;
        switch (type) {
            case 'alert':
                dialog = this.modal.alert()
                    .message('This is a native alert!')
                    .open();
                break;
            case 'prompt':
                dialog = this.modal.prompt()
                    .message('This is a native prompt!')
                    .promptDefault('This is a default value')
                    .open();
                break;
            case 'confirm':
                dialog = this.modal.confirm()
                    .message('Yes or No?')
                    .open();
                break;
            default:
                break;
        }

        this.processDialog(dialog);
        
    }
}
