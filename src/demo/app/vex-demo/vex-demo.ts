import { Component, ViewEncapsulation, ViewContainerRef, ViewChild } from '@angular/core';

import {
    VEXBuiltInThemes,
    VEX_MODAL_PROVIDERS,
    Modal,
    DialogPreset,
    DialogFormModal,
    DialogPresetBuilder
} from '../../../components/angular2-modal/plugins/vex';

import { DemoHead, ModalCommandDescriptor} from '../demo-head/index';
import * as presets from './presets';
import {LoginDialog} from './login-dialog';

@Component({
    selector: 'vex-demo',
    styleUrls: [
        'demo/app/vex-demo//css/vex.css',
        'demo/app/vex-demo//css/vex-theme-default.css',
        'demo/app/vex-demo//css/vex-theme-os.css',
        'demo/app/vex-demo//css/vex-theme-plain.css',
        'demo/app/vex-demo//css/vex-theme-wireframe.css',
        'demo/app/vex-demo//css/vex-theme-flat-attack.css',
        'demo/app/vex-demo//css/vex-theme-top.css',
        'demo/app/vex-demo//css/vex-theme-bottom-right-corner.css'
    ],
    templateUrl: 'demo/app/vex-demo/vex-demo.tpl.html',
    providers: [...VEX_MODAL_PROVIDERS],
    directives: [ DemoHead ],
    encapsulation: ViewEncapsulation.None
})
export class VexDemo {
    modalCommands: ModalCommandDescriptor[];
    theme: VEXBuiltInThemes = <VEXBuiltInThemes>'default';
    @ViewChild(DemoHead) private demoHead: DemoHead;

    constructor(public modal: Modal, viewContainer: ViewContainerRef) {
        /**
         * A Default view container ref, usually the app root container ref.
         * Has to be set manually until we can find a way to get it automatically.
         */
        this.modal.defaultViewContainer = viewContainer;

        this.modalCommands = [
            {
                text: 'alert drop in',
                factory: () => presets.alert.call(this, this.modal).open()
            },
            {
                text: 'prompt drop in',
                factory: () => presets.prompt.call(this, this.modal).open()
            },
            {
                text: 'confirm drop in',
                factory: () => presets.confirm.call(this, this.modal).open()
            },
            {
                text: 'Cascading example',
                factory: () => presets.cascading.call(this, this.modal).open()
            },
            {
                text: 'In Element example',
                factory: () => presets.alert.call(this, this.modal).open(this.demoHead.vcCommands)
            },
            {
                text: 'Custom Modal example',
                factory: () => {
                    return new DialogPresetBuilder<DialogPreset>(this.modal)
                        .className(this.theme)
                        .content(LoginDialog)
                        .message('Ary you coming to the event?')
                        .addOkButton('Yep!')
                        .addButton(
                            'vex-dialog-button-primary vex-dialog-button',
                            'Maybe?',
                            (cmp: DialogFormModal, $event: MouseEvent) => cmp.dialog.close('Maybe')
                        )
                        .addCancelButton('Nope!')
                        .open();
                }
            }
        ];
    }
}
