import { Injectable, ResolvedReflectiveProvider as RRP, Renderer } from '@angular/core';

import {
  DialogRef,
  Maybe,
  Overlay,
  DROP_IN_TYPE,
  Modal as Modal_
} from '../../../../components/angular2-modal';

import { JSNativePresetBuilder } from './presets/js-native-preset';

@Injectable()
export class Modal extends Modal_ {
  constructor(overlay: Overlay, renderer: Renderer) {
    super(overlay, renderer);
  }

  alert(): JSNativePresetBuilder {
    return new JSNativePresetBuilder(this, DROP_IN_TYPE.alert);
  }

  prompt(): JSNativePresetBuilder {
    return new JSNativePresetBuilder(this, DROP_IN_TYPE.prompt);
  }

  confirm(): JSNativePresetBuilder {
    return new JSNativePresetBuilder(this, DROP_IN_TYPE.confirm);
  }

  protected create(dialogRef: DialogRef<any>,
                   type: any,
                   bindings?: RRP[]): Maybe<DialogRef<any>> {
    return dialogRef;
  }

}



