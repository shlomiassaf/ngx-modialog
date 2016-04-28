import { ReflectiveInjector, provide , ResolvedReflectiveProvider} from 'angular2/core';
import {FluentAssignMethod} from '../framework/fluent-assign';
import {extend} from '../framework/utils_';
import {Modal} from '../providers/modal';
import {MessageModalContext, BSMessageModal} from '../platform/bootstrap/message-modal';
import {MessageModalPreset} from './base/message-modal-preset';
import {OneButtonPresetData} from './one-button-preset';


function createBindings(config: TwoButtonPresetData): ResolvedReflectiveProvider[] {
    config.buttons = [
        {
            cssClass: config.okBtnClass,
            caption: config.okBtn,
            onClick: (modalComponent: BSMessageModal, $event: MouseEvent) =>
                modalComponent.dialog.close(true)
        },
        {
            cssClass: config.cancelBtnClass,
            caption: config.cancelBtn,
            onClick: (modalComponent: BSMessageModal, $event: MouseEvent) =>
                modalComponent.dialog.dismiss()
        }
    ];

    return ReflectiveInjector.resolve([
        provide(MessageModalContext, {useValue: config})
    ]);
}

export interface TwoButtonPresetData extends OneButtonPresetData {
    /** 
     * Caption for the Cancel button.
     * Default: Cancel
     */
    cancelBtn: string;

    /**
     * A Class for the Cancel button.
     * Default: btn btn-default
     */
    cancelBtnClass: string;
}

/**
 * A Preset for a classic 2 button modal window.
 */
export class TwoButtonPreset extends MessageModalPreset<TwoButtonPresetData> {
    constructor(modal: Modal, defaultValues: TwoButtonPresetData = undefined) {
        super(extend<any>( {
            modal: modal,
            bindings: createBindings,
            okBtn: 'OK',
            okBtnClass: 'btn btn-primary',
            cancelBtn: 'Cancel',
            cancelBtnClass: 'btn btn-default'
        }, defaultValues || {}), [
            'okBtn',
            'okBtnClass',
            'cancelBtn',
            'cancelBtnClass'
        ]);
    }

    okBtn: FluentAssignMethod<string, this>;
    okBtnClass: FluentAssignMethod<string, this>;
    cancelBtn: FluentAssignMethod<string, this>;
    cancelBtnClass: FluentAssignMethod<string, this>;
}

