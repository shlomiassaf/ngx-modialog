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
var angular2_modal_1 = require('../../angular2-modal');
var modal_footer_1 = require('./modal-footer');
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
        this.context = dialog.context;
    }
    BSMessageModal.prototype.onFooterButtonClick = function ($event) {
        $event.btn.onClick(this, $event.$event);
    };
    Object.defineProperty(BSMessageModal.prototype, "titleHtml", {
        get: function () {
            return this.context.titleHtml ? 1 : 0;
        },
        enumerable: true,
        configurable: true
    });
    BSMessageModal = __decorate([
        core_1.Component({
            selector: 'modal-content',
            directives: [modal_footer_1.BSModalFooter],
            encapsulation: core_1.ViewEncapsulation.None,
            template: "<div [ngClass]=\"context.headerClass\" [ngSwitch]=\"titleHtml\">\n        <button *ngIf=\"context.showClose\" type=\"button\" class=\"close\" \n                aria-label=\"Close\" (click)=\"dialog.dismiss()\">\n            <span aria-hidden=\"true\">\u00D7</span>\n        </button>\n        <div *ngSwitchCase=\"1\" [innerHtml]=\"context.titleHtml\"></div>\n        <h3 *ngSwitchDefault class=\"modal-title\">{{context.title}}</h3>\n    </div>\n    <div [ngClass]=\"context.bodyClass\" [innerHtml]=\"context.message\"></div>\n    <modal-footer [footerClass]=\"context.footerClass\" \n                  [buttons]=\"context.buttons\"\n                  (onButtonClick)=\"onFooterButtonClick($event)\"></modal-footer>"
        }), 
        __metadata('design:paramtypes', [angular2_modal_1.DialogRef])
    ], BSMessageModal);
    return BSMessageModal;
}());
exports.BSMessageModal = BSMessageModal;
//# sourceMappingURL=message-modal.js.map