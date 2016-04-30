import {Component, ViewEncapsulation} from 'angular2/core';

import {ModalComponent} from '../../models/tokens';
import {DialogRef} from '../../models/dialog-ref';


@Component({
    selector: 'modal-dialog',
    encapsulation: ViewEncapsulation.None,

    template:
    /* tslint:disable */
`<form class="vex-dialog-form">
    <div class="vex-dialog-message">Confirm this for me.</div>
    <div class="vex-dialog-input">
    <input name="vex" type="hidden" value="_vex-empty-value"></div>
    <div class="vex-dialog-buttons">
        <button type="submit" class="vex-dialog-button-primary vex-dialog-button vex-first">OK</button>
        <button type="button" class="vex-dialog-button-secondary vex-dialog-button vex-last">Cancel</button>
    </div>
</form>
`
    /* tslint:enable */
})
export class VexMessageModal implements ModalComponent<any> {
    constructor(public dialog: DialogRef<any>) {}
}
