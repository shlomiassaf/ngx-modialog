var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { DialogRef } from "ngx-modialog";
var InnerRuntimeCompiledComponent = (function () {
    function InnerRuntimeCompiledComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    InnerRuntimeCompiledComponent.prototype.close = function (value) {
        this.dialogRef.close(value);
    };
    InnerRuntimeCompiledComponent = __decorate([
        Component({
            selector: 'runtime-compiled-component',
            template: "<div class=\"modal-header\">\n    <h3>I'm another JIT compiled component!</h3>\n</div>\n<div class=\"modal-body\">\n  <h4>Choose a result:</h4>\n  <button class=\"btn btn-primary\" (click)=\"close('A')\">A</button>\n  <button class=\"btn btn-primary\" (click)=\"close('B')\">B</button>\n  <button class=\"btn btn-primary\" (click)=\"close('C')\">C</button>\n</div>"
        }),
        __metadata("design:paramtypes", [DialogRef])
    ], InnerRuntimeCompiledComponent);
    return InnerRuntimeCompiledComponent;
}());
export { InnerRuntimeCompiledComponent };
//# sourceMappingURL=inner-runtime-compiled.component.js.map