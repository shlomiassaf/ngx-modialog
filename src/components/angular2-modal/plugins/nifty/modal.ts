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
import { DialogPreset, DialogPresetBuilder, PromptPresetBuilder } from './presets/dialog-preset';
import { NiftyDialog } from "./dialog.component";


const OK_HANDLER = (cmp: NiftyDialog, $event: MouseEvent) => cmp.dialog.close(true);
const PROMPT_HANDLER = (cmp: any, $event: MouseEvent) => cmp.dialog.close(cmp.dialog.context.value);
const CANCEL_HANDLER = (cmp: NiftyDialog, $event: MouseEvent) => cmp.dialog.dismiss();

@Injectable()
export class Modal extends Modal_ {
  constructor(overlay: Overlay) {
    super(overlay);
  }

  alert(): DialogPresetBuilder<DialogPreset> {
    return new DialogPresetBuilder<DialogPreset>(this, <any>{isBlocking: false})
      .addButton('nifty-btn-default', 'OK', OK_HANDLER);
  }

  prompt(): PromptPresetBuilder {
    return new PromptPresetBuilder(this, <any>{isBlocking: true, keyboard: null})
      .addButton('nifty-btn-default', 'OK', PROMPT_HANDLER)
      .addButton('nifty-btn-cancel', 'CANCEL', CANCEL_HANDLER);
  }

  confirm(): DialogPresetBuilder<DialogPreset> {
    return new DialogPresetBuilder<DialogPreset>(this, <any>{isBlocking: true, keyboard: null})
      .addButton('nifty-btn-default', 'OK', OK_HANDLER)
      .addButton('nifty-btn-cancel', 'CANCEL', CANCEL_HANDLER);
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
