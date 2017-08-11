var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewEncapsulation } from '@angular/core';
require('!!style-loader!css-loader!bootstrap/dist/css/bootstrap.css');
/*
 * App Component
 * Top Level Component
 */
var App = (function () {
    function App() {
    }
    App = __decorate([
        Component({
            selector: 'app',
            encapsulation: ViewEncapsulation.None,
            templateUrl: './app.component.html',
            styleUrls: [
                './app.component.css'
            ]
        }),
        __metadata("design:paramtypes", [])
    ], App);
    return App;
}());
export { App };
//# sourceMappingURL=app.component.js.map