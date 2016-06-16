import { Component, ViewEncapsulation } from '@angular/core';

import { DialogRef, ModalComponent } from '../../angular2-modal';
import { BSModalFooter, FooterButtonClickEvent } from './modal-footer';
import { MessageModalPreset } from'./presets/message-modal-preset';

export interface BSMessageModalButtonHandler {
    (cmp:  ModalComponent<MessageModalPreset>, $event: MouseEvent): void;
}

/**
 * Interface for button definition
 */
export interface BSMessageModalButtonConfig {
    cssClass: string;
    caption: string;
    onClick: BSMessageModalButtonHandler;
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
    directives: [BSModalFooter],
    encapsulation: ViewEncapsulation.None,
    template:
    `<div [ngClass]="context.headerClass" [ngSwitch]="titleHtml">
        <button *ngIf="context.showClose" type="button" class="close" 
                aria-label="Close" (click)="dialog.dismiss()">
            <span aria-hidden="true">×</span>
        </button>
        <div *ngSwitchCase="1" [innerHtml]="context.titleHtml"></div>
        <h3 *ngSwitchDefault class="modal-title">{{context.title}}</h3>
    </div>
    <div [ngClass]="context.bodyClass" [innerHtml]="context.message"></div>
    <modal-footer [footerClass]="context.footerClass" 
                  [buttons]="context.buttons"
                  (onButtonClick)="onFooterButtonClick($event)"></modal-footer>`
})
export class BSMessageModal implements ModalComponent<MessageModalPreset> {
    public context: MessageModalPreset;
    
    constructor(public dialog: DialogRef<MessageModalPreset>) {
        this.context = dialog.context;
    }
    
    onFooterButtonClick($event: FooterButtonClickEvent) {
        $event.btn.onClick(this, $event.$event);
    }

    get titleHtml(): number {
        return this.context.titleHtml ? 1 : 0;
    }
}
