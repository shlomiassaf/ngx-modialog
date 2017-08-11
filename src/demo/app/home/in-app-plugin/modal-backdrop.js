var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, trigger, style, keyframes, animate, transition } from '@angular/core';
import { DialogRef } from 'angular2-modal';
var InAppModalBackdrop = (function () {
    function InAppModalBackdrop(dialog) {
        this.dialog = dialog;
        this.zoomState = 'in';
    }
    InAppModalBackdrop = __decorate([
        Component({
            selector: 'modal-backdrop',
            animations: [
                trigger('zoomin', [
                    transition('void => in', [
                        animate('500ms ease-in', keyframes([
                            style({ transform: 'scale(0.1, 0.1)', offset: 0 }),
                            style({ transform: 'scale(1.2, 1.2)', offset: 0.5 }),
                            style({ transform: 'scale(1, 1)', offset: 1 })
                        ]))
                    ])
                ])
            ],
            styles: ["\n:host {        \n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n\n}\n.in-app-modal-backdrop {\n  margin: 25px 0;\n}\n", "\narticle {\n  margin: auto;\n  width: 600px;\n  background: inherit;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 6px;\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);\n  overflow: hidden;\n}\narticle:before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: inherit;\n  -webkit-filter: blur(10px) saturate(2);\n  filter: blur(10px) saturate(2);\n}\narticle .title {\n  padding: 8px;    \n  background: rgba(235, 235, 235, 0.85);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  font-size:24px;\n  text-align: center;\n}\narticle .content {\n  padding: 8px;\n  background: rgba(255, 255, 255, 0.66);\n}"
            ],
            template: "<div class=\"in-app-modal-backdrop\">\n    <article [@zoomin]=\"zoomState\">\n        <div class=\"title\">\n            <span>{{dialog.context.title}}</span>\n        </div>\n        <div class=\"content\">\n            <ng-template [ngTemplateOutlet]=\"dialog.context.templateRef\"></ng-template>\n        </div>\n    </article>    \n</div>"
        }),
        __metadata("design:paramtypes", [DialogRef])
    ], InAppModalBackdrop);
    return InAppModalBackdrop;
}());
export { InAppModalBackdrop };
//# sourceMappingURL=modal-backdrop.js.map