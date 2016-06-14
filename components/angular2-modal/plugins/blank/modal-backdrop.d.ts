import { ComponentResolver, AfterViewInit } from '@angular/core';
import { ModalCompileConfig } from '../../models/tokens';
import { DialogRef } from '../../angular2-modal';
import { Modal } from './modal';
import { BlankModalContext } from './modal-context';
export declare class BlankModalBackdrop implements AfterViewInit {
    private dialog;
    private _compileConfig;
    private _modal;
    private _cr;
    context: BlankModalContext;
    private vcOverlay;
    constructor(dialog: DialogRef<BlankModalContext>, _compileConfig: ModalCompileConfig, _modal: Modal, _cr: ComponentResolver);
    ngAfterViewInit(): void;
}
