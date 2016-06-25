import { ComponentResolver, AfterViewInit } from '@angular/core';
import { Modal } from './modal';
import { ModalCompileConfig } from '../../models/tokens';
import { DialogRef } from '../../models/dialog-ref';
import { VEXModalContext } from './modal-context';
/**
 * A component that acts as a top level container for an open modal window.
 */
export declare class VexModalContent implements AfterViewInit {
    dialog: DialogRef<VEXModalContext>;
    private _modal;
    private _compileConfig;
    private _cr;
    private context;
    private dlgContainer;
    private _viewContainer;
    constructor(dialog: DialogRef<VEXModalContext>, _modal: Modal, _compileConfig: ModalCompileConfig, _cr: ComponentResolver);
    ngAfterViewInit(): void;
    onClickOutside(): void;
}
