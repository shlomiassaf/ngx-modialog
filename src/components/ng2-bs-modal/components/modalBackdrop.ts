import { Component, Renderer, ElementRef, ViewChild, AfterViewInit } from 'angular2/core';
import {ModalDialogInstance} from '../models/ModalDialogInstance';


/**
 * Represents the modal backdrop.
 */
@Component({
    selector: 'modal-backdrop',
    template: '<div class="in modal-backdrop" #modalBackdrop></div>'
})
export class ModalBackdrop implements AfterViewInit {
    @ViewChild('modalBackdrop') private backdrop: ElementRef;

    constructor(private dialog: ModalDialogInstance, private renderer: Renderer) {
    }

    ngAfterViewInit() {
        if (this.dialog.inElement) {
            this.renderer.setElementStyle(this.backdrop.nativeElement, 'position', 'absolute');
        }
    }
}
