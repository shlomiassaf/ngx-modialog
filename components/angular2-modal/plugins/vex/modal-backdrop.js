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
var dialog_ref_1 = require('../../models/dialog-ref');
var modal_1 = require('./modal');
var modal_content_1 = require('./modal-content');
var utils_1 = require('../../framework/utils');
var dialogRefCount = 0;
/**
 * Represents the modal backdrop.
 */
var VexModalBackdrop = (function () {
    function VexModalBackdrop(dialog, _modal) {
        this.dialog = dialog;
        this._modal = _modal;
        this.hs = {};
        dialogRefCount++;
        document.body.classList.add('vex-open');
        if (dialog.inElement) {
            this.hs.ps = 'absolute';
            this.hs.sz = '100%';
            this.hs.pt = 0;
        }
    }
    Object.defineProperty(VexModalBackdrop.prototype, "cssClass", {
        get: function () {
            return "vex vex-theme-" + this.dialog.context.className;
        },
        enumerable: true,
        configurable: true
    });
    VexModalBackdrop.prototype.ngOnDestroy = function () {
        if (--dialogRefCount === 0) {
            document.body.classList.remove('vex-open');
        }
    };
    VexModalBackdrop.prototype.documentKeypress = function (event) {
        // check that this modal is the last in the stack.
        if (!this._modal.isTopMost(this.dialog))
            return;
        if (utils_1.supportsKey(event.keyCode, this.dialog.context.keyboard)) {
            this.dialog.dismiss();
        }
    };
    VexModalBackdrop = __decorate([
        core_1.Component({
            selector: 'modal-backdrop',
            host: {
                '[class.in-element]': 'dialog.inElement',
                '[style.position]': 'hs.ps',
                '[style.height]': 'hs.sz',
                '[style.width]': 'hs.sz',
                '[style.top]': 'hs.pt',
                '[style.left]': 'hs.pt',
                '[style.right]': 'hs.pt',
                '[style.bottom]': 'hs.pt',
                '(body:keydown)': 'documentKeypress($event)'
            },
            styleUrls: [
                'components/angular2-modal/plugins/vex/modal-backdrop.css'
            ],
            directives: [modal_content_1.VexModalContent],
            encapsulation: core_1.ViewEncapsulation.None,
            template: "<div [class]=\"cssClass\">\n    <div [class]=\"dialog.context.overlayClassName\"></div>\n    <modal-content></modal-content>    \n</div>"
        }), 
        __metadata('design:paramtypes', [dialog_ref_1.DialogRef, modal_1.Modal])
    ], VexModalBackdrop);
    return VexModalBackdrop;
}());
exports.VexModalBackdrop = VexModalBackdrop;
//# sourceMappingURL=modal-backdrop.js.map