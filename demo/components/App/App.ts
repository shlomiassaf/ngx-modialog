/// <reference path="../../../typings-custom/tsd.d.ts"/>
/// <reference path="../../../src/BootstrapModal/BootstrapModal.ts"/>
import {Component, View, ElementRef, Parent} from  'angular2/angular2';
import {Injector, bind, forwardRef} from 'angular2/di';
import {
    Modal,
    ModalDialogInstance,
    ModalConfig,
    YesNoModalContent,
    YesNoModalContentData,
    IModalContentData} from 'BootstrapModal/BootstrapModal';
import {AdditionCalculateWindow, AdditionCalculateWindowData} from '../CustomModalWindow/CustomModalWinow';

@Component({
    selector: 'app',
    appInjector: [Modal]
})
@View({
    templateUrl: 'demo/components/App/App.html',
    directives: [forwardRef(() => SampleElement)]
})
export class App {

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
        'large': new YesNoModalContentData('Simple Large modal', 'Press ESC or click OK / outside area to close.', true),
        'small': new YesNoModalContentData('Simple Small modal', 'Press ESC or click OK / outside area to close.', true),
        'yesno': new YesNoModalContentData('Simple 2 button custom modal', 'Answer the question', false, "Yes", "No"),
        'key': new YesNoModalContentData('Special Exit Key', 'Press q to close.', true),
        'blocking': new YesNoModalContentData('Simple Blocking modal', 'You can only click OK to close this modal.', true),
        'inElement':new YesNoModalContentData('Simple In Element modal', 'Try stacking more modals, click OK to close.', true),
        'customWindow': new AdditionCalculateWindowData(2, 3)
    };

    public mySampleElement: ElementRef;
    public lastModalResult: string;

    openDialog(type: string) {
        var self = this;
        var elRef = (type == 'inElement') ? this.mySampleElement : this.elementRef;
        var component = (type == 'customWindow') ? AdditionCalculateWindow : YesNoModalContent;

        var containerInjector = this.injector.resolveAndCreateChild([
            bind(IModalContentData).toValue(App.modalData[type])
        ]);


        var dialog = this.modal.open(component, elRef, containerInjector, App.modalConfigs[type]);
        dialog.then(function(resultPromise) {
            return resultPromise.result.then(function(result) {
                self.lastModalResult = result;
            }, function() {self.lastModalResult = 'Rejected!'});
        });
    }

    constructor(private modal: Modal, private elementRef: ElementRef, private injector: Injector) {


    }
}

@Component({
    selector: 'sample-element'
})
@View({
    template: `
    <div>
      <h1>I Am an Element!</h1>
      <p>I can be modaled!</p>
    </div>
    `,
    directives: [forwardRef(() => SampleElement)]
})
export class SampleElement {
    constructor(@Parent() app:App, elementRef: ElementRef) {
        app.mySampleElement = elementRef;
    }
}