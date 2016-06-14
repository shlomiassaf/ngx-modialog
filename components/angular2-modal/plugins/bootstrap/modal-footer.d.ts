import { EventEmitter } from '@angular/core';
import { BSMessageModalButtonConfig } from './message-modal';
export interface FooterButtonClickEvent {
    btn: BSMessageModalButtonConfig;
    $event: MouseEvent;
}
/**
 * Represents the modal footer for storing buttons.
 */
export declare class BSModalFooter {
    /**
     * Class name used for the footer container.
     */
    footerClass: string;
    /**
     * A collection of button configurations, each configuration is a button to display.
     */
    buttons: BSMessageModalButtonConfig[];
    /**
     * Emitted when a button was clicked
     * @type {EventEmitter<FooterButtonClickEvent>}
     */
    onButtonClick: EventEmitter<FooterButtonClickEvent>;
    constructor();
    onClick(btn: any, $event: MouseEvent): void;
}
