import { Injector, provide , ResolvedBinding} from 'angular2/core';
import {FluentAssignMethod} from '../framework/FluentAssign';
import {Modal} from '../providers/Modal';
import {MessageModalContext, MessageModal} from '../modals/MessageModal';
import {MessageModalPreset, MessageModalPresetData} from './base/MessageModalPreset';
import {extend} from '../framework/Utils';


function createBindings(config: OneButtonPresetData): ResolvedBinding[] {
    config.buttons = [
        {
            cssClass: config.okBtnClass,
            caption: config.okBtn,
            onClick: (modalComponent: MessageModal, $event?: MouseEvent) =>
                modalComponent.dialog.close(true)
        }
    ];

    return Injector.resolve([
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

