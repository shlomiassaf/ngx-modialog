import { provide, Provider } from '@angular/core';

import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';
import { DOMOutsideEventPlugin } from './outside-event-plugin';
import { ModalRenderer, DOMModalRenderer } from '../angular2-modal';

export { DOMOutsideEventPlugin } from './outside-event-plugin';

export const MODAL_BROWSER_PROVIDERS: Provider[] = [
    provide(ModalRenderer, {useClass: DOMModalRenderer}),
    provide(EVENT_MANAGER_PLUGINS, { multi: true, useClass: DOMOutsideEventPlugin})
];
