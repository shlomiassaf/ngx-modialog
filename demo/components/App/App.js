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
if (typeof __param !== "function") __param = function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/// <reference path="../../../typings-custom/tsd.d.ts"/>
/// <reference path="../../../src/BootstrapModal/BootstrapModal.ts"/>
var angular2_1 = require('angular2/angular2');
var di_1 = require('angular2/di');
var BootstrapModal_1 = require('BootstrapModal/BootstrapModal');
var CustomModalWinow_1 = require('../CustomModalWindow/CustomModalWinow');
var App = (function () {
    function App(modal, elementRef, injector) {
        this.modal = modal;
        this.elementRef = elementRef;
        this.injector = injector;
    }
    App.prototype.openDialog = function (type) {
        var self = this;
        var elRef = (type == 'inElement') ? this.mySampleElement : this.elementRef;
        var component = (type == 'customWindow') ? CustomModalWinow_1.AdditionCalculateWindow : BootstrapModal_1.YesNoModalContent;
        var containerInjector = this.injector.resolveAndCreateChild([
            di_1.bind(BootstrapModal_1.IModalContentData).toValue(App.modalData[type])
        ]);
        var dialog = this.modal.open(component, elRef, containerInjector, App.modalConfigs[type]);
        dialog.then(function (resultPromise) {
            return resultPromise.result.then(function (result) {
                self.lastModalResult = result;
            }, function () { self.lastModalResult = 'Rejected!'; });
        });
    };
    App.modalConfigs = {
        'large': new BootstrapModal_1.ModalConfig("lg"),
        'small': new BootstrapModal_1.ModalConfig("sm"),
        'yesno': new BootstrapModal_1.ModalConfig("sm"),
        'key': new BootstrapModal_1.ModalConfig("sm", true, 81),
        'blocking': new BootstrapModal_1.ModalConfig("lg", true, null),
        'inElement': new BootstrapModal_1.ModalConfig("lg", true, null, false),
        'customWindow': new BootstrapModal_1.ModalConfig("lg")
    };
    App.modalData = {
        'large': new BootstrapModal_1.YesNoModalContentData('Simple Large modal', 'Press ESC or click OK / outside area to close.', true),
        'small': new BootstrapModal_1.YesNoModalContentData('Simple Small modal', 'Press ESC or click OK / outside area to close.', true),
        'yesno': new BootstrapModal_1.YesNoModalContentData('Simple 2 button custom modal', 'Answer the question', false, "Yes", "No"),
        'key': new BootstrapModal_1.YesNoModalContentData('Special Exit Key', 'Press q to close.', true),
        'blocking': new BootstrapModal_1.YesNoModalContentData('Simple Blocking modal', 'You can only click OK to close this modal.', true),
        'inElement': new BootstrapModal_1.YesNoModalContentData('Simple In Element modal', 'Try stacking more modals, click OK to close.', true),
        'customWindow': new CustomModalWinow_1.AdditionCalculateWindowData(2, 3)
    };
    App = __decorate([
        angular2_1.Component({
            selector: 'app',
            appInjector: [BootstrapModal_1.Modal]
        }),
        angular2_1.View({
            templateUrl: 'demo/components/App/App.html',
            directives: [di_1.forwardRef(function () { return SampleElement; })]
        }), 
        __metadata('design:paramtypes', [BootstrapModal_1.Modal, angular2_1.ElementRef, di_1.Injector])
    ], App);
    return App;
})();
exports.App = App;
var SampleElement = (function () {
    function SampleElement(app, elementRef) {
        app.mySampleElement = elementRef;
    }
    SampleElement = __decorate([
        angular2_1.Component({
            selector: 'sample-element'
        }),
        angular2_1.View({
            template: "\n    <div>\n      <h1>I Am an Element!</h1>\n      <p>I can be modaled!</p>\n    </div>\n    ",
            directives: [di_1.forwardRef(function () { return SampleElement; })]
        }),
        __param(0, angular2_1.Parent()), 
        __metadata('design:paramtypes', [App, angular2_1.ElementRef])
    ], SampleElement);
    return SampleElement;
})();
exports.SampleElement = SampleElement;

//# sourceMappingURL=../../components/App/App.js.map