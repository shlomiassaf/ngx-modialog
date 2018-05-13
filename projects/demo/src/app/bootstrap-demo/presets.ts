import {
  Modal,
  OneButtonPresetBuilder,
  TwoButtonPresetBuilder,
  PromptPresetBuilder
} from 'ngx-modialog/plugins/bootstrap';

export function alert(modal: Modal): OneButtonPresetBuilder {
  return modal.alert()
    .size('lg')
    .showClose(true)
    .title('A simple Alert style modal window')
    .body(`
        <h4>Alert is a classic (title/body/footer) 1 button modal window that 
        does not block.</h4>
        <b>Configuration:</b>
        <ul>
            <li>Non blocking (click anywhere outside to dismiss)</li>
            <li>Size large</li>
            <li>Dismissed with default keyboard key (ESC)</li>
            <li>Close wth button click</li>
            <li>HTML content</li>
        </ul>`);
}

export function prompt(modal: Modal): PromptPresetBuilder {
  return modal.prompt()
    .size('lg')
    .title('A simple Prompt style modal window')
    .placeholder('This is a placeholder')
    .body('Please type a value!');
}

export function confirm(modal: Modal): TwoButtonPresetBuilder {
  return modal.confirm()
    .size('lg')
    .titleHtml(`
            <div class="modal-title" 
                 style="font-size: 22px; color: grey; text-decoration: underline;">
                 A simple Confirm style modal window</div>`)
    .body(`
            <h4>Confirm is a classic (title/body/footer) 2 button modal window that blocks.</h4>
            <b>Configuration:</b>
            <ul>
                <li>Blocks (only button click can close/dismiss)</li>
                <li>Size large</li>
                <li>Keyboard can not dismiss</li>
                <li>HTML Title</li>
                <li>HTML content</li>
            </ul>`);
}

export function cascading(modal: Modal) {
  let presets = [];

  presets.push(alert(modal));
  presets.push(prompt(modal));
  presets.push(confirm(modal));
  presets.push(
    modal.alert()
      .size('sm')
      .title('Cascading modals!')
      .body('Find your way out step by step or click CLOSE ALL to close all open dialogs at once')
      .addButton('btn-primary', 'CLOSE ALL',
        (cmp: any, $event: MouseEvent) => cmp.dialog.close('all'))
  );

  return {
    open: () => {
      let first = presets.shift().open();
      let last: any;
      while (presets.length > 0) {
        last = presets.shift().open();
      }

      last.result.then( value => {
        if (value === 'all' && modal.overlay.stackLength > 0) {
          // you can also inject OverlayService and use it to close all.
          modal.overlay.closeAll();
        }
      });

      return first;
    }
  };
}

export function inElement(modal: Modal) {
  return modal.prompt()
    .size('sm')
    .title('A modal contained by an element')
    .inElement(true)
    .body('Try stacking up more modals!');
}
