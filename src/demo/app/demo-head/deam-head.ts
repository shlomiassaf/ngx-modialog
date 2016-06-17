import {
    Component,
    ViewEncapsulation,
    Input,
    Output,
    EventEmitter,
    ViewChild,
    ViewContainerRef
} from '@angular/core';

import { DialogRef } from '../../../components/angular2-modal';

export interface ModalCommandDescriptor {
    text: string;
    factory: () => Promise<DialogRef<any>>;
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
          background-color: #219161;
          border: none;
          box-shadow: 0 2px 5px 0 rgba(0,0,0,.26);
          border-radius: 0;
      }
      `
    ],
    templateUrl: 'demo/app/demo-head/demo-head.html',
    encapsulation: ViewEncapsulation.Emulated
})
export class DemoHead {
    result: any;
    @Input() title: string;
    @Input() description: string;
    @Input() modalCommands: ModalCommandDescriptor[];
    
    @Output() dropInClick: EventEmitter<DropInClickEvent> = new EventEmitter<DropInClickEvent>();
    @ViewChild('commands', {read: ViewContainerRef}) public vcCommands: ViewContainerRef;


    onClick(event: Event, btn: ModalCommandDescriptor) {
        this.dropInClick.emit({
            event,
            source: btn
        });
        this.processDialog(btn.factory());
    }

    private processDialog(dialog: Promise<DialogRef<any>>) {
        dialog.then((resultPromise) => {
            return resultPromise.result.then((result) => {
                this.result = result;
            }, () => this.result = 'Rejected!');
        });
    }
}
