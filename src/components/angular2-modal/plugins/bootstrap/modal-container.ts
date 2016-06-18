import {
  Component,
  ComponentResolver,
  ViewContainerRef,
  ReflectiveInjector,
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

import { DialogRef, ModalCompileConfig } from '../../angular2-modal';

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
        animate('100ms, linear', keyframes([
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
          @fade="fadeState">
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
              private _cr: ComponentResolver) {
    if (!dialog.inElement) {
      this.position = null;
    } else {
      this.position = 'absolute';
    }
    dialog.onDestroy.subscribe(() => this.fadeState = 'out');
  }

  ngAfterViewInit() {
    this._cr.resolveComponent(this._compileConfig.component)
      .then(cmpFactory => {
        const vcr = this._viewContainer,
          bindings = this._compileConfig.bindings,
          ctxInjector = vcr.parentInjector;

        const childInjector = Array.isArray(bindings) && bindings.length > 0 ?
          ReflectiveInjector.fromResolvedProviders(bindings, ctxInjector) : ctxInjector;

        if (this.el.nativeElement) {
          this.el.nativeElement.focus();
        }

        this.dialog.contentRef = vcr.createComponent(cmpFactory, vcr.length, childInjector);
      });
  }

  onClickOutside() {
    return this._modal.isTopMost(this.dialog) && !this.dialog.context.isBlocking &&
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
