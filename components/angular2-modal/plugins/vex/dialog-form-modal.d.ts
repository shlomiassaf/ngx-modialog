import { ComponentFactoryResolver, AfterViewInit, EventEmitter } from '@angular/core';
import { ModalComponent, ModalCompileConfig } from '../../models/tokens';
import { DialogRef } from '../../models/dialog-ref';
import { DialogPreset } from './presets/dialog-preset';
import { DropInPreset } from './presets/dropin-preset';
export interface VEXButtonHandler {
    (cmp: ModalComponent<DialogPreset>, $event: MouseEvent): void;
}
/**
 * Interface for button definition
 */
export interface VEXButtonConfig {
    cssClass: string;
    caption: string;
    onClick: VEXButtonHandler;
}
export interface VEXButtonClickEvent {
    btn: VEXButtonConfig;
    $event: MouseEvent;
}
/**
 * A Dialog is a
 */
export declare class VEXDialogButtons {
    /**
     * A collection of button configurations, each configuration is a button to display.
     */
    buttons: VEXButtonConfig[];
    /**
     * Emitted when a button was clicked
     * @type {EventEmitter<VEXButtonClickEvent>}
     */
    onButtonClick: EventEmitter<VEXButtonClickEvent>;
    onClick(btn: any, $event: MouseEvent): void;
}
/**
 * A Dialog with customized buttons wrapped in a form.
 *
 */
export declare class DialogFormModal implements AfterViewInit, ModalComponent<DialogPreset> {
    dialog: DialogRef<DialogPreset>;
    private _compileConfig;
    private _cr;
    private context;
    private _viewContainer;
    constructor(dialog: DialogRef<DialogPreset>, _compileConfig: ModalCompileConfig, _cr: ComponentFactoryResolver);
    ngAfterViewInit(): void;
    onButtonClick($event: VEXButtonClickEvent): void;
}
export declare class FormDropIn implements ModalComponent<DropInPreset> {
    dialog: DialogRef<DropInPreset>;
    private context;
    constructor(dialog: DialogRef<DropInPreset>);
}
