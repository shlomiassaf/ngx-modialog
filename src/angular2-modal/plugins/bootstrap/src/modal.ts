import { combineLatest } from 'rxjs/operator/combineLatest';

import {
  Injectable,
  ResolvedReflectiveProvider as RRP
} from '@angular/core';

import {
  Maybe,
  ContainerContent,
  Overlay,
  DialogRef,
  Modal as Modal_,
  CSSBackdrop,
  PromiseCompleter
} from 'angular2-modal';

import { BSModalContainer } from './modal-container.component';

import { OneButtonPresetBuilder } from './presets/one-button-preset';
import { TwoButtonPresetBuilder, PromptPresetBuilder } from './presets/two-button-preset';

// TODO: use DI factory for this.
// TODO: consolidate dup code
const isDoc: boolean = !(typeof document === 'undefined' || !document);

@Injectable()
export class Modal extends Modal_ {
  constructor(overlay: Overlay) {
    super(overlay);
  }

  alert(): OneButtonPresetBuilder {
    return new OneButtonPresetBuilder(this, <any>{isBlocking: false});
  }

  prompt(): PromptPresetBuilder {
    return new PromptPresetBuilder(this, <any>{isBlocking: true, keyboard: null});
  }

  confirm(): TwoButtonPresetBuilder {
    return new TwoButtonPresetBuilder(this, <any>{isBlocking: true, keyboard: null});
  }

  protected create(dialogRef: DialogRef<any>,
                   content: ContainerContent,
                   bindings?: RRP[]): Maybe<DialogRef<any>> {

    const backdropRef = this.createBackdrop(dialogRef, CSSBackdrop);
    const containerRef = this.createContainer(dialogRef, BSModalContainer, content, bindings);

    let overlay = dialogRef.overlayRef.instance;
    let backdrop = backdropRef.instance;
    let container = containerRef.instance;

    dialogRef.inElement ? overlay.insideElement() : overlay.fullscreen();

    // add body class if this is the only dialog in the stack
    if (isDoc && !document.body.classList.contains('modal-open')) {
      document.body.classList.add('modal-open');
    }


    if (dialogRef.inElement) {
      backdrop.setStyle('position', 'absolute');
    }
    backdrop.addClass('modal-backdrop fade', true);

    backdrop.addClass('in');
    container.addClass('in');

    if (containerRef.location.nativeElement) {
      containerRef.location.nativeElement.focus();
    }

    overlay.beforeDestroy(() => {
      const completer = new PromiseCompleter<void>();
      backdrop.removeClass('in');
      container.removeClass('in');

      combineLatest.call(backdrop.myAnimationEnd$(), container.myAnimationEnd$(), (s1, s2) => [s1,s2])
        .subscribe( sources => {
          isDoc && this.overlay.groupStackLength(dialogRef) === 1 && document.body.classList.remove('modal-open');
          completer.resolve();
        });

      return completer.promise;
    });

    return dialogRef;
  }
}
