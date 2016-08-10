import {
    ViewContainerRef,
    ResolvedReflectiveProvider,
    Injectable,
    Type
} from '@angular/core';

import { DialogRef } from '../../models/dialog-ref';
import { ModalRenderer, DROP_IN_TYPE } from '../../models/tokens';
import { JSNativeModalContext } from './modal-context';

@Injectable()
export class JSNativeModalRenderer implements ModalRenderer {

    render(type: Type,
           viewContainer: ViewContainerRef,
           bindings: ResolvedReflectiveProvider[],
           dialog: DialogRef<JSNativeModalContext>): DialogRef<any> {

        let result: string | boolean;
        switch (dialog.context.dialogType) {
            case DROP_IN_TYPE.alert:
                window.alert(dialog.context.message);
                result = true;
                break;
            case DROP_IN_TYPE.prompt:
                result = window.prompt(dialog.context.message, dialog.context.promptDefault);
                break;
            case DROP_IN_TYPE.confirm:
                result = window.confirm(dialog.context.message);
                break;
        }

        dialog.destroy = () => {};

        if (result === false) {
            dialog.dismiss();
        } else {
            dialog.close(result);
        }

        return dialog;
    }
}

