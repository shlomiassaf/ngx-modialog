import { Observable } from "rxjs";
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/combineLatest';

import { Injectable, ResolvedReflectiveProvider as RRP } from '@angular/core';

import {
  ContainerContent,
  Maybe,
  Overlay,
  DialogRef,
  DROP_IN_TYPE,
  Modal as Modal_,
  CSSBackdrop,
  CSSDialogContainer,
  PromiseCompleter
} from 'angular2-modal';

import { DropInPresetBuilder } from './presets/dropin-preset';


@Injectable()
export class Modal extends Modal_ {
  constructor(overlay: Overlay) {
    super(overlay);
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
                   content: ContainerContent,
                   bindings?: RRP[]): Maybe<DialogRef<any>> {

    const backdropRef = this.createBackdrop(dialogRef, CSSBackdrop);
    const containerRef = this.createContainer(dialogRef, CSSDialogContainer, content, bindings);

    let overlay = dialogRef.overlayRef.instance;
    let backdrop = backdropRef.instance;
    let container = containerRef.instance;

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

    if (containerRef.location.nativeElement) {
      containerRef.location.nativeElement.focus();
    }

    if (dialogRef.context.className === 'bottom-right-corner') {
      overlay.setStyle('overflow-y', 'hidden');
      container.setStyle('position', 'absolute');
    }

    overlay.beforeDestroy(() => {
      overlay.addClass('vex-closing');
      const completer = new PromiseCompleter<void>();

      let animationEnd$: Observable<any> = container.myAnimationEnd$();
      if (dialogRef.context.className !== 'bottom-right-corner') {
        animationEnd$ = animationEnd$.combineLatest(backdrop.myAnimationEnd$(), (s1, s2) => [s1,s2] );
      }

      animationEnd$.subscribe( sources => {
        this.overlay.groupStackLength(dialogRef) === 1 && document.body.classList.remove('vex-open');
        completer.resolve();
      });

      return completer.promise;
    });


    overlay.setClickBoundary(containerRef.location.nativeElement);

    return dialogRef;
  }
}
