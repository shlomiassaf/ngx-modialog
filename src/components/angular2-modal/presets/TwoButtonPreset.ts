import { Injector, provide , ResolvedBinding} from 'angular2/core';
import {FluentAssignMethod} from '../framework/FluentAssign';
import {extend} from '../framework/Utils';
import {Modal} from '../providers/Modal';
import {MessageModalContext, MessageModal} from '../modals/MessageModal';
import {MessageModalPreset} from './base/MessageModalPreset';
import {OneButtonPresetData} from './OneButtonPreset';


function createBindings(config: TwoButtonPresetData): ResolvedBinding[] {
    config.buttons = [
        {
            cssClass: config.okBtnClass,
            caption: config.okBtn,
            onClick: (modalComponent: MessageModal, $event: MouseEvent) =>
                modalComponent.dialog.close(true)
        },
        {
            cssClass: config.cancelBtnClass,
            caption: config.cancelBtn,
            onClick: (modalComponent: MessageModal, $event: MouseEvent) =>
                modalComponent.dialog.dismiss()
        }
    ];

    return Injector.resolve([
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

