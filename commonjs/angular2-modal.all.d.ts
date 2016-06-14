export * from './framework/fluent-assign';
export * from './models/tokens';
export * from './models/dialog-ref';
export * from './models/modal-context';
export * from './models/modal-open-context';
export { Modal } from './providers/modal';
export { DOMModalRenderer } from './providers/dom-modal-renderer';
export declare const MODAL_PROVIDERS: any[];
import * as bootstrap from './plugins/bootstrap/index';
import * as vex from './plugins/vex/index';
export declare const plugins: {
    bootstrap: typeof bootstrap;
    vex: typeof vex;
};
