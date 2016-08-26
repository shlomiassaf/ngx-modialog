import 'rxjs/add/operator/combineLatest';

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
  CSSDialogContainer,
  PromiseCompleter
} from '../../../../components/angular2-modal';

import { BSModalContainer } from './modal-container.component';

import { OneButtonPresetBuilder } from './../bootstrap/presets/one-button-preset';
import { TwoButtonPresetBuilder } from './../bootstrap/presets/two-button-preset';


@Injectable()
export class Modal extends Modal_ {
  constructor(overlay: Overlay) {
    super(overlay);
  }

  alert(): OneButtonPresetBuilder {
    return new OneButtonPresetBuilder(this, <any>{isBlocking: false});
  }

  prompt(): OneButtonPresetBuilder {
    return new OneButtonPresetBuilder(this, <any>{isBlocking: true, keyboard: null});
  }

  confirm(): TwoButtonPresetBuilder {
    return new TwoButtonPresetBuilder(this, <any>{isBlocking: true, keyboard: null});
  }

  protected create(dialogRef: DialogRef<any>,
                   type: any,
                   bindings?: RRP[]): Maybe<DialogRef<any>> {

    let refs = this.createModal(dialogRef, CSSBackdrop, CSSDialogContainer);

    refs.containerRef
      .instance.addComponent(BSModalContainer, bindings)
      .instance.addComponent(type, bindings);


    let overlay = dialogRef.overlayRef.instance;
    let backdrop = refs.backdropRef.instance;
    let container = refs.containerRef.instance;

    dialogRef.inElement ? overlay.insideElement() : overlay.fullscreen();

    // add body class if this is the only dialog in the stack
    if (!document.body.classList.contains('modal-open')) {
      document.body.classList.add('modal-open');
    }


    if (dialogRef.inElement) {
      backdrop.setStyle('position', 'absolute');
    }
    backdrop.addClass('modal-backdrop fade', true);
    container.setStyle('position', 'absolute');
    container.setStyle('display', 'block');
    container.addClass('modal fade', true);

    backdrop.addClass('in');
    container.addClass('in');

    if (refs.containerRef.location.nativeElement) {
      refs.containerRef.location.nativeElement.focus();
    }

    overlay.beforeDestroy(() => {
      const completer = new PromiseCompleter<void>();
      backdrop.removeClass('in');
      container.removeClass('in');

      backdrop.myAnimationEnd$()
        .combineLatest(container.myAnimationEnd$(), (s1, s2) => [s1,s2] )
        .subscribe( sources => {
          this.overlay.groupStackLength(dialogRef) === 1 && document.body.classList.remove('modal-open');
          completer.resolve();
        });

      return completer.promise;
    });

    return dialogRef;
  }
}
