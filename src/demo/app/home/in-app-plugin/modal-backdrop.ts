import { Component } from '@angular/core';

import { DialogRef } from '../../../../components/angular2-modal';
import { InAppModalContext } from './modal-context';


@Component({
  selector: 'modal-backdrop',
  styles: [`
.in-app-modal-backdrop {
    
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}`, `
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
    <article>
        <div class="title">
            <span>{{dialog.context.title}}</span>
        </div>
        <div class="content">
            <template [ngTemplateOutlet]="dialog.context.templateRef"></template>
        </div>
    </article>    
</div>`
})
export class InAppModalBackdrop {
  constructor(private dialog: DialogRef<InAppModalContext>) {
  }
}
