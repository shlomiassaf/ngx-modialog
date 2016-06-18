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
var modal_container_1 = require('./modal-container');
var dialogRefCount = 0;
/**
 * Represents the modal backdrop.
 */
var BSModalBackdrop = (function () {
    function BSModalBackdrop(dialog) {
        var _this = this;
        this.fadeState = 'in';
        this.hs = { ps: null, sz: null, pt: null };
        dialogRefCount++;
        document.body.classList.add('modal-open');
        if (dialog.inElement) {
            this.hs.ps = 'absolute';
            this.hs.sz = '100%';
            this.hs.pt = '0';
        }
        dialog.onDestroy.subscribe(function () { return _this.fadeState = 'out'; });
    }
    /**
     * Temp workaround for animation where destruction of the top level component does not
     * trigger child animations. Solution should be found either in animation module or in design
     * of the modal component tree.
     * @returns {Promise<void>}
     */
    BSModalBackdrop.prototype.canDestroy = function () {
        return new Promise(function (resolve) {
            setTimeout(function () { return resolve(); }, 310);
        });
    };
    BSModalBackdrop.prototype.ngOnDestroy = function () {
        if (--dialogRefCount === 0) {
            document.body.classList.remove('modal-open');
        }
    };
    BSModalBackdrop = __decorate([
        core_1.Component({
            selector: 'modal-backdrop',
            host: {
                '[style.position]': 'hs.ps',
                '[style.height]': 'hs.sz',
                '[style.width]': 'hs.sz',
                '[style.top]': 'hs.pt',
                '[style.left]': 'hs.pt',
                '[style.right]': 'hs.pt',
                '[style.bottom]': 'hs.pt'
            },
            directives: [modal_container_1.BSModalContainer],
            animations: [
                core_1.trigger('fade', [
                    core_1.transition('void => in', [
                        core_1.animate('150ms linear', core_1.keyframes([
                            core_1.style({ opacity: 0 }),
                            core_1.style({ opacity: 0.5 })
                        ]))
                    ]),
                    core_1.state('out', core_1.style({ opacity: 0 })),
                    core_1.transition('* => out', [
                        core_1.animate('150ms, linear', core_1.keyframes([
                            core_1.style({ opacity: 0.5 }),
                            core_1.style({ opacity: 0.5 })
                        ])),
                        core_1.animate('150ms linear', core_1.keyframes([
                            core_1.style({ opacity: 0.5 }),
                            core_1.style({ opacity: 0 }),
                        ]))
                    ])
                ])
            ],
            encapsulation: core_1.ViewEncapsulation.None,
            template: "<div [style.position]=\"hs.ps\" class=\"modal-backdrop in\" @fade=\"fadeState\"></div>\n<modal-container></modal-container>"
        }), 
        __metadata('design:paramtypes', [angular2_modal_1.DialogRef])
    ], BSModalBackdrop);
    return BSModalBackdrop;
}());
exports.BSModalBackdrop = BSModalBackdrop;
//# sourceMappingURL=modal-backdrop.js.map