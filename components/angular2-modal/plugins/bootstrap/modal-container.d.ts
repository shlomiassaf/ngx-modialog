import { ComponentResolver, AfterViewInit, ElementRef } from '@angular/core';
import { DialogRef, ModalCompileConfig } from '../../angular2-modal';
import { Modal } from './modal';
import { BSModalContext } from './modal-context';
/**
 * A component that acts as a top level container for an open modal window.
 */
export declare class BSModalContainer implements AfterViewInit {
    dialog: DialogRef<BSModalContext>;
    private el;
    private _compileConfig;
    private _modal;
    private _cr;
    position: string;
    fadeState: 'in' | 'out';
    private _viewContainer;
    constructor(dialog: DialogRef<BSModalContext>, el: ElementRef, _compileConfig: ModalCompileConfig, _modal: Modal, _cr: ComponentResolver);
    ngAfterViewInit(): void;
    onClickOutside(): void;
    documentKeypress(event: KeyboardEvent): void;
}
