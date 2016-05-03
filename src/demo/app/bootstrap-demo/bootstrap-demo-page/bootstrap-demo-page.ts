import {Component, ViewContainerRef, ViewChild} from '@angular/core';
import {RouterLink} from '@angular/router-deprecated';

import {DialogRef} from '../../../../components/angular2-modal';
import {
    Modal,
    // Not used but if not set, TS build errors:
    // Return type of exported function has or is using name 'X'from external module 'Y'
    // but cannot be named.
    BSModal
} from '../../../../components/angular2-modal/plugins/bootstrap';


import {AdditionCalculateWindowData, AdditionCalculateWindow} from './custom-modal-sample';
import {SampleElement} from './sample-element';
import * as presets from '../presets';

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
    selector: 'bootstrap-demo-page',
    directives: [SampleElement, RouterLink],
    styleUrls: [ 'demo/app/bootstrap-demo/bootstrap-demo-page/bootstrap-demo-page.css' ],
    templateUrl: 'demo/app/bootstrap-demo/bootstrap-demo-page/bootstrap-demo-page.tpl.html'
})
export class BootstrapDemoPage {
    public lastModalResult: string;
    public buttons = BUTTONS;
    @ViewChild(SampleElement, {read: ViewContainerRef}) private _sampleElementVC: ViewContainerRef;

    constructor(public modal: Modal) {}

    processDialog(dialog: Promise<DialogRef<any>>) {
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
        let dialog = this.modal.open(
            <any>AdditionCalculateWindow,
            new AdditionCalculateWindowData(2, 3)
        );
       this.processDialog(dialog);
    }
}
