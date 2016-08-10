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
var tokens_1 = require('../../models/tokens');
var dialog_ref_1 = require('../../models/dialog-ref');
/**
 * A Dialog is a
 */
var VEXDialogButtons = (function () {
    function VEXDialogButtons() {
        /**
         * Emitted when a button was clicked
         * @type {EventEmitter<VEXButtonClickEvent>}
         */
        this.onButtonClick = new core_1.EventEmitter();
    }
    VEXDialogButtons.prototype.onClick = function (btn, $event) {
        $event.stopPropagation();
        this.onButtonClick.emit({ btn: btn, $event: $event });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], VEXDialogButtons.prototype, "buttons", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], VEXDialogButtons.prototype, "onButtonClick", void 0);
    VEXDialogButtons = __decorate([
        core_1.Component({
            selector: 'vex-dialog-buttons',
            encapsulation: core_1.ViewEncapsulation.None,
            template: "<div class=\"vex-dialog-buttons\">\n    <button type=\"button\" \n         *ngFor=\"let btn of buttons;\"\n         [class]=\"btn.cssClass\"\n         (click)=\"onClick(btn, $event)\">{{btn.caption}}</button>\n</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], VEXDialogButtons);
    return VEXDialogButtons;
}());
exports.VEXDialogButtons = VEXDialogButtons;
/**
 * A Dialog with customized buttons wrapped in a form.
 *
 */
var DialogFormModal = (function () {
    function DialogFormModal(dialog, _compileConfig, _cr) {
        this.dialog = dialog;
        this._compileConfig = _compileConfig;
        this._cr = _cr;
        this.context = dialog.context;
    }
    DialogFormModal.prototype.ngAfterViewInit = function () {
        var _this = this;
        /*  TODO:
         In RC5 dynamic component creation is no longer async.
         Somewhere down the pipe of the created component a value change happens that fires
         a CD exception. setTimeout is a workaround that mimics the async behavior.
         Find out the error and remove setTimeout.
         */
        setTimeout(function () {
            _this.dialog.contentRef = angular2_modal_1.createComponent(_this._cr, _this.context.content, _this._viewContainer, _this._compileConfig.bindings);
        });
    };
    DialogFormModal.prototype.onButtonClick = function ($event) {
        $event.btn.onClick(this, $event.$event);
    };
    __decorate([
        core_1.ViewChild('modalDialog', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], DialogFormModal.prototype, "_viewContainer", void 0);
    DialogFormModal = __decorate([
        core_1.Component({
            selector: 'modal-dialog',
            encapsulation: core_1.ViewEncapsulation.None,
            template: "<form class=\"vex-dialog-form\">\n    <div style=\"display: none\" #modalDialog></div> \n    <vex-dialog-buttons [buttons]=\"context.buttons\"\n                        (onButtonClick)=\"onButtonClick($event)\"></vex-dialog-buttons>\n</form>"
        }), 
        __metadata('design:paramtypes', [dialog_ref_1.DialogRef, tokens_1.ModalCompileConfig, core_1.ComponentFactoryResolver])
    ], DialogFormModal);
    return DialogFormModal;
}());
exports.DialogFormModal = DialogFormModal;
var FormDropIn = (function () {
    function FormDropIn(dialog) {
        this.dialog = dialog;
        this.context = dialog.context;
    }
    FormDropIn = __decorate([
        core_1.Component({
            selector: 'drop-in-dialog',
            encapsulation: core_1.ViewEncapsulation.None,
            template: "<div class=\"vex-dialog-message\">{{context.message}}</div>\n    <div *ngIf=\"context.showInput\" class=\"vex-dialog-input\">\n        <input autofocus #input\n               name=\"vex\" \n               type=\"text\" \n               class=\"vex-dialog-prompt-input\"\n               (change)=\"context.defaultResult = input.value\"               \n               placeholder=\"{{context.placeholder}}\">\n    </div>"
        }), 
        __metadata('design:paramtypes', [dialog_ref_1.DialogRef])
    ], FormDropIn);
    return FormDropIn;
}());
exports.FormDropIn = FormDropIn;
//# sourceMappingURL=dialog-form-modal.js.map