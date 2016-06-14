"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return (c > 3 && r && Object.defineProperty(target, key, r), r);
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var angular2_modal_1 = require("angular2-modal");
var index_1 = require("angular2-modal/plugins/bootstrap/index");
var AdditionCalculateWindowData = (function (_super) {
    __extends(AdditionCalculateWindowData, _super);
    function AdditionCalculateWindowData(num1, num2) {
        _super.call(this);
        this.num1 = num1;
        this.num2 = num2;
    }
    return AdditionCalculateWindowData;
}(index_1.BSModalContext));
exports.AdditionCalculateWindowData = AdditionCalculateWindowData;
/**
 * A Sample of how simple it is to create a new window, with its own injects.
 */
var AdditionCalculateWindow = (function () {
    function AdditionCalculateWindow(dialog) {
        this.dialog = dialog;
        this.context = dialog.context;
        this.wrongAnswer = true;
    }
    AdditionCalculateWindow.prototype.onKeyUp = function (value) {
        this.wrongAnswer = value != 5;
        this.dialog.close();
    };
    AdditionCalculateWindow.prototype.beforeDismiss = function () {
        return true;
    };
    AdditionCalculateWindow.prototype.beforeClose = function () {
        return this.wrongAnswer;
    };
    AdditionCalculateWindow = __decorate([
        core_1.Component({
            selector: 'modal-content',
            styles: ["\n        .custom-modal-container {\n            padding: 15px;\n        }\n\n        .custom-modal-header {\n            background-color: #219161;\n            color: #fff;\n            -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);\n            -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);\n            box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);\n            margin-top: -15px;\n            margin-bottom: 40px;\n        }\n    "],
            //TODO: [ngClass] here on purpose, no real use, just to show how to workaround ng2 issue #4330.
            // Remove when solved.
            /* tslint:disable */ template: "\n        <div class=\"container-fluid custom-modal-container\">\n            <div class=\"row custom-modal-header\">\n                <div class=\"col-sm-12\">\n                    <h1>A Custom modal design</h1>\n                </div>\n            </div>\n            <div class=\"row\" [ngClass]=\"{'myclass' : shouldUseMyClass}\">\n                <div class=\"col-xs-12\">\n                    <div class=\"jumbotron\">\n                        <h1>Do the math to quit:</h1>\n                        <p class=\"lead\">I received an injection of the number <strong>{{context.num1}}</strong> and the number <strong>{{context.num2}}</strong></p>\n                        <span>What is the sum?</span>\n                         <input class=\"form-control\" type=\"text\" #answer (keyup)=\"onKeyUp(answer.value)\" autofocus>\n                    </div>\n                </div>\n            </div>\n        </div>"
        }), 
        __metadata('design:paramtypes', [angular2_modal_1.DialogRef])
    ], AdditionCalculateWindow);
    return AdditionCalculateWindow;
}());
exports.AdditionCalculateWindow = AdditionCalculateWindow;
//# sourceMappingURL=custom-modal-sample.js.map