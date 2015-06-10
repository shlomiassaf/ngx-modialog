if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="../../typings-custom/tsd.d.ts"/>
var angular2_1 = require('angular2/angular2');
var di_1 = require('angular2/di');
var lang_1 = require('angular2/src/facade/lang');
var async_1 = require('angular2/src/facade/async');
var browser_adapter_1 = require('angular2/src/dom/browser_adapter');
var DOM = new browser_adapter_1.BrowserDomAdapter();
var IModalContentData = (function () {
    function IModalContentData() {
    }
    return IModalContentData;
})();
exports.IModalContentData = IModalContentData;
var Modal = (function () {
    function Modal(loader, domRenderer) {
        this.componentLoader = loader;
        this.domRenderer = domRenderer;
    }
    Modal.prototype.createBackdrop = function (elementRef, injector, config) {
        var _this = this;
        return this.componentLoader.loadIntoNewLocation(ModalBackdrop, elementRef, injector)
            .then(function (componentRef) {
            var backdropElement = _this.domRenderer.getRootNodes(componentRef.hostView.render)[0];
            DOM.addClass(backdropElement, 'modal-backdrop');
            DOM.addClass(backdropElement, 'in');
            if (config.attachToBody) {
                DOM.appendChild(DOM.query('body'), backdropElement);
            }
            else {
                DOM.setStyle(backdropElement, 'position', 'absolute');
                DOM.setStyle(backdropElement, 'height', elementRef.domElement.scrollHeight + 'px');
                DOM.setStyle(backdropElement, 'width', elementRef.domElement.scrollWidth + 'px');
                DOM.setStyle(elementRef.domElement, 'position', 'relative');
                DOM.appendChild(elementRef.domElement, backdropElement);
            }
            return componentRef;
        });
    };
    Modal.prototype.open = function (componentType, elementRef, parentInjector, config) {
        var _this = this;
        config = config || new ModalConfig();
        var dialog = new ModalDialogInstance(config);
        this.createBackdrop(elementRef, parentInjector, config).then(function (backdropRef) {
            dialog.backdropRef = backdropRef;
        });
        var containerInjector = parentInjector.resolveAndCreateChild([
            di_1.bind(ModalDialogInstance).toValue(dialog)
        ]);
        return this.componentLoader.loadIntoNewLocation(BootstrapModalContainer, elementRef, containerInjector)
            .then(function (bootstrapRef) {
            var dialogElement = _this.domRenderer.getRootNodes(bootstrapRef.hostView.render)[0];
            DOM.addClass(dialogElement, 'modal');
            DOM.addClass(dialogElement, 'in');
            DOM.setStyle(dialogElement, 'display', 'block');
            if (config.attachToBody) {
                DOM.appendChild(DOM.query('body'), dialogElement);
            }
            else {
                DOM.setStyle(dialogElement, 'position', 'absolute');
                DOM.appendChild(elementRef.domElement, dialogElement);
            }
            dialog.bootstrapRef = bootstrapRef;
            return _this.componentLoader.loadIntoNewLocation(componentType, bootstrapRef.location, containerInjector)
                .then(function (contentRef) {
                var userComponent = _this.domRenderer.getRootNodes(contentRef.hostView.render)[0];
                DOM.setStyle(dialogElement.children[0], 'display', 'block');
                DOM.addClass(userComponent, 'modal-content');
                DOM.setStyle(userComponent, 'display', 'block');
                DOM.appendChild(dialogElement.children[0], userComponent);
                dialog.contentRef = contentRef;
                return dialog;
            });
        });
    };
    Modal = __decorate([
        di_1.Injectable(), 
        __metadata('design:paramtypes', [angular2_1.DynamicComponentLoader, angular2_1.DomRenderer])
    ], Modal);
    return Modal;
})();
exports.Modal = Modal;
var ModalConfig = (function () {
    function ModalConfig(size, isBlocking, keyboard, attachToBody) {
        if (size === void 0) { size = 'lg'; }
        if (isBlocking === void 0) { isBlocking = false; }
        if (keyboard === void 0) { keyboard = undefined; }
        if (attachToBody === void 0) { attachToBody = true; }
        this.size = size;
        this.isBlocking = isBlocking;
        this.attachToBody = attachToBody;
        if (keyboard === undefined) {
            keyboard = [27];
        }
        else if (lang_1.isPresent(keyboard) && !Array.isArray(keyboard)) {
            keyboard = (!isNaN(keyboard)) ? [keyboard] : null;
        }
        this.keyboard = keyboard;
    }
    return ModalConfig;
})();
exports.ModalConfig = ModalConfig;
var ModalDialogInstance = (function () {
    function ModalDialogInstance(config) {
        this.config = config;
        this._resultDeffered = async_1.PromiseWrapper.completer();
    }
    Object.defineProperty(ModalDialogInstance.prototype, "backdropRef", {
        set: function (value) {
            this._backdropRef = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalDialogInstance.prototype, "bootstrapRef", {
        set: function (value) {
            this._bootstrapRef = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalDialogInstance.prototype, "result", {
        get: function () {
            return this._resultDeffered.promise;
        },
        enumerable: true,
        configurable: true
    });
    ModalDialogInstance.prototype.dispose = function () {
        this._bootstrapRef.dispose();
        this._backdropRef.dispose();
    };
    ModalDialogInstance.prototype.close = function (result) {
        if (result === void 0) { result = null; }
        this.dispose();
        this._resultDeffered.resolve(result);
    };
    ModalDialogInstance.prototype.dismiss = function () {
        this.dispose();
        this._resultDeffered.reject();
    };
    return ModalDialogInstance;
})();
exports.ModalDialogInstance = ModalDialogInstance;
var ModalBackdrop = (function () {
    function ModalBackdrop() {
    }
    ModalBackdrop = __decorate([
        angular2_1.Component({
            selector: 'modal-backdrop'
        }),
        angular2_1.View({ template: '' }), 
        __metadata('design:paramtypes', [])
    ], ModalBackdrop);
    return ModalBackdrop;
})();
exports.ModalBackdrop = ModalBackdrop;
var BootstrapModalContainer = (function () {
    function BootstrapModalContainer(dialogInstance) {
        this.dialogInstance = dialogInstance;
    }
    BootstrapModalContainer.prototype.onClick = function () {
        !this.dialogInstance.config.isBlocking && this.dialogInstance.dismiss();
    };
    BootstrapModalContainer.prototype.documentKeypress = function (event) {
        if (this.dialogInstance.config.keyboard &&
            this.dialogInstance.config.keyboard.indexOf(event.keyCode) > -1) {
            this.dialogInstance.dismiss();
        }
    };
    BootstrapModalContainer = __decorate([
        angular2_1.Component({
            selector: 'bootstrap-modal',
            hostAttributes: {
                'tabindex': '-1',
                'role': 'dialog'
            },
            hostListeners: { 'body:^keydown': 'documentKeypress($event)', 'click': 'onClick()' }
        }),
        angular2_1.View({
            template: "\n    <div class=\"modal-dialog\"\n         [class.modal-lg]=\"dialogInstance.config.size == 'lg'\"\n         [class.modal-sm]=\"dialogInstance.config.size == 'sm'\">\n    </div>"
        }), 
        __metadata('design:paramtypes', [ModalDialogInstance])
    ], BootstrapModalContainer);
    return BootstrapModalContainer;
})();
var YesNoModalContentData = (function () {
    function YesNoModalContentData(title, body, hideNo, yesText, noText) {
        if (title === void 0) { title = "Hello World Title"; }
        if (body === void 0) { body = "Hello World Body!"; }
        if (hideNo === void 0) { hideNo = false; }
        if (yesText === void 0) { yesText = "OK"; }
        if (noText === void 0) { noText = "Cancel"; }
        this.title = title;
        this.body = body;
        this.hideNo = hideNo;
        this.yesText = yesText;
        this.noText = noText;
    }
    return YesNoModalContentData;
})();
exports.YesNoModalContentData = YesNoModalContentData;
var YesNoModalContent = (function () {
    function YesNoModalContent(dialog, modelContentData) {
        this.dialog = dialog;
        this.context = modelContentData;
    }
    YesNoModalContent.prototype.ok = function () {
        this.dialog.close(true);
    };
    YesNoModalContent.prototype.cancel = function () {
        this.dialog.dismiss();
    };
    YesNoModalContent = __decorate([
        angular2_1.Component({
            selector: 'modal-content'
        }),
        angular2_1.View({
            template: "\n        <div class=\"modal-header\">\n            <h3 class=\"modal-title\">{{context.title}}</h3>\n        </div>\n        <div class=\"modal-body\">{{context.body}}</div>\n        <div class=\"modal-footer\">\n            <button class=\"btn btn-primary\" (click)=\"ok()\">{{context.yesText}}</button>\n            <button *ng-if=\"!context.hideNo\" class=\"btn btn-warning\" (click)=\"cancel()\">{{context.noText}}</button>\n        </div>",
            directives: [angular2_1.NgIf]
        }), 
        __metadata('design:paramtypes', [ModalDialogInstance, IModalContentData])
    ], YesNoModalContent);
    return YesNoModalContent;
})();
exports.YesNoModalContent = YesNoModalContent;

//# sourceMappingURL=../BootstrapModal/BootstrapModal.js.map