import { FluentAssign, FluentAssignMethod } from './../framework/fluent-assign';
import { extend, arrayUnion } from './../framework/utils';
import { DialogRef } from './dialog-ref';
import { WideVCRef, OverlayConfig } from './tokens';

export const DEFAULT_VALUES = {
  inElement: false,
  isBlocking: true,
  keyboard: [27],
  supportsKey: function supportsKey(keyCode: number): boolean {
    return (<Array<number>>this.keyboard).indexOf(keyCode) > -1;
  }
};

const DEFAULT_SETTERS = [
  'inElement',
  'isBlocking',
  'keyboard'
];

export class OverlayContext {
  /**
   * Describes if the modal is rendered within the container element.
   * The container element is the ViewContainerRef supplied.
   * Defaults to false.
   */
  inElement: boolean;

  /**
   * Describes if the modal is blocking modal.
   * A Blocking modal is not closable by clicking outside of the modal window.
   * Defaults to false.
   */
  isBlocking: boolean;

  /**
   * Keyboard value/s that close the modal.
   * Accepts either a single numeric value or an array of numeric values.
   * A modal closed by a keyboard stroke will result in a 'reject' notification from the promise.
   * Defaults to 27, set `null` implicitly to disable.
   */
  keyboard: Array<number> | number;

  normalize(): void {
    if (this.isBlocking !== false)
      this.isBlocking = true;

    if (this.keyboard === null) {
      this.keyboard = [];
    } else if (typeof this.keyboard === 'number') {
      this.keyboard = [<number>this.keyboard];
    } else if (!Array.isArray(<Array<number>>this.keyboard)) {
      this.keyboard = DEFAULT_VALUES.keyboard;
    }
  }
}

/**
 * A core context builder for a modal window instance, used to define the context upon
 * a modal choose it's behaviour.
 */
export class OverlayContextBuilder<T extends OverlayContext> extends FluentAssign<T> {
  /**
   * Describes if the modal is rendered within the container element.
   * The container element is the ViewContainerRef supplied.
   * Defaults to false.
   */
  inElement: FluentAssignMethod<boolean, this>;

  /**
   * Describes if the modal is blocking modal.
   * A Blocking modal is not closable by clicking outside of the modal window.
   * Defaults to false.
   */
  isBlocking: FluentAssignMethod<boolean, this>;

  /**
   * Keyboard value/s that close the modal.
   * Accepts either a single numeric value or an array of numeric values.
   * A modal closed by a keyboard stroke will result in a 'reject' notification from the promise.
   * Defaults to 27, set `null` implicitly to disable.
   */
  keyboard: FluentAssignMethod<Array<number> | number, this>;


  constructor(defaultValues: T | T[] = undefined,
              initialSetters: string[] = undefined,
              baseType: new () => T = undefined) {
    super(
      extend<any>(DEFAULT_VALUES, defaultValues || {}),
      arrayUnion<string>(DEFAULT_SETTERS, initialSetters || []),
      baseType || <any>OverlayContext // https://github.com/Microsoft/TypeScript/issues/7234
    );
  }

  /**
   * Returns an new OverlayConfig with a context property representing the data in this builder.
   * @param base A base configuration that the result will extend
   */
  toOverlayConfig(base?: OverlayConfig): OverlayConfig {
    return extend(base || {}, {
      context: this.toJSON()
    });
  }
}

export interface ModalControllingContextBuilder<T> {
  open(viewContainer?: WideVCRef): DialogRef<T>;
}

/**
 * A helper to create an `OverlayConfig` on the fly.
 * Since `OverlayConfig` requires context it means a builder is needed, this process had some boilerplate.
 * When a quick, on the fly overlay config is needed use this helper to avoid that boilerplate.
 *
 * A builder is used as an API to allow setting the context and providing some operations around the modal.
 * When a developers knows the context before hand we can skip this step, this is what this factory is for.
 *
 * @param context The context for the modal
 * @param baseContextType Optional. The type/class of the context. This is the class used to init a new instance of the context
 * @param baseConfig A base configuration that the result will extend
 */
export function overlayConfigFactory<T>(context: T, baseContextType?: any, baseConfig?: OverlayConfig): OverlayConfig {
  return new OverlayContextBuilder<T & OverlayContext>(<any>context, undefined, baseContextType).toOverlayConfig(baseConfig);
}
