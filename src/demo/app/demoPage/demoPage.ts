import {Component, provide, ElementRef, Injector} from 'angular2/core';

import {ModalConfig} from '../../../angular2-modal/models/ModalConfig';
import {Modal} from '../../../angular2-modal/providers/Modal';
import {ICustomModal} from '../../../angular2-modal/models/ICustomModal';

import {YesNoModalContent, YesNoModal} from '../../../angular2-modal/commonModals/yesNoModal';
import {OKOnlyContent, OKOnlyModal} from '../../../angular2-modal/commonModals/okOnlyModal';
import {AdditionCalculateWindowData, AdditionCalculateWindow} from '../customModalDemo/customModal';

import {SampleElement} from '../sampleElement/sampleElement';

@Component({
    selector: 'demo-page',
    directives: [SampleElement],
    providers: [Modal],
    pipes: [ ],
    styles: [ require('./demoPage.css') ],
    template: require('./demoPage.tpl.html')
})

export class DemoPage {
    constructor(private modal: Modal, private elementRef: ElementRef) {
    }

    ngOnInit() {

    }

    static modalConfigs = {
        'large': new ModalConfig("lg"),
        'small': new ModalConfig("sm"),
        'yesno': new ModalConfig("sm"),
        'key': new ModalConfig("sm", true, 81),
        'blocking': new ModalConfig("lg", true, null),
        'inElement': new ModalConfig("lg", true, null, false),
        'customWindow': new ModalConfig("lg")
    };
    static modalData = {
        'large': new YesNoModalContent('Simple Large modal', 'Press ESC or click OK / outside area to close.', true),
        'small': new YesNoModalContent('Simple Small modal', 'Press ESC or click OK / outside area to close.', true),
        'yesno': new YesNoModalContent('Simple 2 button custom modal', 'Answer the question', false, "Yes", "No"),
        'key': new YesNoModalContent('Special Exit Key', 'Press q to close.', true),
        'blocking': new YesNoModalContent('Simple Blocking modal', 'You can only click OK to close this modal.', true),
        'inElement':new YesNoModalContent('Simple In Element modal', 'Try stacking more modals, click OK to close.', true),
        'customWindow': new AdditionCalculateWindowData(2, 3)
    };

    public mySampleElement: ElementRef;
    public lastModalResult: string;

    openDialog(type: string) {
        let elRef = (type == 'inElement') ? this.mySampleElement : this.elementRef;
        let component = (type == 'customWindow') ? AdditionCalculateWindow : YesNoModal;


        let bindings = Injector.resolve([provide(ICustomModal, {useValue: DemoPage.modalData[type]})]);

        var dialog = this.modal.open(<any>component, elRef, bindings, DemoPage.modalConfigs[type]);
        dialog.then((resultPromise) => {
            return resultPromise.result.then((result) => {
                this.lastModalResult = result;
            }, () => this.lastModalResult = 'Rejected!');
        });
    }

}