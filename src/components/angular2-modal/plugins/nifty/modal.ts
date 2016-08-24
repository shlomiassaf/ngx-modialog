import 'rxjs/add/operator/first';

import {
  Injectable,
  ResolvedReflectiveProvider as RRP
} from '@angular/core';

import {
  Maybe,
  Overlay,
  DialogRef,
  Modal as Modal_,
  CSSBackdrop,
  PromiseCompleter
} from '../../../../components/angular2-modal';

import { NiftyContainer } from './modal-container.component';
import { DialogPresetBuilder } from './presets/dialog-preset';
import { NiftyDialog } from "./dialog.component";


@Injectable()
export class Modal extends Modal_ {
  constructor(overlay: Overlay) {
    super(overlay);
  }

  alert(): DialogPresetBuilder {
    return new DialogPresetBuilder(this, <any>{isBlocking: false})
      .addButton('btn', 'OK', (cmp: NiftyDialog, $event: MouseEvent) => cmp.dialog.close(true));
  }

  prompt(): DialogPresetBuilder {
    return new DialogPresetBuilder(this, <any>{isBlocking: true, keyboard: null});
  }

  confirm(): DialogPresetBuilder {
    return new DialogPresetBuilder(this, <any>{isBlocking: true, keyboard: null});
  }

  protected create(dialogRef: DialogRef<any>,
                   type: any,
                   bindings?: RRP[]): Maybe<DialogRef<any>> {

    let refs = this.createModal(dialogRef, CSSBackdrop, NiftyContainer);

    refs.containerRef
      .instance.addComponent(type, bindings);


    let overlay = dialogRef.overlayRef.instance;
    let backdrop = refs.backdropRef.instance;
    let container = refs.containerRef.instance;

    dialogRef.inElement ? overlay.insideElement() : overlay.fullscreen();

    // add body class if this is the only dialog in the stack
    if (!document.body.classList.contains('nifty-perspective')) {
      document.body.classList.add('nifty-perspective');
    }

    overlay.addClass(`${dialogRef.context.overlayCss} nifty-effect-${dialogRef.context.niftyEffectId}`);
    backdrop.addClass(`nifty-backdrop`, true);
    overlay.addClass('nifty-show', true);
    // container.show();


    if (refs.containerRef.location.nativeElement) {
      // refs.containerRef.location.nativeElement.focus();
    }

    overlay.beforeDestroy(() => {
      const completer = new PromiseCompleter<void>();
      overlay.removeClass('nifty-show', true);

      backdrop.animationEnd$.first().subscribe(type => {
        this.overlay.groupStackLength(dialogRef) === 1 && document.body.classList.remove('nifty-perspective');
        completer.resolve()
      });

      return completer.promise;
    });

    return dialogRef;
  }
}
