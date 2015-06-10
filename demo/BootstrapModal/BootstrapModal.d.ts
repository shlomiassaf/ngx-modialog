/// <reference path="../../typings-custom/tsd.d.ts" />
import { ElementRef, DynamicComponentLoader, ComponentRef, DomRenderer } from 'angular2/angular2';
import { Injector } from 'angular2/di';
import { Type } from 'angular2/src/facade/lang';
export declare class IModalContentData {
}
export declare class Modal {
    componentLoader: DynamicComponentLoader;
    domRenderer: DomRenderer;
    constructor(loader: DynamicComponentLoader, domRenderer: DomRenderer);
    private createBackdrop(elementRef, injector, config);
    open(componentType: Type, elementRef: ElementRef, parentInjector: Injector, config?: ModalConfig): Promise<ModalDialogInstance>;
}
export declare class ModalConfig {
    size: string;
    isBlocking: boolean;
    keyboard: Array<number> | number;
    attachToBody: boolean;
    constructor(size?: string, isBlocking?: boolean, keyboard?: Array<number> | number, attachToBody?: boolean);
}
export declare class ModalDialogInstance {
    config: ModalConfig;
    private _bootstrapRef;
    private _backdropRef;
    private _resultDeffered;
    contentRef: ComponentRef;
    constructor(config: ModalConfig);
    backdropRef: ComponentRef;
    bootstrapRef: ComponentRef;
    result: Promise<any>;
    private dispose();
    close(result?: any): void;
    dismiss(): void;
}
export declare class ModalBackdrop {
    constructor();
}
export declare class YesNoModalContentData implements IModalContentData {
    title: string;
    body: string;
    hideNo: boolean;
    yesText: string;
    noText: string;
    constructor(title?: string, body?: string, hideNo?: boolean, yesText?: string, noText?: string);
}
export declare class YesNoModalContent {
    dialog: ModalDialogInstance;
    context: YesNoModalContentData;
    constructor(dialog: ModalDialogInstance, modelContentData: IModalContentData);
    ok(): void;
    cancel(): void;
}
