var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ANALYZE_FOR_ENTRY_COMPONENTS, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';
import { DOMOutsideEventPlugin, DOMOverlayRenderer } from './providers/index';
import { OverlayRenderer } from './models/tokens';
import { CSSBackdrop, CSSDialogContainer } from './components/index';
import { Overlay, ModalOverlay, OverlayDialogBoundary, OverlayTarget } from './overlay/index';
var ModalModule = (function () {
    var ModalModule = ModalModule_1 = function ModalModule() {
    };
    /**
     * Returns a ModalModule pre-loaded with a list of dynamically inserted components.
     * Since dynamic components are not analysed by the angular compiler they must register manually
     * using entryComponents, this is an easy way to do it.
     * @param entryComponents A list of dynamically inserted components (dialog's).
     * @returns {{ngModule: ModalModule, providers: {provide: OpaqueToken, useValue: Array<Type|any[]>, multi: boolean}[]}}
     */
    ModalModule.withComponents = function (entryComponents) {
        return {
            ngModule: ModalModule_1,
            providers: [
                { provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: entryComponents, multi: true }
            ]
        };
    };
    /**
     * Returns a NgModule for use in the root Module.
     * @param entryComponents A list of dynamically inserted components (dialog's).
     * @returns ModuleWithProviders
     */
    ModalModule.forRoot = function (entryComponents) {
        return {
            ngModule: ModalModule_1,
            providers: [
                { provide: OverlayRenderer, useClass: DOMOverlayRenderer },
                { provide: EVENT_MANAGER_PLUGINS, useClass: DOMOutsideEventPlugin, multi: true },
                { provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: entryComponents || [], multi: true }
            ]
        };
    };
    ModalModule = ModalModule_1 = __decorate([
        NgModule({
            declarations: [
                ModalOverlay,
                CSSBackdrop,
                CSSDialogContainer,
                OverlayDialogBoundary,
                OverlayTarget
            ],
            imports: [CommonModule],
            exports: [
                CSSBackdrop,
                CSSDialogContainer,
                OverlayDialogBoundary,
                OverlayTarget
            ],
            providers: [
                Overlay
            ],
            entryComponents: [
                ModalOverlay,
                CSSBackdrop,
                CSSDialogContainer
            ]
        })
    ], ModalModule);
    return ModalModule;
    var ModalModule_1;
}());
export { ModalModule };
//# sourceMappingURL=angular2-modal.module.js.map