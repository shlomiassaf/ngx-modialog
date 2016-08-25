import {
  Modal,
  DialogPreset,
  DialogPresetBuilder
} from '../../../components/angular2-modal/plugins/nifty';
import { PromptPresetBuilder } from "../../../components/angular2-modal/plugins/nifty/presets/dialog-preset";

export function alert(modal: Modal): DialogPresetBuilder<DialogPreset> {
  return modal.alert()
    .niftyEffectId(this.effect)
    .title('Nifty')
    .message('An alert message!');
}

export function prompt(modal: Modal): PromptPresetBuilder {
  return modal.prompt()
    .niftyEffectId(this.effect)
    .title('A nifty prompt!')
    .message('Please type a value!')
    .placeholder('Enter something...');
}

export function confirm(modal: Modal): DialogPresetBuilder<DialogPreset> {
  return modal.confirm()
    .niftyEffectId(this.effect)
    .message('Yes or No?');
}

export function noButtons(modal: Modal): DialogPresetBuilder<DialogPreset> {
  return modal.alert()
    .niftyEffectId(this.effect)
    .isBlocking(true)
    .showCloseButton(true)
    .clearButtons()
    .message('Luckily I have an X button, phew...');

}

export function customButtons(modal: Modal): DialogPresetBuilder<DialogPreset> {
  return modal.alert()
    .niftyEffectId(this.effect)
    .isBlocking(true)
    .message(`Let's show some bootstrap style buttons...`);
}

export function cascading(modal: Modal): DialogPresetBuilder<DialogPreset> {
  let presets = [];

  presets.push(alert.call(this, modal));
  presets.push(prompt.call(this, modal));
  presets.push(confirm.call(this, modal));
  presets.push(
    modal.alert()
      .niftyEffectId(this.effect)
      .message('Cascading modals! Find your way out...')
  );

  return <any>{
    open: () => {
      let ret = presets.shift().open();
      while (presets.length > 0) presets.shift().open();
      return ret;
    }
  };
}
