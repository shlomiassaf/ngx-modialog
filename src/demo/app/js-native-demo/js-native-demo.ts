import {Component, ViewEncapsulation} from 'angular2/core';

import {
    Modal,
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

    open(type: string) {
        switch (type) {
            case 'alert':
                this.modal.alert()
                    .message('This is a native alert!')
                    .open()
                    .then(value => value.result)
                    .then(result => this.result = result);
                break;
            case 'prompt':
                this.modal.prompt()
                    .message('This is a native prompt!')
                    .promptDefault('This is a default value')
                    .open()
                    .then(value => value.result)
                    .then(result => this.result = result);
                break;
            case 'confirm':
                this.modal.confirm()
                    .message('Yes or No?')
                    .open()
                    .then(value => value.result)
                    .then(result => this.result = result);
                break;
            default:
                break;
        }
        
    }
}
