import { Component, ViewEncapsulation } from '@angular/core';

import { Modal, JSNativeModalModule, providers } from 'angular2-modal/plugins/js-native';
import { ModalCommandDescriptor } from '../demo-head/index';
import * as presets from './presets';

@Component({
    selector: 'js-native-demo',
    templateUrl: './js-native-demo.tpl.html',
    // We override providers set by the Module since this app is using multiple module plugins
    // (js-native, vex, bootstrap) which messes up the provider tree (last plugin wins)
    // usually an app will use one plugin and this line is not needed.
    providers: providers,
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
