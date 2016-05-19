import { Modal, DropInPresetBuilder } from '../../../components/angular2-modal/plugins/vex';

export function alert(modal: Modal): DropInPresetBuilder {
    return modal.alert()
        .className(this.theme)
        .message('An alert message!')
        .showCloseButton(true);
}

export function prompt(modal: Modal): DropInPresetBuilder {
    return modal.prompt()
        .className(this.theme)
        .message('Please type a value!')
        .placeholder('This is a placeholder');
}

export function confirm(modal: Modal): DropInPresetBuilder {
    return modal.confirm()
        .className(this.theme)
        .message('Yes or No?')
        .okBtn('Yes')
        .cancelBtn('No');
}

export function cascading(modal: Modal): DropInPresetBuilder {
    let presets = [];

    presets.push(alert.call(this, modal));
    presets.push(prompt.call(this, modal));
    presets.push(confirm.call(this, modal));
    presets.push(
        modal.alert()
            .className(this.theme)
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
