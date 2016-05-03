// heavily inspired by:
// http://www.bennadel.com/blog/3025-creating-custom-dom-and-host-event-bindings-in-angular-2-beta-6.htm

import {Injectable} from '@angular/core';
import {DomEventsPlugin} from '@angular/platform-browser';
import {getDOM, DomAdapter} from '@angular/platform-browser/src/dom/dom_adapter';
import {noop} from '@angular/core/src/facade/lang';

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
 * @returns {function(any): undefined}
 */
function bubbleNonAncestorHandlerFactory(element: HTMLElement, handler: (event) => void) {
    return (event) => {
        let current = event.target;
        do {
            if ( current === element ) {
                return;
            }
        } while ( current.parentNode && ( current = current.parentNode ) );

        handler(event);
    };
}

@Injectable()
export class DOMOutsideEventPlugin extends DomEventsPlugin {
    private _DOM: DomAdapter;
    constructor() {
        super();
        this._DOM = getDOM();
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
        const onceOnOutside = () => this._DOM.onAndCancel(
            this._DOM.getGlobalEventTarget('document'),
            eventMap[eventName],
            bubbleNonAncestorHandlerFactory(element, evt => zone.runGuarded(() => handler(evt)))
        );

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
            return () => fn();
        });
    }

    addGlobalEventListener(target: string, eventName: string, handler: Function): Function {
        if ((target === 'document') || (target === 'window' )) {
            return noop;
        } else {
            const element = this._DOM.getGlobalEventTarget(target),
                  zone = this.manager.getZone();

            return this.manager.getZone().runOutsideAngular(
                () => this._DOM.onAndCancel(
                    element,
                    eventName,
                    evt => zone.runGuarded(() => handler(evt))
                )
            );
        }
    }
}
