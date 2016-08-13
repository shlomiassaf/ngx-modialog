import { ElementRef, ResolvedReflectiveProvider, ComponentRef } from '@angular/core';
import { DomSanitizationService } from '@angular/platform-browser';
import { BaseDynamicComponent, DialogRef } from '../../../../components/angular2-modal';
import { MessageModalPreset } from './presets/message-modal-preset';
export declare class BSModalContainer extends BaseDynamicComponent {
    dialog: DialogRef<MessageModalPreset>;
    private vcRef;
    constructor(dialog: DialogRef<MessageModalPreset>, el: ElementRef, sanitizer: DomSanitizationService);
    addComponent<T>(type: any, bindings?: ResolvedReflectiveProvider[]): ComponentRef<T>;
}
