import {
    DialogFormModal,
    DropInPresetBuilder,
    Modal
} from '../../../components/angular2-modal/plugins/vex';

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

export function noButtons(modal: Modal): DropInPresetBuilder {
    return modal.alert()
        .className(this.theme)
        .showCloseButton(true)
        .isBlocking(true)
        .message('Luckily I have an X button, phew...')
        .okBtn(null)
        .cancelBtn(null);

}

export function customButtons(modal: Modal): DropInPresetBuilder {
    return modal.alert()
        .className(this.theme)
        .showCloseButton(true)
        .isBlocking(true)
        .message(`Let's show some bootstrap style buttons...`)
        .okBtn(null)
        .cancelBtn(null)
        .addButton('btn-primary', 'BTN-PRIMARY',
            (cmp: DialogFormModal, $event: MouseEvent) => cmp.dialog.close('primary'))
        .addButton('btn-warning', 'BTN-WARNING',
            (cmp: DialogFormModal, $event: MouseEvent) => cmp.dialog.close('warning'))
        .addButton('btn-success', 'BTN-SUCCESS',
                (cmp: DialogFormModal, $event: MouseEvent) => cmp.dialog.close('success'));

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
