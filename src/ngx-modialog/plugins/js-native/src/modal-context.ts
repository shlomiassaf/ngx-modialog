import {
  DROP_IN_TYPE,
  ModalOpenContextBuilder,
  ModalOpenContext,
  FluentAssignMethod,
  arrayUnion
} from 'ngx-modialog';

const DEFAULT_SETTERS = [
  'promptDefault'
];

export class JSNativeModalContext extends ModalOpenContext {
  promptDefault: string;
  dialogType: DROP_IN_TYPE;

  normalize(): void {
    if (!this.message) this.message = '';
    if (this.dialogType === undefined) this.dialogType = DROP_IN_TYPE.alert;
  }
}


export class JSNativeModalContextBuilder<T extends JSNativeModalContext>
extends ModalOpenContextBuilder<T> {

  /**
   * The default value for the prompt input
   */
  promptDefault: FluentAssignMethod<string, this>;

  constructor(defaultValues: T = undefined,
              initialSetters: string[] = undefined,
              baseType: new () => T = undefined) {
    super(
      defaultValues || <any>{},
      arrayUnion<string>(DEFAULT_SETTERS, initialSetters || []),
      baseType || <any>JSNativeModalContext
      // https://github.com/Microsoft/TypeScript/issues/7234
    );
  }
}
