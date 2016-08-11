import { Modal } from './providers';

export * from './framework/fluent-assign';
export { createComponent } from './framework/createComponent';

export { DialogRef } from './models/dialog-ref';

export {
    DROP_IN_TYPE,
    ModalDropInFactory,
    ModalBackdropComponent,
    ModalComponent,
    ModalCompileConfig,
    ModalRenderer
} from './models/tokens';

export { Modal, DOMModalRenderer } from './providers';

export {
    DEFAULT_VALUES,
    ModalContext,
    ModalContextBuilder,
    ModalControllingContextBuilder
} from './models/modal-context';

export { ModalOpenContext, ModalOpenContextBuilder } from './models/modal-open-context';


export { ModalModule } from './angular2-modal.module';
