import { Observable } from 'rxjs';
import { combineLatest } from 'rxjs/operator/combineLatest';
import { Injectable } from '@angular/core';

import {
  ContainerContent,
  Overlay,
  DialogRef,
  DROP_IN_TYPE,
  Modal as Modal_,
  CSSBackdrop,
  CSSDialogContainer,
  PromiseCompleter
} from 'ngx-modialog';

import { DropInPresetBuilder } from './presets/dropin-preset';
import { VexCSSDialogContainer } from './vex-css-dialog-container';

// TODO: use DI factory for this.
// TODO: consolidate dup code
const isDoc: boolean = !(typeof document === 'undefined' || !document);

let vexV3 = false;
/**
 * Execute this method to flag that you are working with VEX version 3.
 */
export function vexV3Mode(): void {
  vexV3 = true;
}

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

  protected create(dialogRef: DialogRef<any>, content: ContainerContent): DialogRef<any> {
    if (vexV3 === true) {
      return this.createV3(dialogRef, content);
    }

    const backdropRef = this.createBackdrop(dialogRef, CSSBackdrop);
    const containerRef = this.createContainer(dialogRef, VexCSSDialogContainer, content);

    let overlay = dialogRef.overlayRef.instance;
    let backdrop = backdropRef.instance;
    let container = containerRef.instance;

    if (dialogRef.inElement) {
      overlay.insideElement();

      overlay.setContainerStyle('position', 'relative')
        .setContainerStyle('height', '100%')
        .setContainerStyle('width', '100%');

      backdrop.setStyle('position', 'absolute')
        .setStyle('display', 'block')
        .setStyle('height', '100%')
        .setStyle('width', '100%');

      container.setStyle('position', 'relative')
        .setStyle('display', 'block')
        .setStyle('height', '100%')
        .setStyle('width', '100%');

    } else {
      overlay.fullscreen();
    }

    // add body class if this is the only dialog in the stack
    if (isDoc && !document.body.classList.contains('vex-open')) {
      document.body.classList.add('vex-open');
    }

    backdrop.addClass('vex-overlay');
    container.addClass(`vex vex-theme-${dialogRef.context.className}`);

    container.setStyle('display', 'block');

    if (containerRef.location.nativeElement) {
      containerRef.location.nativeElement.focus();
    }

    overlay.beforeDestroy(() => {
      backdrop.addClass('vex-closing');
      container.addClass('vex-closing');
      const completer = new PromiseCompleter<void>();

      let animationEnd$: Observable<any> = backdrop.myAnimationEnd$();

      // TODO: the child element inside the container (vex-content) is the one with animation
      // need to also wait for it to end, but this requires a reference to to it.
      // the container itself is its parent, won't do.
      // animationEnd$ = combineLatest.call(animationEnd$, container.myAnimationEnd$(), (s1, s2) => [s1,s2] );

      animationEnd$.subscribe( sources => {
        isDoc && this.overlay.groupStackLength(dialogRef) === 1 && document.body.classList.remove('vex-open');
        completer.resolve();
      });

      return completer.promise;
    });

    container.apply(overlay);

    return dialogRef;
  }

  private createV3(dialogRef: DialogRef<any>, content: ContainerContent): DialogRef<any> {

    const backdropRef = this.createBackdrop(dialogRef, CSSBackdrop);
    const containerRef = this.createContainer(dialogRef, CSSDialogContainer, content);

    let overlay = dialogRef.overlayRef.instance;
    let backdrop = backdropRef.instance;
    let container = containerRef.instance;

    dialogRef.inElement ? overlay.insideElement() : overlay.fullscreen();

    // add body class if this is the only dialog in the stack
    if (isDoc && !document.body.classList.contains('vex-open')) {
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
        animationEnd$ = combineLatest.call(animationEnd$, backdrop.myAnimationEnd$(), (s1, s2) => [s1,s2] );
      }

      animationEnd$.subscribe( sources => {
        isDoc && this.overlay.groupStackLength(dialogRef) === 1 && document.body.classList.remove('vex-open');
        completer.resolve();
      });

      return completer.promise;
    });


    overlay.setClickBoundary(containerRef.location.nativeElement);

    return dialogRef;
  }
}
