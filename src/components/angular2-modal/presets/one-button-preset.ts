import { ReflectiveInjector, provide , ResolvedReflectiveProvider} from 'angular2/core';
import {FluentAssignMethod} from '../framework/fluent-assign';
import {Modal} from '../providers/modal';
import {MessageModalContext, BSMessageModal} from '../platform/bootstrap/message-modal';
import {MessageModalPreset, MessageModalPresetData} from './base/message-modal-preset';
import {extend} from '../framework/utils_';


function createBindings(config: OneButtonPresetData): ResolvedReflectiveProvider[] {
    config.buttons = [
        {
            cssClass: config.okBtnClass,
            caption: config.okBtn,
            onClick: (modalComponent: BSMessageModal, $event?: MouseEvent) =>
                modalComponent.dialog.close(true)
        }
    ];

    return ReflectiveInjector.resolve([
        provide(MessageModalContext, {useValue: config})
    ]);
}

export interface OneButtonPresetData extends MessageModalPresetData {
    /** 
     * Caption for the OK button.
     * Default: OK
     */
    okBtn: string;

    /**
     * A Class for the OK button.
     * Default: btn btn-primary
     */
    okBtnClass: string;
}

/**
 * A Preset for a classic 1 button modal window.
 */
export class OneButtonPreset extends MessageModalPreset<OneButtonPresetData> {
    constructor(modal: Modal, defaultValues: OneButtonPresetData = undefined) {
        super(extend<any>( {
            modal: modal,
            bindings: createBindings,
            okBtn: 'OK',
            okBtnClass: 'btn btn-primary'
        }, defaultValues || {}), [
            'okBtn',
            'okBtnClass'
        ]);
    }

    okBtn: FluentAssignMethod<string, this>;
    okBtnClass: FluentAssignMethod<string, this>;
}

