import {
    Component,
    DynamicComponentLoader,
    ViewContainerRef,
    ViewChild,
    ViewEncapsulation,
    AfterViewInit
} from 'angular2/core';

import {ModalCompileConfig} from '../../models/tokens';
import {DialogRef} from '../../models/dialog-ref';
import {Modal} from '../../providers/modal';

/**
 * A component that acts as a top level container for an open modal window.
 */
@Component({
    selector: 'modal-container',
    host: {
        'tabindex': '-1',
        'role': 'dialog',
        'class': 'in modal',
        'style': 'display: block',
        '[style.position]': 'position',
        '(body:keydown)': 'documentKeypress($event)',
        '(click)': 'onClick()'
    },
    encapsulation: ViewEncapsulation.None,
    /* tslint:disable */
    template:
        `<div [ngClass]="dialogRef.config.dialogClass"
          [class.modal-lg]="dialogRef.config.size == \'lg\'"
          [class.modal-sm]="dialogRef.config.size == \'sm\'">
         <div class="modal-content"              
              style="display:block"              
              role="document"
              (click)="onContainerClick($event)">
            <div style="display: none" #modalDialog></div>
         </div>
    </div>`
    //TODO: #modalDialog element is not needed but dynamicComponentLoader doesn't seem to have behavior to inject a component the way we want.
    //      We need to replace the #modalDialog element but the current implementation only adds it as a sibling.
    //      see https://github.com/angular/angular/issues/6071
    /* tslint:enable */
})
export class BSModalContainer implements AfterViewInit {
    public position: string;

    @ViewChild('modalDialog', {read: ViewContainerRef}) private _viewContainer: ViewContainerRef;

    constructor(public dialogRef: DialogRef,
                private _compileConfig: ModalCompileConfig,
                private _modal: Modal,
                private _dlc: DynamicComponentLoader) {
        if (!dialogRef.inElement) {
            this.position = null;
        } else {
            this.position = 'absolute';
        }
    }

    ngAfterViewInit() {
        this._dlc
            .loadNextToLocation(this._compileConfig.component,
                this._viewContainer,
                this._compileConfig.bindings)
            .then(contentRef => this.dialogRef.contentRef = contentRef);
    }

    onContainerClick($event: any) {
        $event.stopPropagation();
    }

    onClick() {
        return !this.dialogRef.config.isBlocking && this.dialogRef.dismiss();
    }

    documentKeypress(event: KeyboardEvent) {
        // check that this modal is the last in the stack.
        if (!this._modal.isTopMost(this.dialogRef)) return;


        if (this.dialogRef.config.supportsKey(event.keyCode)) {
            this.dialogRef.dismiss();
        }
    }
}
