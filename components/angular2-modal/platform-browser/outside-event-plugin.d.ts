import { EventManager } from '@angular/platform-browser';
export declare class DOMOutsideEventPlugin {
    manager: EventManager;
    constructor();
    supports(eventName: string): boolean;
    addEventListener(element: HTMLElement, eventName: string, handler: Function): Function;
    addGlobalEventListener(target: string, eventName: string, handler: Function): Function;
}
