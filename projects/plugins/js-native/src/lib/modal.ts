import { Injectable } from '@angular/core';

import {
  DialogRef,
  Overlay,
  DROP_IN_TYPE,
  Modal as Modal_
} from 'ngx-modialog';

import { JSNativePresetBuilder } from './presets/js-native-preset';

@Injectable()
export class Modal extends Modal_ {
  constructor(overlay: Overlay) {
    super(overlay);
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

  protected create(dialogRef: DialogRef<any>, type: any): DialogRef<any> {
    return dialogRef;
  }

}



