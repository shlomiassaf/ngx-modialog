import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import {
  ComponentRef,
  ElementRef,
  OnDestroy,
  Renderer2
} from '@angular/core';

import { createComponent, CreateComponentArgs } from '../framework/createComponent';

const BROWSER_PREFIX = ['webkit', 'moz', 'MS', 'o', ''];

function register(eventName, element, cb) {
  BROWSER_PREFIX.forEach( p => {
    element.addEventListener(p ? p + eventName : eventName.toLowerCase(), cb, false);
  });
}

/**
 * A base class for supporting dynamic components.
 * There are 3 main support areas:
 * 1 - Easy wrapper for dynamic styling via CSS classes and inline styles.
 * 2 - Easy wrapper for interception of transition/animation end events.
 * 3 - Easy wrapper for component creation and injection.
 *
 * Dynamic css is done via direct element manipulation (via renderer), it does not use change detection
 * or binding. This is to allow better control over animation.
 *
 * Animation support is limited, only transition/keyframes END even are notified.
 * The animation support is needed since currently the angular animation module is limited as well and
 * does not support CSS animation that are not pre-parsed and are not in the styles metadata of a component.
 *
 * Capabilities: Add/Remove styls, Add/Remove classes, listen to animation/transition end event,
 * add components
 */
export class BaseDynamicComponent implements OnDestroy {
  animationEnd$: Observable<TransitionEvent | AnimationEvent>;

  protected animationEnd: Subject<TransitionEvent | AnimationEvent>;

  constructor(protected el: ElementRef,
              protected renderer: Renderer2) {}

  activateAnimationListener() {
    if (this.animationEnd) return;
    this.animationEnd = new Subject<TransitionEvent | AnimationEvent>();
    this.animationEnd$ = this.animationEnd.asObservable();
    register('TransitionEnd', this.el.nativeElement, (e: TransitionEvent) => this.onEnd(e));
    register('AnimationEnd', this.el.nativeElement, (e: AnimationEvent) => this.onEnd(e));
  }

  /**
   * Set a specific inline style on the overlay host element.
   * @param prop The style key
   * @param value The value, undefined to remove
   */
  setStyle(prop: string, value: string): this {
    this.renderer.setStyle(this.el.nativeElement, prop, value);
    return this;
  }

  forceReflow() {
    this.el.nativeElement.offsetWidth;
  }

  addClass(css: string, forceReflow: boolean = false): void {
    css.split(' ')
      .forEach( c => this.renderer.addClass(this.el.nativeElement, c) );
    if (forceReflow) this.forceReflow();
  }

  removeClass(css: string, forceReflow: boolean = false): void {
    css.split(' ')
      .forEach( c => this.renderer.removeClass(this.el.nativeElement, c) );
    if (forceReflow) {
      this.forceReflow();
    }
  }

  ngOnDestroy(): void {
    if (this.animationEnd && !this.animationEnd.closed) {
      this.animationEnd.complete();
    }
  }

  myAnimationEnd$(): Observable<AnimationEvent | TransitionEvent> {
    return this.animationEnd$.pipe(
      filter(e => e.target === this.el.nativeElement)
    );
  }

  /**
   * Add a component, supply a view container ref.
   * Note: The components vcRef will result in a sibling.
   */
  protected _addComponent<T>(instructions: CreateComponentArgs): ComponentRef<T> {
    const cmpRef = createComponent(instructions);
    cmpRef.changeDetectorRef.detectChanges();

    return cmpRef;
  }


  private onEnd(event: TransitionEvent | AnimationEvent): void {

    if (!this.animationEnd.closed) {
      this.animationEnd.next(event);
    }
  }

}
