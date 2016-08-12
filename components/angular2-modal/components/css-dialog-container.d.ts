import { ComponentRef, ResolvedReflectiveProvider, ElementRef } from '@angular/core';
import { DomSanitizationService } from '@angular/platform-browser';
import { BaseDynamicComponent } from './base-dynamic-component';
import { DialogRef } from '../../angular2-modal';
import { Class } from '../framework/utils';
/**
 * A component that acts as a top level container for an open modal window.
 */
export declare class CSSDialogContainer extends BaseDynamicComponent {
    dialog: DialogRef<any>;
    tabIndex: number;
    role: string;
    private vcRef;
    constructor(dialog: DialogRef<any>, el: ElementRef, sanitizer: DomSanitizationService);
    addComponent<T>(type: Class<T>, bindings?: ResolvedReflectiveProvider[]): ComponentRef<T>;
}
