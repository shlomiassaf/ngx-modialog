import { Component } from '@angular/core';
import {  trigger, style, keyframes, animate, transition } from '@angular/animations';

import { DialogRef } from 'ngx-modialog';
import { InAppModalContext } from './modal-context';


@Component({
  selector: 'modal-backdrop',
  animations: [
    trigger('zoomin', [
      transition('void => in', [
        animate('500ms ease-in', keyframes([
          style({transform: 'scale(0.1, 0.1)', offset: 0}),
          style({transform: 'scale(1.2, 1.2)', offset: 0.5}),
          style({transform: 'scale(1, 1)', offset: 1})
        ]))
      ])
    ])
  ],
  styles: [`
:host {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

}
.in-app-modal-backdrop {
  margin: 25px 0;
}
`, `
article {
  margin: auto;
  width: 600px;
  background: inherit;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
  overflow: hidden;
}
article:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: inherit;
  -webkit-filter: blur(10px) saturate(2);
  filter: blur(10px) saturate(2);
}
article .title {
  padding: 8px;
  background: rgba(235, 235, 235, 0.85);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  font-size:24px;
  text-align: center;
}
article .content {
  padding: 8px;
  background: rgba(255, 255, 255, 0.66);
}`
  ],
  template: `<div class="in-app-modal-backdrop">
    <article [@zoomin]="zoomState">
        <div class="title">
            <span>{{dialog.context.title}}</span>
        </div>
        <div class="content">
            <ng-template [ngTemplateOutlet]="dialog.context.templateRef"></ng-template>
        </div>
    </article>
</div>`
})
export class InAppModalBackdrop {
  public zoomState: 'in' | 'out' = 'in';

  constructor(public dialog: DialogRef<InAppModalContext>) {
  }
}
