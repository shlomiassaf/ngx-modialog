import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { BSMessageModalButtonConfig } from './message-modal';

export interface FooterButtonClickEvent {
    btn: BSMessageModalButtonConfig;
    $event: MouseEvent;
}

/**
 * Represents the modal footer for storing buttons.
 */
@Component({
    selector: 'modal-footer',
    encapsulation: ViewEncapsulation.None,
    template:
`<div [ngClass]="footerClass">
    <button *ngFor="let btn of buttons;"
            [ngClass]="btn.cssClass"
            (click)="onClick(btn, $event)">{{btn.caption}}</button>
</div>`
})
export class BSModalFooter {
    /**
     * Class name used for the footer container.
     */
    @Input() public footerClass: string;

    /**
     * A collection of button configurations, each configuration is a button to display.
     */
    @Input() public buttons: BSMessageModalButtonConfig[];

    /**
     * Emitted when a button was clicked 
     * @type {EventEmitter<FooterButtonClickEvent>}
     */
    @Output() public onButtonClick = new EventEmitter<FooterButtonClickEvent>();

    constructor() {}

    onClick(btn: any, $event: MouseEvent) {
        $event.stopPropagation();
        this.onButtonClick.emit({btn, $event});
    }
}
