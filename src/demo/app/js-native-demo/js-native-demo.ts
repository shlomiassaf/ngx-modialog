import { Component, ViewEncapsulation } from '@angular/core';

import {
    Modal,
    JS_NATIVE_MODAL_PROVIDERS
} from '../../../components/angular2-modal/plugins/js-native';


import { DemoHead, ModalCommandDescriptor } from '../demo-head/index';
import * as presets from './presets';


@Component({
    selector: 'js-native-demo',
    viewProviders: [ ...JS_NATIVE_MODAL_PROVIDERS ],
    templateUrl: 'demo/app/js-native-demo/js-native-demo.tpl.html',
    directives: [ DemoHead ],
    encapsulation: ViewEncapsulation.None
})
export class JSNativeDemo {
    public modalCommands: ModalCommandDescriptor[];

    constructor(public modal: Modal) {
        this.modalCommands = ['alert', 'prompt', 'confirm'].map(dropin => {
            return {
                text: `${dropin} drop in`,
                factory: () => presets[dropin](this.modal).open()
            };
        });
    }
}
