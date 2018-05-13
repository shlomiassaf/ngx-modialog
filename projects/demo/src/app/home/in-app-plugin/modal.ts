import { Injectable } from '@angular/core';

import {
  Overlay,
  DialogRef,
  ContainerContent,
  Modal as Modal_
} from 'ngx-modialog';

import { InAppModalBackdrop } from './modal-backdrop';
import { InAppModalContextBuilder } from './modal-context';

@Injectable()
export class Modal extends Modal_ {
  constructor(overlay: Overlay) {
    super(overlay);
  }

  alert(): InAppModalContextBuilder {
    return new InAppModalContextBuilder(this);
  }

  protected create(dialogRef: DialogRef<any>, content: ContainerContent): DialogRef<any> {
    if (dialogRef.inElement) {
      dialogRef.overlayRef.instance.insideElement();
    } else {
      dialogRef.overlayRef.instance.fullscreen();
    }

    dialogRef.overlayRef.instance.addComponent(InAppModalBackdrop);

    dialogRef.overlayRef.instance.setStyle('position', 'relative');
    dialogRef.overlayRef.instance.setStyle('display', 'block');

    return dialogRef;
  }
}
