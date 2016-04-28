import { Component, provide, ViewContainerRef, ViewChild, ReflectiveInjector, ViewEncapsulation} from 'angular2/core';
import {RouterLink} from 'angular2/router';

import {ModalConfig, Modal, ModalContext, DialogRef, MODAL_PROVIDERS} from 'angular2-modal';
import {AdditionCalculateWindowData, AdditionCalculateWindow} from '../customModalDemo/customModal';
import {SampleElement} from '../sampleElement/sampleElement';
import * as presets from './presets';

import {BS_MODAL_PROVIDERS} from '../../../components/angular2-modal/platform/bootstrap';


const BUTTONS = [
    {
        text: 'Alert',
        preset: presets.alert
    },
    {
        text: 'Prompt',
        preset: presets.prompt
    },
    {
        text: 'Confirm',
        preset: presets.confirm
    },
    {
        text: 'Cascading',
        preset: presets.cascading
    },
    {
        text: 'In Element',
        preset: presets.inElement
    }
];

@Component({
    selector: 'bootstrap-demo',
    directives: [SampleElement, RouterLink],
    styles: [
        require('bootstrap/dist/css/bootstrap.css'),
        require('./bootstrap-demo.css')
    ],
    template: require('./bootstrap-demo.tpl.html'),
    providers: [
        ...MODAL_PROVIDERS,
        ...BS_MODAL_PROVIDERS,
        provide(ModalConfig, {useValue: new ModalConfig('lg', true, 27)})
    ],
    encapsulation: ViewEncapsulation.None
})
export class BootstrapDemo {
    @ViewChild(SampleElement, {read: ViewContainerRef}) private _sampleElementVC: ViewContainerRef;

    public lastModalResult: string;
    public buttons = BUTTONS;
    
    constructor(public modal: Modal, viewContainer: ViewContainerRef) {
        /**
         * A Default view container ref, usually the app root container ref.
         * Has to be set manually until we can find a way to get it automatically.
         */
        modal.defaultViewContainer = viewContainer;
    }

    processDialog(dialog: Promise<DialogRef>) {
        dialog.then((resultPromise) => {
            return resultPromise.result.then((result) => {
                this.lastModalResult = result;
            }, () => this.lastModalResult = 'Rejected!');
        });
    }
    open(btn) {
        let dialog,
            preset = btn.preset(this.modal);
        if (btn.text === 'In Element') {
            dialog = preset.open(this._sampleElementVC);
        } else {
            dialog = preset.open();
        }

        this.processDialog(dialog);
    }

    openCustomModal() {
        let resolvedBindings = ReflectiveInjector.resolve([provide(ModalContext, {
                                                useValue: new AdditionCalculateWindowData(2, 3)})]),
            dialog = this.modal.open(
                <any>AdditionCalculateWindow,
                resolvedBindings,
                new ModalConfig('lg', true, 27)
        );
       this.processDialog(dialog);
    }
}
