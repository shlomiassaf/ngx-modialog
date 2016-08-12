import { ElementRef } from '@angular/core';
import { DomSanitizationService } from '@angular/platform-browser';
import { BaseDynamicComponent } from './base-dynamic-component';
/**
 * Represents the modal backdrop shaped by CSS.
 */
export declare class CSSBackdrop extends BaseDynamicComponent {
    constructor(el: ElementRef, sanitizer: DomSanitizationService);
}
