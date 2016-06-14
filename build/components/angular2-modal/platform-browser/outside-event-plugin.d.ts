import { DomEventsPlugin } from '@angular/platform-browser';
export declare class DOMOutsideEventPlugin extends DomEventsPlugin {
    private _DOM;
    constructor();
    supports(eventName: string): boolean;
    addEventListener(element: HTMLElement, eventName: string, handler: Function): Function;
    addGlobalEventListener(target: string, eventName: string, handler: Function): Function;
}
