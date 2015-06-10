/// <reference path="../../../typings-custom/tsd.d.ts"/>
/// <reference path="../../../src/BootstrapModal/BootstrapModal.ts"/>
import {Component, View} from 'angular2/angular2';
import {ModalDialogInstance, IModalContentData} from 'BootstrapModal/BootstrapModal';
/**
 * A Sample of how simple it is to create a new window, with its own injects.
 */
@Component({
    selector: 'modal-content'
})
@View({
    template: `
        <style>
            .custom-modal-container {
                padding: 15px;
            }

            .custom-modal-header {
                background-color: #219161;
                color: #fff;
                -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
                -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
                box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
                margin-top: -15px;
                margin-bottom: 40px;
            }
        </style>
        <div class="container-fluid custom-modal-container">
            <div class="row custom-modal-header">
                <div class="col-sm-12">
                    <h1>A Custom modal design</h1>
                </div>
            </div>
            <div class=row">
                <div class="col-sm-12">
                    <div class="jumbotron">
                        <h1>I Can add numbers!</h1>
                        <p class="lead">I received an injection of the number <strong>{{context.num1}}</strong> and the number <strong>{{context.num2}}</strong>, adding them together equals <strong>{{context.num1 + context.num2}}</strong></p>
                    </div>
                </div>
            </div>
            <div class=row">
                <div class="col-sm-12">
                    <button class="btn btn-primary pull-right" (click)="close()">Close</button>
                </div>
            </div>
        </div>`
})
export class AdditionCalculateWindow {
    dialog: ModalDialogInstance;
    context: AdditionCalculateWindowData;

    constructor(dialog: ModalDialogInstance, modelContentData: IModalContentData) {
        this.dialog = dialog;
        this.context = <AdditionCalculateWindowData>modelContentData;
    }

    close() {
        this.dialog.close(this.context.num1 + this.context.num2);
    }
}
export class AdditionCalculateWindowData implements IModalContentData{
    constructor(
        public num1: number,
        public num2: number
    ){}
}