import {Directive, EmbeddedViewRef, Component, ViewContainerRef, TemplateRef, ViewEncapsulation, Input, Output, EventEmitter} from '@angular/core';
import {NgTemplateOutlet} from '@angular/common';
import {ModalComponent} from '../../models/tokens';
import {DialogRef} from '../../models/dialog-ref';
import {DialogPreset} from './presets/dialog-preset';

export interface VEXButtonHandler {
    (cmp:  ModalComponent<DialogPreset>, $event: MouseEvent): void;
}

/**
 * Interface for button definition
 */
export interface VEXButtonConfig {
    cssClass: string;
    caption: string;
    onClick: VEXButtonHandler;
}

export interface VEXButtonClickEvent {
    btn: VEXButtonConfig;
    $event: MouseEvent;
}

//
// @Directive({selector: '[ngTemplateOutlet]'})
// export class NgTemplateOutlet {
//     private _insertedViewRef: EmbeddedViewRef;
//     private _context: Object;
//
//     constructor(private _viewContainerRef: ViewContainerRef) {}
//
//     @Input()
//     set ngTemplateOutletContext(context: Object) {
//         this._context = context;
//     }
//
//     @Input()
//     set ngTemplateOutlet(templateRef: TemplateRef) {
//         if (this._insertedViewRef) {
//             this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._insertedViewRef));
//         }
//
//         if (templateRef) {
//             this._insertedViewRef = this._viewContainerRef.createEmbeddedView(templateRef);
//             if (this._context) {
//                 Object.getOwnPropertyNames(this._context)
//                     .forEach(name => this._insertedViewRef.setLocal(name, this._context[name]));
//             }
//
//         }
//     }
// }

/**
 * Represents a dynamic button component
 */
@Component({
    selector: 'vex-dialog-buttons',
    encapsulation: ViewEncapsulation.None,
    template:
`<div class="vex-dialog-buttons">
    <button type="button" 
         *ngFor="let btn of buttons;"
         [class]="btn.cssClass"
         (click)="onClick(btn, $event)">{{btn.caption}}</button>
</div>`
})
export class VEXDialogButtons {

    /**
     * A collection of button configurations, each configuration is a button to display.
     */
    @Input() public buttons: VEXButtonConfig[];

    /**
     * Emitted when a button was clicked
     * @type {EventEmitter<VEXButtonClickEvent>}
     */
    @Output() public onButtonClick = new EventEmitter<VEXButtonClickEvent>();

    onClick(btn: any, $event: MouseEvent) {
        this.onButtonClick.emit({btn, $event});
    }
}

@Component({
    selector: 'modal-dialog',
    directives: [NgTemplateOutlet, VEXDialogButtons],
    encapsulation: ViewEncapsulation.None,
    template:
    /* tslint:disable */
`<form class="vex-dialog-form">
    <template [ngTemplateOutlet]="context.templateRef || dropInTRef"></template>
    <vex-dialog-buttons [buttons]="context.buttons"
                        (onButtonClick)="onButtonClick($event)"></vex-dialog-buttons>
</form>
<template #dropInTRef>
    <div class="vex-dialog-message">{{context.message}}</div>
    <div *ngIf="context.showInput" class="vex-dialog-input">
        <input name="vex" 
               type="text" 
               class="vex-dialog-prompt-input"
               [(ngModel)]="dialogResult" 
               placeholder="{{context.placeholder}}">
    </div>
</template>`
    /* tslint:enable */
})
export class DialogModal implements ModalComponent<DialogPreset> {
    /**
     * Binding value for the template ref, for prompt drop-in usage.
     */
    dialogResult: any;
    
    private context: DialogPreset;
    
    constructor(public dialog: DialogRef<DialogPreset>) {
        this.context = dialog.context;
        this.dialogResult = dialog.context.defaultResult;
    }

    onButtonClick($event: VEXButtonClickEvent) {
        $event.btn.onClick(this, $event.$event);
    }
}
