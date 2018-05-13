// heavily inspired by:
// http://www.bennadel.com/blog/3025-creating-custom-dom-and-host-event-bindings-in-angular-2-beta-6.htm

import { Injectable } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { noop } from '../framework/utils';

// TODO: use DI factory for this.
// TODO: consolidate dup code
const isDoc: boolean = !(typeof document === 'undefined' || !document);

const eventMap = {
    clickOutside: 'click',
    mousedownOutside: 'mousedown',
    mouseupOutside: 'mouseup',
    mousemoveOutside: 'mousemove'
};

/**
 * An event handler factory for event handlers that bubble the event to a given handler
 * if the event target is not an ancestor of the given element.
 * @param element
 * @param handler
 */
function bubbleNonAncestorHandlerFactory(element: HTMLElement, handler: (event) => void) {
    return (event) => {
        let current = event.target;
        do {
            if (current === element) {
                return;
            }
        } while (current.parentNode && ( current = current.parentNode ));

        handler(event);
    };
}

@Injectable()
export class DOMOutsideEventPlugin { // extends EventManagerPlugin
    manager: EventManager;

    constructor() {
    if (!isDoc || typeof document.addEventListener !== 'function') {
        this.addEventListener = noop as any;
    }
    }

    supports(eventName: string): boolean {
        return eventMap.hasOwnProperty(eventName);
    }

    addEventListener(element: HTMLElement, eventName: string, handler: Function): Function {
        const zone = this.manager.getZone();

        // A Factory that registers the event on the document, instead of the element.
        // the handler is created at runtime, and it acts as a propagation/bubble predicate, it will
        // bubble up the event (i.e: execute our original event handler) only if the event targer
        // is an ancestor of our element.
        // The event is fired inside the angular zone so change detection can kick into action.
        const onceOnOutside = () => {
            const listener =
              bubbleNonAncestorHandlerFactory(element, evt => zone.runGuarded(() => handler(evt)));

            // mimic BrowserDomAdapter.onAndCancel
            document.addEventListener(eventMap[eventName], listener, false);
            return () => document.removeEventListener(eventMap[eventName], listener, false);
        };

        // we run the event registration for the document in a different zone, this will make sure
        // change detection is off.
        // It turns out that if a component that use DOMOutsideEventPlugin is built from a click
        // event, we might get here before the event reached the document, causing a quick false
        // positive handling (when stopPropagation() was'nt invoked). To workaround this we wait
        // for the next vm turn and register.
        // Event registration returns a dispose function for that event, angular use it to clean
        // up after component get's destroyed. Since we need to return a dispose function
        // synchronously we have to put a wrapper for it since we will get it asynchronously,
        // i.e: after we need to return it.
        //
        return zone.runOutsideAngular(() => {
            let fn: Function;
            setTimeout(() => fn = onceOnOutside(), 0);
            return () => {
                if (fn) fn();
            };
        });
    }

}
