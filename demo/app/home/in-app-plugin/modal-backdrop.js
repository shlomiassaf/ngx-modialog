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
var common_1 = require('@angular/common');
var angular2_modal_1 = require("angular2-modal");
var modal_1 = require('./modal');
var InAppModalBackdrop = (function () {
    function InAppModalBackdrop(dialog, _modal) {
        this.dialog = dialog;
        this._modal = _modal;
    }
    InAppModalBackdrop = __decorate([
        core_1.Component({
            selector: 'modal-backdrop',
            directives: [common_1.NgTemplateOutlet],
            styles: ["\n.in-app-modal-backdrop {\n    \n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n}", "\narticle {\n    margin: auto;\n    width: 600px;\n    background: inherit;\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    border-radius: 6px;\n    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);\n    overflow: hidden;\n}\narticle:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: inherit;\n    -webkit-filter: blur(10px) saturate(2);\n    filter: blur(10px) saturate(2);\n}\narticle .title {\n    padding: 8px;    \n    background: rgba(235, 235, 235, 0.85);\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n    font-size:24px;\n    text-align: center;\n}\narticle .content {\n    padding: 8px;\n    background: rgba(255, 255, 255, 0.66);\n}"
            ],
            template: "<div class=\"in-app-modal-backdrop\">\n    <article>\n        <div class=\"title\">\n            <span>{{dialog.context.title}}</span>\n        </div>\n        <div class=\"content\">\n            <template [ngTemplateOutlet]=\"dialog.context.templateRef\"></template>\n        </div>\n    </article>    \n</div>"
        }), 
        __metadata('design:paramtypes', [angular2_modal_1.DialogRef, modal_1.Modal])
    ], InAppModalBackdrop);
    return InAppModalBackdrop;
}());
exports.InAppModalBackdrop = InAppModalBackdrop;
//# sourceMappingURL=modal-backdrop.js.map