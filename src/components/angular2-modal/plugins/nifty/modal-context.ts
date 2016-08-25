import {
  ModalOpenContext,
  ModalOpenContextBuilder,
  FluentAssignMethod,
  extend,
  arrayUnion
} from '../../../../components/angular2-modal';

export enum NiftyEffect {
  FadeInScale = 1,
  SlideInRight = 2,
  SlideInBottom = 3,
  Newspaper = 4,
  Fall = 5,
  SideFall = 6,
  StickyUp = 7,
  Horizontal3DFlip = 8,
  Vrtical3DFlip = 9,
  Sign3D = 10,
  SuperScaled = 11,
  JustMe = 12,
  Slit3D = 13,
  RotateBottom3D = 14,
  RotateInLeft3D = 15,
  Blur = 16,
  LetMeIn = 17,
  MakeWay = 18,
  SlipFromTop = 19
}

const DEFAULT_VALUES = {
  overlayCss: 'nifty-theme-default',
  niftyEffectId: NiftyEffect.FadeInScale
};

const DEFAULT_SETTERS = [
  'niftyEffectId',
  'showCloseButton'
];

export class NiftyContext extends ModalOpenContext {
  overlayCss: string;
  niftyEffectId: NiftyEffect;

  normalize(): void {
    if (!this.niftyEffectId) {
      this.niftyEffectId = DEFAULT_VALUES.niftyEffectId;
    }

    super.normalize();
  }
}

export class NiftyContextBuilder<T extends NiftyContext> extends ModalOpenContextBuilder<T> {
  overlayCss: FluentAssignMethod<string, this>;
  niftyEffectId: FluentAssignMethod<NiftyEffect, this>;
  showCloseButton: FluentAssignMethod<boolean, this>;

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

