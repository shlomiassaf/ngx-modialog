import {
  Component,
  ViewEncapsulation,
  OnDestroy,
  trigger,
  state,
  style,
  keyframes,
  animate,
  transition
} from '@angular/core';

import { DialogRef } from '../../angular2-modal';

import { BSModalContainer } from './modal-container';
import { BSModalContext } from './modal-context';

let dialogRefCount = 0;

/**
 * Represents the modal backdrop.
 */
@Component({
  selector: 'modal-backdrop',
  host: {
    '[style.position]': 'hs.ps',
    '[style.height]': 'hs.sz',
    '[style.width]': 'hs.sz',
    '[style.top]': 'hs.pt',
    '[style.left]': 'hs.pt',
    '[style.right]': 'hs.pt',
    '[style.bottom]': 'hs.pt'
  },
  directives: [BSModalContainer],
  animations: [
    trigger('fade', [
      transition('void => in', [
        animate('150ms linear', keyframes([
          style({opacity: 0}),
          style({opacity: 0.5})
        ]))
      ]),
      state('out',  style({ opacity: 0 } )),
      transition('* => out', [
        animate('150ms, linear', keyframes([
          style({opacity: 0.5}),
          style({opacity: 0.5})
        ])),
        animate('150ms linear', keyframes([
          style({opacity: 0.5}),
          style({opacity: 0}),
        ]))
      ])
    ])
  ],
  encapsulation: ViewEncapsulation.None,
  template: `<div [style.position]="hs.ps" class="modal-backdrop in" @fade="fadeState"></div>
<modal-container></modal-container>`
})
export class BSModalBackdrop implements OnDestroy {
  fadeState: 'in' | 'out' = 'in';

  private hs = {ps: null, sz: null, pt: null};

  constructor(dialog: DialogRef<BSModalContext>) {
    dialogRefCount++;
    document.body.classList.add('modal-open');

    if (dialog.inElement) {
      this.hs.ps = 'absolute';
      this.hs.sz = '100%';
      this.hs.pt = '0';
    }

    dialog.onDestroy.subscribe(() => this.fadeState = 'out');
  }

  /**
   * Temp workaround for animation where destruction of the top level component does not
   * trigger child animations. Solution should be found either in animation module or in design
   * of the modal component tree.
   * @returns {Promise<void>}
   */
  canDestroy(): Promise<void> {
    return new Promise<void>(resolve => {
      setTimeout(() => resolve(), 310);
    });
  }

  ngOnDestroy() {
    if (--dialogRefCount === 0) {
      document.body.classList.remove('modal-open');
    }
  }
}
