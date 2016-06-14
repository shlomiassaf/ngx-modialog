import { ModalComponent, DialogRef } from '../../../components/angular2-modal';
import { DialogPreset } from '../../../components/angular2-modal/plugins/vex/index';
export declare class LoginDialog implements ModalComponent<DialogPreset> {
    dialog: DialogRef<DialogPreset>;
    private context;
    constructor(dialog: DialogRef<DialogPreset>);
}
