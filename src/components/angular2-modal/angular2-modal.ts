import { Modal } from './providers/modal';

export * from './framework/fluent-assign';
export { DialogRef } from './models/dialog-ref';

export {
    DROP_IN_TYPE,
    ModalDropInFactory,
    ModalBackdropComponent,
    ModalComponent,
    ModalCompileConfig,
    ModalRenderer
} from './models/tokens';

export { Modal } from './providers/modal';
export { DOMModalRenderer } from './providers/dom-modal-renderer';

export {
    DEFAULT_VALUES,
    ModalContext,
    ModalContextBuilder,
    ModalControllingContextBuilder
} from './models/modal-context';

export { ModalOpenContext, ModalOpenContextBuilder } from './models/modal-open-context';


export { ModalModule } from './angular2-modal.module';
