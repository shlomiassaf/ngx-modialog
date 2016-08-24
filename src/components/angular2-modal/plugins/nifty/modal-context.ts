import {
  ModalOpenContext,
  ModalOpenContextBuilder,
  FluentAssignMethod,
  extend,
  arrayUnion
} from '../../../../components/angular2-modal';

const DEFAULT_VALUES = {
  overlayCss: 'nifty-theme-default',
  niftyEffectId: '1'
};

const DEFAULT_SETTERS = [
  'niftyEffectId'
];


export class NiftyContext extends ModalOpenContext {
  overlayCss: string;
  niftyEffectId: string;

  normalize(): void {
    if (!this.niftyEffectId) {
      this.niftyEffectId = DEFAULT_VALUES.niftyEffectId;
    }

    super.normalize();
  }
}

export class NiftyContextBuilder<T extends NiftyContext> extends ModalOpenContextBuilder<T> {
  overlayCss: FluentAssignMethod<string, this>;
  niftyEffectId: FluentAssignMethod<string, this>;

  constructor(defaultValues: T = undefined,
              initialSetters: string[] = undefined,
              baseType: any = undefined) {
    super(
      extend<any>(DEFAULT_VALUES, defaultValues || {}),
      arrayUnion<string>(DEFAULT_SETTERS, initialSetters || []),
      baseType || <any>NiftyContext // https://github.com/Microsoft/TypeScript/issues/7234
    );
  }
}

