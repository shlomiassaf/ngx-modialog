import {
  Component,
  ComponentFactoryResolver,
  ElementRef,
  ViewContainerRef,
  ViewChild,
  ViewEncapsulation,
  AfterViewInit
} from '@angular/core';

import { createComponent, ModalCompileConfig, DialogRef } from '../../../../components/angular2-modal';

import { Modal } from './modal';
import { VEXModalContext } from './modal-context';

/**
 * A component that acts as a top level container for an open modal window.
 */
@Component({
  selector: 'modal-content',
  template: `<div tabindex="-1" role="dialog"
      [class]="context.contentClassName" (clickOutside)="onClickOutside()" #dlgContainer>
    <div style="display: none" #modalDialog></div>    
    <div *ngIf="context.showCloseButton" 
         [class]="context.closeClassName" 
         (click)="dialog.dismiss()"></div>
</div>`,
  encapsulation: ViewEncapsulation.None,
})
export class VexModalContent implements AfterViewInit {
  private context: VEXModalContext;
  @ViewChild('dlgContainer') private dlgContainer: ElementRef;
  @ViewChild('modalDialog', {read: ViewContainerRef}) private _viewContainer: ViewContainerRef;

  constructor(public dialog: DialogRef<VEXModalContext>,
              private _modal: Modal,
              private _compileConfig: ModalCompileConfig,
              private _cr: ComponentFactoryResolver) {
    this.context = dialog.context;
  }

  ngAfterViewInit() {
    if (this.dlgContainer.nativeElement) {
      this.dlgContainer.nativeElement.focus();
    }

    /*  TODO:
     In RC5 dynamic component creation is no longer async.
     Somewhere down the pipe of the created component a value change happens that fires
     a CD exception. setTimeout is a workaround that mimics the async behavior.
     Find out the error and remove setTimeout.
     */
    setTimeout( () => {
      this.dialog.contentRef = createComponent(
        this._cr,
        this._compileConfig.component,
        this._viewContainer,
        this._compileConfig.bindings);
    });
  }

  onClickOutside() {
    // check that this modal is the last in the stack.
    if (this._modal.isTopMost(this.dialog) && !this.dialog.context.isBlocking)
      this.dialog.dismiss();
  }
}
