import { Modal } from './providers';

export * from './framework/fluent-assign';
export { extend, arrayUnion, PromiseCompleter } from './framework/utils';
export { createComponent } from './framework/createComponent';

export { DialogRef, MaybeDialogRef } from './models/dialog-ref';

export {
  DROP_IN_TYPE,
  ModalBackdropComponent,
  ModalComponent,
  ModalCompileConfig,
  OverlayRenderer
} from './models/tokens';

export { Modal, DOMOverlayRenderer } from './providers';

export {
  OverlayContext,
  OverlayContextBuilder,
  ModalControllingContextBuilder
} from './models/overlay-context';

export {
  Overlay,
  ModalOverlay,
  OverlayDialogBoundary,
  OverlayTarget
} from './overlay';

export {
  DEFAULT_VALUES,
  ModalContext,
  ModalContextBuilder
} from './models/modal-context';

export { ModalOpenContext, ModalOpenContextBuilder } from './models/modal-open-context';

export * from './components';

export { ModalModule } from './angular2-modal.module';

