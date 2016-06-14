import { DialogRef } from '../../../../components/angular2-modal';
import { Modal } from './modal';
import { InAppModalContext } from './modal-context';
export declare class InAppModalBackdrop {
    private dialog;
    private _modal;
    constructor(dialog: DialogRef<InAppModalContext>, _modal: Modal);
}
