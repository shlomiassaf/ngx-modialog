import {provide} from 'angular2/core';

import {EVENT_MANAGER_PLUGINS} from 'angular2/platform/common_dom';
import {DOMOutsideEventPlugin} from './browser/outside-event-plugin';

export {DOMOutsideEventPlugin} from './browser/outside-event-plugin';

export const MODAL_BROWSER_PROVIDERS = [
    provide(EVENT_MANAGER_PLUGINS, { multi: true, useClass: DOMOutsideEventPlugin})
];