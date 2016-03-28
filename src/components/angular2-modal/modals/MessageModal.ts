import {Component} from 'angular2/core';

import {ICustomModal, ICustomModalComponent} from '../models/ICustomModal';
import {ModalDialogInstance} from '../models/ModalDialogInstance';
import {ModalFooter, FooterButtonClickEvent} from '../components/modalFooter';

/**
 * Interface for button definition
 */
export interface ModalButtonConfig {
    cssClass: string;
    caption: string;
    onClick: (modalComponent: any, $event?: MouseEvent) => void;
}

/**
 * Data definition
 */
export class MessageModalContext implements ICustomModal {
    /**
     * A Class for the header (title) container.
     * Default: modal-header
     */
    headerClass: string;

    /**
     * Caption for the title, enclosed in a H3 container.
     */
    title: string;

    /**
     * HTML for the title, if set overrides title property.
     * The HTML is wrapped in a DIV element, inside the header container.
     * Example:
     <div class="modal-header">
        <div> HTML CONTENT INSERTED HERE </div>
     </div>
     * Note: HTML is not compiled.
     */
    titleHtml: string;

    /**
     * The body of the message.
     * Can be either text or HTML.
     * Note: HTML is not compiled.
     */
    body: string;
    /**
     * A Class for the body container.
     * Default: modal-body
     */
    bodyClass: string;

    /**
     * A Class for the footer container.
     * Default: modal-footer
     */
    footerClass: string;

    buttons: ModalButtonConfig[];
}

/**
 * A Component representing a generic bootstrap modal content element.
 * 
 * By configuring a MessageModalContext instance you can:
 * 
 *  Header: 
 *      - Set header container class (default: modal-header)
 *      - Set title text (enclosed in H3 element)
 *      - Set title html (overrides text)
 *      
 *  Body:
 *      - Set body container class.  (default: modal-body)
 *      - Set body container HTML.
 *      
 *  Footer:
 *      - Set footer class.  (default: modal-footer)
 *      - Set button configuration (from 0 to n)
 */
@Component({
    selector: 'modal-content',
    directives: [ModalFooter],
    template:
    `<div [ngClass]="context.headerClass" [ngSwitch]="titleHtml">
        <div *ngSwitchWhen="1" [innerHtml]="context.titleHtml"></div>
        <h3 *ngSwitchDefault class="modal-title">{{context.title}}</h3>
    </div>
    <div [ngClass]="context.bodyClass" [innerHtml]="context.body"></div>
    <modal-footer [footerClass]="context.footerClass" 
                  [buttons]="context.buttons"
                  (onButtonClick)="onFooterButtonClick($event)"></modal-footer>`
})
export class MessageModal implements ICustomModalComponent {
    constructor(public dialog: ModalDialogInstance, public context: MessageModalContext) {}

    onFooterButtonClick($event: FooterButtonClickEvent) {
        $event.btn.onClick(this, $event.$event);
    }

    get titleHtml(): number {
        return this.context.titleHtml ? 1 : 0;
    }
}
