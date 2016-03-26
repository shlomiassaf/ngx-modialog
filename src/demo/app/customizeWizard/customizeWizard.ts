import { Component } from 'angular2/core';
import {Modal, TwoButtonPresetData, TwoButtonPreset} from 'angular2-modal';
let html = require('./customizeWizard.tpl.html');


@Component({
    selector: 'customize-wizard',
    directives: [],
    providers: [Modal],
    template: html
})
export class CustomizeWizard {
    type: 'alert' | 'prompt' | 'confirm' = 'alert';
    public preset: TwoButtonPresetData = <any>{
        size: 'lg',
        isBlocking: true,
        keyboard: 27,
        headerClass: '',
        title: 'Hello World',
        titleHtml: '',
        body: 'A Customized Modal',
        bodyClass: '',
        footerClass: '',
        okBtn: '',
        okBtnClass: '',
    };

    constructor(private modal: Modal) {}

    createModal() {
        let p = this.preset;

        let fluent: TwoButtonPreset = <any>this.modal[this.type]();
        for (let key in p) {
            let value = p[key];
            if (value === null || value === '') continue;
            fluent[key](value);
        }

        fluent.open();
    }

    get code(): string {
        let p = this.preset,
            code = `modal.${this.type}()\n`;

        for (let key in p) {
            let value = p[key];
            if (value === null || value === '') continue;
            code += `    .${key}(${typeof value === 'string' ? `'${value}'` : value})\n`;
    }

        code += '    .open();';
        return code;
    }
}
