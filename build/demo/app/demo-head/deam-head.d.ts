import { EventEmitter, ViewContainerRef } from '@angular/core';
import { DialogRef } from '../../../components/angular2-modal';
export interface ModalCommandDescriptor {
    text: string;
    factory: () => Promise<DialogRef<any>>;
}
export interface DropInClickEvent {
    event: Event;
    source: ModalCommandDescriptor;
}
export declare class DemoHead {
    result: any;
    title: string;
    description: string;
    modalCommands: ModalCommandDescriptor[];
    dropInClick: EventEmitter<DropInClickEvent>;
    vcCommands: ViewContainerRef;
    onClick(event: Event, btn: ModalCommandDescriptor): void;
    private processDialog(dialog);
}
