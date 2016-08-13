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
var angular2_modal_1 = require("angular2-modal");
var BSMessageModalTitle = (function () {
    function BSMessageModalTitle(dialog) {
        this.dialog = dialog;
        this.context = dialog.context;
    }
    Object.defineProperty(BSMessageModalTitle.prototype, "titleHtml", {
        get: function () {
            return this.context.titleHtml ? 1 : 0;
        },
        enumerable: true,
        configurable: true
    });
    BSMessageModalTitle = __decorate([
        core_1.Component({
            selector: 'modal-title',
            encapsulation: core_1.ViewEncapsulation.None,
            template: "<div [ngClass]=\"context.headerClass\" [ngSwitch]=\"titleHtml\">\n      <button *ngIf=\"context.showClose\" type=\"button\" class=\"close\" \n              aria-label=\"Close\" (click)=\"dialog.dismiss()\">\n          <span aria-hidden=\"true\">\u00D7</span>\n      </button>\n      <div *ngSwitchCase=\"1\" [innerHtml]=\"context.titleHtml\"></div>\n      <h3 *ngSwitchDefault class=\"modal-title\">{{context.title}}</h3>\n </div>"
        }), 
        __metadata('design:paramtypes', [angular2_modal_1.DialogRef])
    ], BSMessageModalTitle);
    return BSMessageModalTitle;
}());
exports.BSMessageModalTitle = BSMessageModalTitle;
var BSMessageModalBody = (function () {
    function BSMessageModalBody(dialog) {
        this.dialog = dialog;
    }
    BSMessageModalBody = __decorate([
        core_1.Component({
            selector: 'modal-body',
            encapsulation: core_1.ViewEncapsulation.None,
            template: "<div [ngClass]=\"dialog.context.bodyClass\" [innerHtml]=\"dialog.context.message\"></div>"
        }), 
        __metadata('design:paramtypes', [angular2_modal_1.DialogRef])
    ], BSMessageModalBody);
    return BSMessageModalBody;
}());
exports.BSMessageModalBody = BSMessageModalBody;
/**
 * Represents the modal footer for storing buttons.
 */
var BSModalFooter = (function () {
    function BSModalFooter(dialog) {
        this.dialog = dialog;
    }
    BSModalFooter.prototype.onClick = function (btn, $event) {
        $event.stopPropagation();
        btn.onClick(this, $event);
    };
    BSModalFooter = __decorate([
        core_1.Component({
            selector: 'modal-footer',
            encapsulation: core_1.ViewEncapsulation.None,
            template: "<div [ngClass]=\"dialog.context.footerClass\">\n    <button *ngFor=\"let btn of dialog.context.buttons;\"\n            [ngClass]=\"btn.cssClass\"\n            (click)=\"onClick(btn, $event)\">{{btn.caption}}</button>\n</div>"
        }), 
        __metadata('design:paramtypes', [angular2_modal_1.DialogRef])
    ], BSModalFooter);
    return BSModalFooter;
}());
exports.BSModalFooter = BSModalFooter;
/**
 * A Component representing a generic bootstrap modal content element.
 *
 * By configuring a MessageModalContext instance you can:
 *
 *  Header:
 *      - Set header container class (default: modal-header)
 *      - Set title text (enclosed in H3 element)
 *      - Set title html (overrides text)
 *
 *  Body:
 *      - Set body container class.  (default: modal-body)
 *      - Set body container HTML.
 *
 *  Footer:
 *      - Set footer class.  (default: modal-footer)
 *      - Set button configuration (from 0 to n)
 */
var BSMessageModal = (function () {
    function BSMessageModal(dialog) {
        this.dialog = dialog;
    }
    BSMessageModal = __decorate([
        core_1.Component({
            selector: 'modal-content',
            encapsulation: core_1.ViewEncapsulation.None,
            template: "<modal-title></modal-title><modal-body></modal-body><modal-footer></modal-footer>"
        }), 
        __metadata('design:paramtypes', [angular2_modal_1.DialogRef])
    ], BSMessageModal);
    return BSMessageModal;
}());
exports.BSMessageModal = BSMessageModal;
//# sourceMappingURL=message-modal.component.js.map