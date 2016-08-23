import 'rxjs/add/operator/first';

import { Injectable, ResolvedReflectiveProvider as RRP } from '@angular/core';

import {
  Maybe,
  Overlay,
  DialogRef,
  DROP_IN_TYPE,
  Modal as Modal_,
  CSSBackdrop,
  CSSDialogContainer,
  PromiseCompleter
} from '../../../../components/angular2-modal';

import { DropInPresetBuilder } from './presets/dropin-preset';

@Injectable()
export class Modal extends Modal_ {
  constructor(base: Overlay) {
    super(base);
  }

  alert(): DropInPresetBuilder {
    return new DropInPresetBuilder(this, DROP_IN_TYPE.alert, {isBlocking: false} as any);
  }

  prompt(): DropInPresetBuilder {
    return new DropInPresetBuilder(this, DROP_IN_TYPE.prompt, {
      isBlocking: true,
      keyboard: null
    }  as any);
  }

  confirm(): DropInPresetBuilder {
    return new DropInPresetBuilder(this, DROP_IN_TYPE.confirm, {
      isBlocking: true,
      keyboard: null
    }  as any);
  }

  protected create(dialogRef: DialogRef<any>,
                   type: any,
                   bindings?: RRP[]): Maybe<DialogRef<any>> {

    let refs = this.createModal(dialogRef, CSSBackdrop, CSSDialogContainer);

    refs.containerRef.instance.addComponent(type, bindings);

    let overlay = dialogRef.overlayRef.instance;
    let backdrop = refs.backdropRef.instance;
    let container = refs.containerRef.instance;

    dialogRef.inElement ? overlay.insideElement() : overlay.fullscreen();

    // add body class if this is the only dialog in the stack
    if (!document.body.classList.contains('vex-open')) {
      document.body.classList.add('vex-open');
    }

    overlay.addClass(`vex vex-theme-${dialogRef.context.className}`);
    backdrop.addClass('vex-overlay');
    container.addClass(dialogRef.context.contentClassName);
    container.setStyle('display', 'block');
    if (dialogRef.inElement) {
      overlay.setStyle('padding', '0');
      container.setStyle('margin-top', '20px');
    }

    if (refs.containerRef.location.nativeElement) {
      refs.containerRef.location.nativeElement.focus();
    }

    overlay.beforeDestroy(() => {
      overlay.addClass('vex-closing');

      // TODO:
      // Change detection doesn't run after removing these classes, not even in 'nextTurn'
      // e.g: backdrop.removeClass('in', true);
      // the only solution is to change immediately and tick the change detection.
      // This happen for every click (unlike bootstrap plugin).
      // oddly using ChangeDetectorRef.detectChanges() doesn't work... ???
      // running inside zone didn't help.
      overlay.tick();

      const completer = new PromiseCompleter<void>();
      container.animationEnd$.first().subscribe(type => {
        // on removal, remove if last.

        this.overlay.groupStackLength(dialogRef) === 1 && document.body.classList.remove('vex-open');
        completer.resolve()
      });
      return completer.promise;
    });

    if (dialogRef.context.className === 'bottom-right-corner') {
      overlay.setStyle('overflow-y', 'hidden');
      container.setStyle('position', 'absolute');
    } else {
      overlay.beforeDestroy(() => {
        const completer = new PromiseCompleter<void>();
        backdrop.animationEnd$.first().subscribe(type => completer.resolve());
        return completer.promise;
      });
    }

    overlay.setClickBoundary(refs.containerRef.location.nativeElement);

    return dialogRef;
  }
}
