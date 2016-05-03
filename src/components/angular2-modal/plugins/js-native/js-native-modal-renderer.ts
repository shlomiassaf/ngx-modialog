import {
    ViewContainerRef,
    ResolvedReflectiveProvider,
    Injectable,
    Type
} from '@angular/core';

import {JS_NATIVE_DIALOG_TYPE} from './modal-context';
import {DialogRef} from '../../models/dialog-ref';
import {ModalRenderer} from '../../models/tokens';
import {JSNativeModalContext} from './modal-context';

@Injectable()
export class JSNativeModalRenderer implements ModalRenderer {

    render(type: Type,
           viewContainer: ViewContainerRef,
           bindings: ResolvedReflectiveProvider[],
           dialog: DialogRef<JSNativeModalContext>): Promise<DialogRef<any>> {

        let result: string | boolean;
        switch (dialog.context.dialogType) {
            case JS_NATIVE_DIALOG_TYPE.alert:
                window.alert(dialog.context.message);
                result = true;
                break;
            case JS_NATIVE_DIALOG_TYPE.prompt:
                result = window.prompt(dialog.context.message, dialog.context.promptDefault);
                break;
            case JS_NATIVE_DIALOG_TYPE.confirm:
                result = window.confirm(dialog.context.message);
                break;
        }

        dialog.destroy = () => {};

        if (result === false) {
            dialog.dismiss();
        }
        else {
            dialog.close(result);
        }

        return Promise.resolve(dialog);
    }
}

