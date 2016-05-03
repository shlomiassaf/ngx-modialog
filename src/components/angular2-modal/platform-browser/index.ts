import {provide} from '@angular/core';

import {EVENT_MANAGER_PLUGINS} from '@angular/platform-browser';
import {DOMOutsideEventPlugin} from './outside-event-plugin';

export {DOMOutsideEventPlugin} from './outside-event-plugin';

export const MODAL_BROWSER_PROVIDERS = [
    provide(EVENT_MANAGER_PLUGINS, { multi: true, useClass: DOMOutsideEventPlugin})
];