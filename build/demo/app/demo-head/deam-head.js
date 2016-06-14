"use strict";
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
var DemoHead = (function () {
    function DemoHead() {
        this.dropInClick = new core_1.EventEmitter();
    }
    DemoHead.prototype.onClick = function (event, btn) {
        this.dropInClick.emit({
            event: event,
            source: btn
        });
        this.processDialog(btn.factory());
    };
    DemoHead.prototype.processDialog = function (dialog) {
        var _this = this;
        dialog.then(function (resultPromise) {
            return resultPromise.result.then(function (result) {
                _this.result = result;
            }, function () { return _this.result = 'Rejected!'; });
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DemoHead.prototype, "title", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DemoHead.prototype, "description", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], DemoHead.prototype, "modalCommands", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DemoHead.prototype, "dropInClick", void 0);
    __decorate([
        core_1.ViewChild('commands', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], DemoHead.prototype, "vcCommands", void 0);
    DemoHead = __decorate([
        core_1.Component({
            selector: 'demo-head',
            styles: [
                "\n      .btn-dropin {\n          text-transform: uppercase;\n          margin: 15px;\n          background-color: #219161;\n          border: none;\n          box-shadow: 0 2px 5px 0 rgba(0,0,0,.26);\n          border-radius: 0;\n      }\n      "
            ],
            template: "\n              <section class=\"section  padding--small\">\n                  <div class=\"container\">\n                      <h2>{{title}}</h2>\n                      <p class=\"lead\" [innerHtml]=\"description\"></p>\n                      <br>\n                      <ng-content select=\"[extra-desc-content]\"></ng-content>\n                  </div>\n                  <section #commands class=\"section background-gray-lighter padding--small\" style=\"text-align: center\">\n                      <button class=\"btn btn-white btn-dropin\" *ngFor=\"let btn of modalCommands\" (click)=\"onClick($event, btn)\">{{btn.text}}</button>\n                      <h5>Last modal result: {{result}}</h5>\n                  </section>\n\n\n                  <ng-content></ng-content>\n              </section>\n            ",
            encapsulation: core_1.ViewEncapsulation.Emulated
        }), 
        __metadata('design:paramtypes', [])
    ], DemoHead);
    return DemoHead;
}());
exports.DemoHead = DemoHead;
//# sourceMappingURL=deam-head.js.map