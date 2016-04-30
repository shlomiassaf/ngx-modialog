import {Component, provide, ViewContainerRef, ReflectiveInjector, ViewChild} from 'angular2/core';
import {RouterLink} from 'angular2/router';
import {ModalConfig, Modal, ICustomModal, ModalDialogInstance} from 'angular2-modal';
import {AdditionCalculateWindowData, AdditionCalculateWindow} from '../customModalDemo/customModal';
import {SampleElement} from '../sampleElement/sampleElement';
import * as presets from './presets';

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
    selector: 'demo-page',
    directives: [SampleElement, RouterLink],
    styles: [ require('./demoPage.css') ],
    template: require('./demoPage.tpl.html')
})
export class DemoPage {
    public lastModalResult: string;
    public buttons = BUTTONS;
    @ViewChild(SampleElement, {read: ViewContainerRef}) private mySampleElement: ViewContainerRef;

    constructor(private modal: Modal) {}

    processDialog(dialog: Promise<ModalDialogInstance>) {
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
            dialog = preset.open(this.mySampleElement);
        } else {
            dialog = preset.open();
        }

        this.processDialog(dialog);
    }


    openCustomModal() {
        let resolvedBindings = ReflectiveInjector.resolve([provide(ICustomModal, {
                                                useValue: new AdditionCalculateWindowData(2, 3)})]),
            dialog = this.modal.open(
                <any>AdditionCalculateWindow,
                resolvedBindings,
                new ModalConfig('lg', true, 27)
        );
       this.processDialog(dialog);
    }
}
