import {Component, ViewEncapsulation} from 'angular2/core';
import {DialogRef} from '../../models/dialog-ref';

import {VexModalContent} from './modal-content';


/**
 * Represents the modal backdrop.
 */
@Component({
    selector: 'modal-backdrop',
    directives: [VexModalContent],
    encapsulation: ViewEncapsulation.None,
    template:
`<div class="vex vex-theme-default">
    <div class="vex-overlay"></div>
    <modal-content></modal-content>    
</div>`
})
export class VexModalBackdrop {

    constructor(dialog: DialogRef) {
    }

    
}
