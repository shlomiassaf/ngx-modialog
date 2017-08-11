var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
var DemoHead = (function () {
    function DemoHead() {
        this.dropInClick = new EventEmitter();
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
        Input(),
        __metadata("design:type", String)
    ], DemoHead.prototype, "title", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], DemoHead.prototype, "description", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], DemoHead.prototype, "modalCommands", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], DemoHead.prototype, "dropInClick", void 0);
    DemoHead = __decorate([
        Component({
            selector: 'demo-head',
            styles: [
                "\n      .btn-dropin {\n          text-transform: uppercase;\n          margin: 15px;\n          background-color: #219161;\n          border: none;\n          box-shadow: 0 2px 5px 0 rgba(0,0,0,.26);\n          border-radius: 0;\n      }\n      "
            ],
            templateUrl: './demo-head.html',
            encapsulation: ViewEncapsulation.Emulated
        })
    ], DemoHead);
    return DemoHead;
}());
export { DemoHead };
//# sourceMappingURL=deam-head.js.map