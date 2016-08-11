import { 
  ComponentRef,
  ComponentFactoryResolver,
  ElementRef,
  ResolvedReflectiveProvider,
  OnDestroy,
  ViewContainerRef
} from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { DomSanitizationService, SafeStyle } from '@angular/platform-browser';
import { createComponent } from "../framework/createComponent";

const BROWSER_PREFIX = ['webkit', 'moz', 'MS', 'o', ''];

function register(eventName, element, cb) {
  BROWSER_PREFIX.forEach( p => {
    element.addEventListener(p ? p + eventName : eventName.toLowerCase(), cb, false);
  });
}

/**
 * A base class that expose customisation methods in derived components.
 * Capabilities: Add/Remove styls, Add/Remove classes, listen to animation/transition end event,
 * add components
 */
export class BaseDynamicComponent implements OnDestroy {
  animationEnd$: Observable<'transition' | 'animation'>;

  protected animationEnd: Subject<'transition' | 'animation'>;
  protected style: { [prop: string]: string } = {} as any;
  protected styleStr: SafeStyle = '';
  protected cssClass: SafeStyle = '';
  protected classArray: string[] = [];
  private applyOnNextTurn: boolean;

  constructor(protected sanitizer: DomSanitizationService, 
              protected el: ElementRef) {}
  
  activateAnimationListener() {
    if (this.animationEnd) return;
    this.animationEnd = new Subject<'transition' | 'animation'>();
    this.animationEnd$ = this.animationEnd.asObservable();
    register('TransitionEnd', this.el.nativeElement, this.onEndTransition.bind(this));
    register('AnimationEnd', this.el.nativeElement, this.onEndAnimation.bind(this));
  }
  /**
   * Set a specific inline style on the overlay host element.
   * @param prop The style key
   * @param value The value, undefined to remove
   * @returns {ModalOverlay}
   */
  setStyle(prop: string, value: string): this {
    if (this.style[prop] !== value) {
      if (value === undefined) {
        delete this.style[prop];
      } else {
        this.style[prop] = value;
      }

      this.applyStyle();
    }
    return this;
  }
  
  /**
   * Remove's all inline styles from the overlay host element.
   */
  clearStyles(): void {
    this.style = {} as any;
    this.applyStyle();
  }

  addClass(css: string, nextTurn: boolean = false): void {
    if (typeof css === 'string') {
      css.split(' ').forEach( c => this._addClass(c, nextTurn) );
    }
  }

  removeClass(css: string, nextTurn: boolean = false): void {
    if (typeof css === 'string') {
      css.split(' ').forEach( c => this._removeClass(c, nextTurn) );
    }
  }

  ngOnDestroy(): void {
    if (this.animationEnd && !this.animationEnd.isUnsubscribed) {
      this.animationEnd.complete();
    }
  }

  protected applyStyle(): void {
    this.styleStr = this.sanitizer.bypassSecurityTrustStyle(JSON.stringify(this.style)
      .replace('{', '')
      .replace('}', '')
      .replace(/,/g, ';')
      .replace(/"/g, ''));
  }
  
  protected applyClasses(nextTurn: boolean) {
    if (nextTurn === true) {
      if (!this.applyOnNextTurn) {
        this.applyOnNextTurn = true;
        setTimeout(() => {
          this.applyOnNextTurn = false;
          this.applyClasses(false);
        });
      }
    } else {
      this.cssClass = this.classArray.join(' ');
    }
  }
   
  /**
   * Add a component, supply a view container ref.
   * Note: The components vcRef will result in a sibling.
   * @param type The component to add
   * @param vcRef The container to add to
   * @param bindings Bindings to use (added on top of the ViewContainerRef)
   * @returns {Promise<ComponentRef<any>>}
   */
  protected _addComponent<T>(type: any,
                             vcRef: ViewContainerRef,
                             bindings?: ResolvedReflectiveProvider[]): ComponentRef<T> {
    const cmpRef =
      createComponent(vcRef.injector.get(ComponentFactoryResolver), type, vcRef, bindings || []);

    cmpRef.changeDetectorRef.detectChanges();

    return cmpRef;
  }

  private onEndTransition() {
    if (!this.animationEnd.isUnsubscribed) {
      this.animationEnd.next('transition');
    }

  }

  private onEndAnimation() {
    if (!this.animationEnd.isUnsubscribed) {
      this.animationEnd.next('animation');
    }
  }

  private _addClass(css: string, nextTurn: boolean = false): void {
    if (this.classArray.indexOf(css) > -1) return;
    this.classArray.push(css);
    this.applyClasses(nextTurn);
  }

  private _removeClass(css: string, nextTurn: boolean = false): void {
    const idx = this.classArray.indexOf(css);
    if (idx > -1) {
      this.classArray.splice(idx, 1);
      this.applyClasses(nextTurn);
    }
  }
}
