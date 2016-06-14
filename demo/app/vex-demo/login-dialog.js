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
var index_1 = require("angular2-modal/plugins/vex/index");
var LoginDialog = (function () {
    function LoginDialog(dialog) {
        this.dialog = dialog;
        this.context = dialog.context;
    }
    LoginDialog = __decorate([
        core_1.Component({
            selector: 'login-dialog',
            directives: [index_1.VEXDialogButtons],
            encapsulation: core_1.ViewEncapsulation.None,
            template: "<div class=\"vex-dialog-message\">{{context.message}}</div>\n    <div *ngIf=\"context.showInput\" class=\"vex-dialog-input\">\n        <input name=\"vex\" \n               type=\"text\" \n               class=\"vex-dialog-prompt-input\"\n               [(ngModel)]=\"context.defaultResult\" \n               placeholder=\"{{context.placeholder}}\">\n    </div>"
        }), 
        __metadata('design:paramtypes', [angular2_modal_1.DialogRef])
    ], LoginDialog);
    return LoginDialog;
}());
exports.LoginDialog = LoginDialog;
//# sourceMappingURL=login-dialog.js.map