import { Component, Input, Output, EventEmitter } from 'angular2/core';
import {ModalButtonConfig} from '../modals/MessageModal';

export interface FooterButtonClickEvent {
    btn: ModalButtonConfig;
    $event: MouseEvent;
}

/**
 * Represents the modal footer for storing buttons.
 */
@Component({
    selector: 'modal-footer',
    template:
`<div [ngClass]="footerClass">
    <button *ngFor="#btn of buttons;"
            [ngClass]="btn.cssClass"
            (click)="onClick(btn, $event)">{{btn.caption}}</button>
</div>`
})
export class ModalFooter {
    /**
     * Class name used for the footer container.
     */
    @Input() public footerClass: string;

    /**
     * A collection of button configurations, each configuration is a button to display.
     */
    @Input() public buttons: ModalButtonConfig[];

    /**
     * Emitted when a button was clicked 
     * @type {EventEmitter<FooterButtonClickEvent>}
     */
    @Output() public onButtonClick = new EventEmitter<FooterButtonClickEvent>();

    constructor() {}

    onClick(btn: any, $event: MouseEvent) {
        this.onButtonClick.emit({btn, $event});
    }
}
