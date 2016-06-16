import {    
    Component,
    ComponentResolver,
    ViewContainerRef,
    ReflectiveInjector,
    ViewChild,
    ViewEncapsulation,
    AfterViewInit,
    Input, 
    Output, 
    EventEmitter
} from '@angular/core';

import {ModalComponent, ModalCompileConfig} from '../../models/tokens';
import {DialogRef} from '../../models/dialog-ref';
import {DialogPreset} from './presets/dialog-preset';
import {DropInPreset} from './presets/dropin-preset';

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

/**
 * A Dialog is a
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
        $event.stopPropagation();
        this.onButtonClick.emit({btn, $event});
    }
}

/**
 * A Dialog with customized buttons wrapped in a form.
 * 
 */
@Component({
    selector: 'modal-dialog',
    directives: [VEXDialogButtons],
    encapsulation: ViewEncapsulation.None,
    template:
`<form class="vex-dialog-form">
    <div style="display: none" #modalDialog></div> 
    <vex-dialog-buttons [buttons]="context.buttons"
                        (onButtonClick)="onButtonClick($event)"></vex-dialog-buttons>
</form>`
})
export class DialogFormModal implements AfterViewInit, ModalComponent<DialogPreset> {
    private context: DialogPreset;
    @ViewChild('modalDialog', {read: ViewContainerRef}) private _viewContainer: ViewContainerRef;
    
    constructor(public dialog: DialogRef<DialogPreset>,
                private _compileConfig: ModalCompileConfig,
                private _cr: ComponentResolver) {
        this.context = dialog.context;
    }

    ngAfterViewInit() {
        this._cr.resolveComponent(this.context.content)
            .then(cmpFactory => {
                const vcr = this._viewContainer,
                    bindings = this._compileConfig.bindings,
                    ctxInjector = vcr.parentInjector;

                const childInjector = Array.isArray(bindings) && bindings.length > 0 ?
                    ReflectiveInjector.fromResolvedProviders(bindings, ctxInjector) : ctxInjector;
                return this.dialog.contentRef =
                    vcr.createComponent(cmpFactory, vcr.length, childInjector);
            });
    }
    
    onButtonClick($event: VEXButtonClickEvent) {
        $event.btn.onClick(this, $event.$event);
    }
}

@Component({
    selector: 'drop-in-dialog',
    directives: [VEXDialogButtons],
    encapsulation: ViewEncapsulation.None,
    template: 
`<div class="vex-dialog-message">{{context.message}}</div>
    <div *ngIf="context.showInput" class="vex-dialog-input">
        <input name="vex" 
               type="text" 
               class="vex-dialog-prompt-input"
               [(ngModel)]="context.defaultResult" 
               placeholder="{{context.placeholder}}">
    </div>`
})

export class FormDropIn implements ModalComponent<DropInPreset> {
    private context: DropInPreset;

    constructor(public dialog: DialogRef<DropInPreset>) {
        this.context = dialog.context;
    }
}
