var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Compiler, ViewContainerRef } from '@angular/core';
import { DialogRef, overlayConfigFactory } from "ngx-modialog";
import { Modal, BSModalContext } from 'ngx-modialog/plugins/bootstrap';
import { InnerRuntimeCompiledModule, InnerRuntimeCompiledComponent } from './inner-runtime-compiled';
var runtimeModuleRefPromise;
var RuntimeCompiledComponent = (function () {
    function RuntimeCompiledComponent(dialogRef, vcRef, compiler, modal) {
        this.dialogRef = dialogRef;
        this.vcRef = vcRef;
        this.compiler = compiler;
        this.modal = modal;
        this.toKill = [];
    }
    RuntimeCompiledComponent.prototype.openInElement = function () {
        var _this = this;
        if (!runtimeModuleRefPromise) {
            runtimeModuleRefPromise = this.compiler.compileModuleAsync(InnerRuntimeCompiledModule)
                .then(function (moduleFactory) { return moduleFactory.create(_this.vcRef.parentInjector); });
        }
        runtimeModuleRefPromise
            .then(function (module) { return overlayConfigFactory({ inElement: true }, BSModalContext, { injector: module.injector, viewContainer: 'demo-head' }); })
            .then(function (overlayConfig) { return _this.modal.open(InnerRuntimeCompiledComponent, overlayConfig); })
            .then(function (dialogRef) { return _this.toKill.push(dialogRef); });
    };
    RuntimeCompiledComponent.prototype.ngOnDestroy = function () {
        var dlgRef;
        while (dlgRef = this.toKill.pop()) {
            dlgRef.close('');
        }
    };
    RuntimeCompiledComponent.prototype.openModal = function () {
        var _this = this;
        if (!runtimeModuleRefPromise) {
            runtimeModuleRefPromise = this.compiler.compileModuleAsync(InnerRuntimeCompiledModule)
                .then(function (moduleFactory) { return moduleFactory.create(_this.vcRef.parentInjector); });
        }
        runtimeModuleRefPromise
            .then(function (module) { return overlayConfigFactory({ isBlocking: true }, BSModalContext, { injector: module.injector }); })
            .then(function (overlayConfig) { return _this.modal.open(InnerRuntimeCompiledComponent, overlayConfig); })
            .then(function (dialogRef) { return dialogRef.result; })
            .then(function (value) { return _this.dialogRef.close(value); })
            .catch(function (err) { return _this.dialogRef.dismiss(); });
    };
    RuntimeCompiledComponent = __decorate([
        Component({
            selector: 'runtime-compiled-component',
            template: "\n<div class=\"modal-header\">\n    <h3>I'm a JIT compiled component!</h3>\n</div>\n<div class=\"modal-body\">\n  <p>This is a demonstration of JIT component displayed as a modal content, it also shows how to link the result of a chain of modals.</p>\n  <p>To JIT compile another (different) module inside this (JIT) compiled module press the button below.\n  The value selected on the popup opened will bubble down.</p>\n  <button class=\"btn btn-primary\" (click)=\"openModal()\">Compile and open again!</button>\n  \n  <hr>\n  \n  <p>To demonstrate opening a JIT compiled component inside a view container ref that was created before the component was compiled press the button below.</p>\n  <button class=\"btn btn-warning\" (click)=\"openInElement()\">Open in element!</button>\n</div>"
        }),
        __metadata("design:paramtypes", [DialogRef,
            ViewContainerRef,
            Compiler,
            Modal])
    ], RuntimeCompiledComponent);
    return RuntimeCompiledComponent;
}());
export { RuntimeCompiledComponent };
//# sourceMappingURL=runtime-compiled.component.js.map