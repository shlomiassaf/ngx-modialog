import {
  Injectable,
  ReflectiveInjector,
  ResolvedReflectiveProvider as RRP
} from '@angular/core';

import {
  Maybe,
  Overlay,
  DialogRef,
  Modal as Modal_
} from '../../../../components/angular2-modal';

import { InAppModalBackdrop } from './modal-backdrop';
import { InAppModalContextBuilder } from './modal-context';

@Injectable()
export class Modal extends Modal_ {
  constructor(base: Overlay) {
    super(base);
  }

  alert(): InAppModalContextBuilder {
    return new InAppModalContextBuilder(this);
  }

  protected create(dialogRef: DialogRef<any>,
                   type: any,
                   bindings?: RRP[]): Maybe<DialogRef<any>> {
    if (dialogRef.inElement) {
      dialogRef.overlayRef.instance.insideElement();
    } else {
      dialogRef.overlayRef.instance.fullscreen();
    }

    dialogRef.overlayRef.instance.addComponent(InAppModalBackdrop, bindings);

    dialogRef.overlayRef.instance.setStyle('position', 'relative');
    dialogRef.overlayRef.instance.setStyle('display', 'block');

    return dialogRef;
  }
}
