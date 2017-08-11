import {
  ViewContainerRef,
  ComponentRef,
  Injectable
} from '@angular/core';

import {
  DROP_IN_TYPE,
  DialogRef,
  OverlayRenderer,
  ModalOverlay
} from 'ngx-modialog';

@Injectable()
export class JSNativeModalRenderer implements OverlayRenderer {

  render(dialog: DialogRef<any>, vcRef: ViewContainerRef): ComponentRef<ModalOverlay> {

    let result: string | boolean;
    switch (dialog.context.dialogType) {
      case DROP_IN_TYPE.alert:
        window.alert(dialog.context.message);
        result = true;
        break;
      case DROP_IN_TYPE.prompt:
        result = window.prompt(dialog.context.message, dialog.context.promptDefault);
        break;
      case DROP_IN_TYPE.confirm:
        result = window.confirm(dialog.context.message);
        break;
    }

    dialog.destroy = () => {
    };

    if (result === false) {
      dialog.dismiss();
    } else {
      dialog.close(result);
    }

    // we need to return ComponentRef<ModalOverlay> but a native dialog does'nt have that
    // so we resolve an empty promise, the user of this renderer should expect that.
    return {} as any;
  }
}

