import {
  ModalOpenContext,
  ModalOpenContextBuilder,
  FluentAssignMethod,
  privateKey,
  extend,
  arrayUnion
} from 'angular2-modal';


const DEFAULT_VALUES = {
  className: <VEXBuiltInThemes>'default',
  overlayClassName: 'vex-overlay',
  contentClassName: 'vex-content',
  closeClassName: 'vex-close'
};

const DEFAULT_SETTERS = [
  'className',
  'overlayClassName',
  'contentClassName',
  'closeClassName',
  'showCloseButton'
];

export type VEXBuiltInThemes
  = 'default' | 'os' | 'plain' | 'wireframe' | 'flat-attack' | 'top' | 'bottom-right-corner';

export class VEXModalContext extends ModalOpenContext {
  /**
   * Set the built in schema to use.
   */
  className: VEXBuiltInThemes;

  overlayClassName: string;
  contentClassName: string;
  closeClassName: string;

  showCloseButton: boolean;


  normalize(): void {
    if (!this.className) {
      this.className = DEFAULT_VALUES.className;
    }

    if (!this.overlayClassName) {
      this.overlayClassName = DEFAULT_VALUES.overlayClassName;
    }

    if (!this.contentClassName) {
      this.contentClassName = DEFAULT_VALUES.contentClassName;
    }

    if (!this.closeClassName) {
      this.closeClassName = DEFAULT_VALUES.closeClassName;
    }

    super.normalize();
  }
}

export class VEXModalContextBuilder<T extends VEXModalContext> extends ModalOpenContextBuilder<T> {
  /**
   * Set the built in schema to use.
   */
  className: FluentAssignMethod<VEXBuiltInThemes, this>;

  overlayClassName: FluentAssignMethod<string, this>;
  contentClassName: FluentAssignMethod<string, this>;
  closeClassName: FluentAssignMethod<string, this>;

  showCloseButton: FluentAssignMethod<boolean, this>;

  constructor(defaultValues: T = undefined,
              initialSetters: string[] = undefined,
              baseType: new () => T = undefined) {
    super(
      extend<any>(DEFAULT_VALUES, defaultValues || {}),
      arrayUnion<string>(DEFAULT_SETTERS, initialSetters || []),
      baseType || <any>VEXModalContext // https://github.com/Microsoft/TypeScript/issues/7234
    );
  }

  /**
   *
   * @aliasFor isBlocking
   */
  overlayClosesOnClick(value: boolean): this {
    this[privateKey('isBlocking')] = !value;
    return this;
  }
}
