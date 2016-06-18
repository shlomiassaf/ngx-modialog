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
var modal_1 = require('./modal');
var utils_1 = require('../../framework/utils');
/**
 * A component that acts as a top level container for an open modal window.
 */
var BSModalContainer = (function () {
    function BSModalContainer(dialog, el, _compileConfig, _modal, _cr) {
        var _this = this;
        this.dialog = dialog;
        this.el = el;
        this._compileConfig = _compileConfig;
        this._modal = _modal;
        this._cr = _cr;
        this.fadeState = 'in';
        if (!dialog.inElement) {
            this.position = null;
        }
        else {
            this.position = 'absolute';
        }
        dialog.onDestroy.subscribe(function () { return _this.fadeState = 'out'; });
    }
    BSModalContainer.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._cr.resolveComponent(this._compileConfig.component)
            .then(function (cmpFactory) {
            var vcr = _this._viewContainer, bindings = _this._compileConfig.bindings, ctxInjector = vcr.parentInjector;
            var childInjector = Array.isArray(bindings) && bindings.length > 0 ?
                core_1.ReflectiveInjector.fromResolvedProviders(bindings, ctxInjector) : ctxInjector;
            if (_this.el.nativeElement) {
                _this.el.nativeElement.focus();
            }
            _this.dialog.contentRef = vcr.createComponent(cmpFactory, vcr.length, childInjector);
        });
    };
    BSModalContainer.prototype.onClickOutside = function () {
        return this._modal.isTopMost(this.dialog) && !this.dialog.context.isBlocking &&
            this.dialog.dismiss();
    };
    BSModalContainer.prototype.documentKeypress = function (event) {
        // check that this modal is the last in the stack.
        if (!this._modal.isTopMost(this.dialog))
            return;
        if (utils_1.supportsKey(event.keyCode, this.dialog.context.keyboard)) {
            this.dialog.dismiss();
        }
    };
    __decorate([
        core_1.ViewChild('modalDialog', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], BSModalContainer.prototype, "_viewContainer", void 0);
    BSModalContainer = __decorate([
        core_1.Component({
            selector: 'modal-container',
            host: {
                'tabindex': '-1',
                'role': 'dialog',
                'class': 'modal',
                'style': 'display: block',
                '[style.position]': 'position',
                '(body:keydown)': 'documentKeypress($event)'
            },
            animations: [
                core_1.trigger('fade', [
                    core_1.transition('void => in', [
                        core_1.animate('100ms, linear', core_1.keyframes([
                            core_1.style({ opacity: 0, transform: 'translate(0, -25%)' }),
                            core_1.style({ opacity: 0, transform: 'translate(0, -25%)' })
                        ])),
                        core_1.animate('300ms linear', core_1.keyframes([
                            core_1.style({ opacity: 0, transform: 'translate(0, -25%)', offset: 0 }),
                            core_1.style({ opacity: 1, transform: 'translate(0, -12.5%)', offset: 0.5 }),
                            core_1.style({ opacity: 1, transform: 'translate(0, 0)', offset: 1 })
                        ]))
                    ]),
                    core_1.state('out', core_1.style({ opacity: 0, transform: 'translate(0, -25%)' })),
                    core_1.transition('in => out', [
                        core_1.animate('150ms linear', core_1.keyframes([
                            core_1.style({ opacity: 1, transform: 'translate(0, 0)' }),
                            core_1.style({ opacity: 0, transform: 'translate(0, -12.5%)' }),
                        ]))
                    ])
                ])
            ],
            encapsulation: core_1.ViewEncapsulation.None,
            /* tslint:disable */
            template: "<div [ngClass]=\"dialog.context.dialogClass\" \n          [class.modal-lg]=\"dialog.context.size == 'lg'\"\n          [class.modal-sm]=\"dialog.context.size == 'sm'\"\n          @fade=\"fadeState\">\n         <div class=\"modal-content\"              \n              style=\"display:block\"              \n              role=\"document\"\n              (clickOutside)=\"onClickOutside()\">\n            <div style=\"display: none\" #modalDialog></div>\n         </div>\n    </div>"
        }), 
        __metadata('design:paramtypes', [angular2_modal_1.DialogRef, core_1.ElementRef, angular2_modal_1.ModalCompileConfig, modal_1.Modal, core_1.ComponentResolver])
    ], BSModalContainer);
    return BSModalContainer;
}());
exports.BSModalContainer = BSModalContainer;
//# sourceMappingURL=modal-container.js.map