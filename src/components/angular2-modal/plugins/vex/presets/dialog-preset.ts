import {TemplateRef} from '@angular/core';
import {FluentAssignMethod, privateKey} from '../../../framework/fluent-assign';
import {VEXModalContext, VEXModalContextBuilder} from '../modal-context';
import {Modal} from '../modal';
import {DialogModal as component, VEXButtonHandler, VEXButtonConfig} from '../dialog-modal';
import {extend, arrayUnion} from '../../../framework/utils';


const DEFAULT_SETTERS = [
    'templateRef'
];

/**
 * Data definition
 */
export class DialogPreset extends VEXModalContext {
    defaultResult: any;
    templateRef: TemplateRef<DialogPreset>;
    buttons: VEXButtonConfig[];
} 

/**
 * A Preset representing the configuration needed to open MessageModal.
 * This is an abstract implementation with no concrete behaviour.
 * Use derived implementation.
 */
export class DialogPresetBuilder<T extends DialogPreset> 
                                                    extends VEXModalContextBuilder<T> {

    constructor(modal: Modal,
                defaultValues: T = undefined,
                initialSetters: string[] = undefined,
                baseType: new () => T = undefined) {
        super(
            extend<any>({modal, component, buttons: [], defaultResult: true}, defaultValues || {}),
            arrayUnion<string>(DEFAULT_SETTERS, initialSetters || []),
            baseType || <any>DialogPreset // https://github.com/Microsoft/TypeScript/issues/7234
        );
    }

    /**
     * the message to display on the modal.
     */
    templateRef: FluentAssignMethod<TemplateRef<T>, this>;

    addButton(css: string, caption: string, onClick: VEXButtonHandler): this {
        let btn = {
            cssClass: css,
            caption: caption,
            onClick: onClick
        };

        let key = privateKey('buttons');
        (this[key] as VEXButtonConfig[]).push(btn);

        return this;
    }

    addOkButton(text: string = 'OK'): this {
        this.addButton(
            'vex-dialog-button-primary vex-dialog-button vex-first',
            text,
            (cmp: component, $event:MouseEvent) => cmp.dialog.close(cmp.dialogResult)
        );
        return this;
    }

    addCancelButton(text: string = 'CANCEL'): this {
        this.addButton(
            'vex-dialog-button-secondary vex-dialog-button vex-last',
            text,
            (cmp: component, $event:MouseEvent) => cmp.dialog.dismiss()
        );
        return this;
    }
}
