if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="../../../typings-custom/tsd.d.ts"/>
/// <reference path="../../../src/BootstrapModal/BootstrapModal.ts"/>
var angular2_1 = require('angular2/angular2');
var BootstrapModal_1 = require('BootstrapModal/BootstrapModal');
var AdditionCalculateWindow = (function () {
    function AdditionCalculateWindow(dialog, modelContentData) {
        this.dialog = dialog;
        this.context = modelContentData;
    }
    AdditionCalculateWindow.prototype.close = function () {
        this.dialog.close(this.context.num1 + this.context.num2);
    };
    AdditionCalculateWindow = __decorate([
        angular2_1.Component({
            selector: 'modal-content'
        }),
        angular2_1.View({
            template: "\n        <style>\n            .custom-modal-container {\n                padding: 15px;\n            }\n\n            .custom-modal-header {\n                background-color: #219161;\n                color: #fff;\n                -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);\n                -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);\n                box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);\n                margin-top: -15px;\n                margin-bottom: 40px;\n            }\n        </style>\n        <div class=\"container-fluid custom-modal-container\">\n            <div class=\"row custom-modal-header\">\n                <div class=\"col-sm-12\">\n                    <h1>A Custom modal design</h1>\n                </div>\n            </div>\n            <div class=row\">\n                <div class=\"col-sm-12\">\n                    <div class=\"jumbotron\">\n                        <h1>I Can add numbers!</h1>\n                        <p class=\"lead\">I received an injection of the number <strong>{{context.num1}}</strong> and the number <strong>{{context.num2}}</strong>, adding them together equals <strong>{{context.num1 + context.num2}}</strong></p>\n                    </div>\n                </div>\n            </div>\n            <div class=row\">\n                <div class=\"col-sm-12\">\n                    <button class=\"btn btn-primary pull-right\" (click)=\"close()\">Close</button>\n                </div>\n            </div>\n        </div>"
        }), 
        __metadata('design:paramtypes', [BootstrapModal_1.ModalDialogInstance, BootstrapModal_1.IModalContentData])
    ], AdditionCalculateWindow);
    return AdditionCalculateWindow;
})();
exports.AdditionCalculateWindow = AdditionCalculateWindow;
var AdditionCalculateWindowData = (function () {
    function AdditionCalculateWindowData(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    return AdditionCalculateWindowData;
})();
exports.AdditionCalculateWindowData = AdditionCalculateWindowData;

//# sourceMappingURL=../../components/CustomModalWindow/CustomModalWinow.js.map