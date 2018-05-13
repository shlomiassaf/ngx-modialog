import {
  Component,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { DialogRef } from 'ngx-modialog';

export interface ModalCommandDescriptor {
  text: string;
  factory: () => DialogRef<any>;
}
export interface DropInClickEvent {
  event: Event;
  source: ModalCommandDescriptor;
}

@Component({
  selector: 'demo-head',
  styles: [
    `
      .btn-dropin {
          text-transform: uppercase;
          margin: 15px;
          /*background-color: #219161;*/
          border: none;
          box-shadow: 0 2px 5px 0 rgba(0,0,0,.26);
          border-radius: 0;
      }
      `
  ],
  templateUrl: './demo-head.html',
  encapsulation: ViewEncapsulation.Emulated
})
export class DemoHead {
  result: any;
  @Input() title: string;
  @Input() description: string;
  @Input() modalCommands: ModalCommandDescriptor[];

  @Output() dropInClick: EventEmitter<DropInClickEvent> = new EventEmitter<DropInClickEvent>();


  onClick(event: Event, btn: ModalCommandDescriptor) {
    this.dropInClick.emit({
      event,
      source: btn
    });
    this.processDialog(btn.factory());
  }

  private processDialog(dialog: DialogRef<any>) {
    return dialog.result.then((result) => {
        this.result = result;
      }, () => this.result = 'Rejected!');

  }
}
