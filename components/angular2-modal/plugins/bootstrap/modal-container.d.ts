import { ComponentResolver, AfterViewInit } from '@angular/core';
import { ModalCompileConfig } from '../../models/tokens';
import { DialogRef } from '../../models/dialog-ref';
import { Modal } from './modal';
import { BSModalContext } from './modal-context';
/**
 * A component that acts as a top level container for an open modal window.
 */
export declare class BSModalContainer implements AfterViewInit {
    dialog: DialogRef<BSModalContext>;
    private _compileConfig;
    private _modal;
    private _cr;
    position: string;
    private _viewContainer;
    constructor(dialog: DialogRef<BSModalContext>, _compileConfig: ModalCompileConfig, _modal: Modal, _cr: ComponentResolver);
    ngAfterViewInit(): void;
    onClickOutside(): void;
    documentKeypress(event: KeyboardEvent): void;
}
