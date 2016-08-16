import {
  Component,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild,
  ViewEncapsulation,
  AfterViewInit,
  ElementRef,
  trigger,
  state,
  style,
  keyframes,
  animate,
  transition
} from '@angular/core';

import { createComponent, DialogRef, ModalCompileConfig } from '../../index';

import { Modal } from './modal';
import { supportsKey } from '../../framework/utils';
import { BSModalContext } from './modal-context';

/**
 * A component that acts as a top level container for an open modal window.
 */
@Component({
  selector: 'modal-container',
  host: {
    'tabindex': '-1',
    'role': 'dialog',
    'class': 'modal',
    'style': 'display: block',
    '[style.position]': 'position',
    '(body:keydown)': 'documentKeypress($event)'
  },
  animations: [
    trigger('fade', [
      transition('void => in', [
        animate('100ms linear', keyframes([
          style({ opacity: 0, transform: 'translate(0, -25%)' }),
          style({ opacity: 0, transform: 'translate(0, -25%)' })
        ])),
        animate('300ms linear', keyframes([
          style({ opacity: 0, transform: 'translate(0, -25%)', offset: 0 }),
          style({ opacity: 1, transform: 'translate(0, -12.5%)', offset: 0.5 }),
          style({ opacity: 1, transform: 'translate(0, 0)', offset: 1 })
        ]))
      ]),
      state('out',  style({ opacity: 0, transform: 'translate(0, -25%)'} )),
      transition('in => out', [
        animate('150ms linear', keyframes([
          style({ opacity: 1, transform: 'translate(0, 0)' }),
          style({ opacity: 0, transform: 'translate(0, -12.5%)' }),
        ]))
      ])
    ])
  ],
  encapsulation: ViewEncapsulation.None,
  /* tslint:disable */
  template: `<div [ngClass]="dialog.context.dialogClass" 
          [class.modal-lg]="dialog.context.size == \'lg\'"
          [class.modal-sm]="dialog.context.size == \'sm\'"
          [@fade]="fadeState">
         <div class="modal-content"              
              style="display:block"              
              role="document"
              (clickOutside)="onClickOutside()">
            <div style="display: none" #modalDialog></div>
         </div>
    </div>`
  /* tslint:enable */
})
export class BSModalContainer implements AfterViewInit {
  public position: string;

  fadeState: 'in' | 'out' = 'in';

  @ViewChild('modalDialog', {read: ViewContainerRef}) private _viewContainer: ViewContainerRef;

  constructor(public dialog: DialogRef<BSModalContext>,
              private el: ElementRef,
              private _compileConfig: ModalCompileConfig,
              private _modal: Modal,
              private _cr: ComponentFactoryResolver) {
    if (!dialog.inElement) {
      this.position = null;
    } else {
      this.position = 'absolute';
    }
    dialog.onDestroy.subscribe(() => this.fadeState = 'out');
  }

  ngAfterViewInit() {
    if (this.el.nativeElement) {
      this.el.nativeElement.focus();
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
    if (this._modal.isTopMost(this.dialog) && !this.dialog.context.isBlocking)
      this.dialog.dismiss();
  }

  documentKeypress(event: KeyboardEvent) {
    // check that this modal is the last in the stack.
    if (!this._modal.isTopMost(this.dialog)) return;


    if (supportsKey(event.keyCode, <any>this.dialog.context.keyboard)) {
      this.dialog.dismiss();
    }
  }
}
