"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
/**
 * Represents the modal footer for storing buttons.
 */
var BSModalFooter = (function () {
    function BSModalFooter() {
        /**
         * Emitted when a button was clicked
         * @type {EventEmitter<FooterButtonClickEvent>}
         */
        this.onButtonClick = new core_1.EventEmitter();
    }
    BSModalFooter.prototype.onClick = function (btn, $event) {
        this.onButtonClick.emit({ btn: btn, $event: $event });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], BSModalFooter.prototype, "footerClass", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], BSModalFooter.prototype, "buttons", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], BSModalFooter.prototype, "onButtonClick", void 0);
    BSModalFooter = __decorate([
        core_1.Component({
            selector: 'modal-footer',
            encapsulation: core_1.ViewEncapsulation.None,
            template: "<div [ngClass]=\"footerClass\">\n    <button *ngFor=\"let btn of buttons;\"\n            [ngClass]=\"btn.cssClass\"\n            (click)=\"onClick(btn, $event)\">{{btn.caption}}</button>\n</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], BSModalFooter);
    return BSModalFooter;
}());
exports.BSModalFooter = BSModalFooter;
//# sourceMappingURL=modal-footer.js.map