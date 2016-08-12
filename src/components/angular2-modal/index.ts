import { Modal } from './providers';

export * from './framework/fluent-assign';
export { extend, arrayUnion, PromiseCompleter, Maybe } from './framework/utils';
export { createComponent } from './framework/createComponent';

export * from './models/errors';

export { DialogRef } from './models/dialog-ref';

export {
  DROP_IN_TYPE,
  ModalComponent,
  OverlayRenderer,
  OverlayConfig,
  CloseGuard
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

