"use strict";
function alert(modal) {
    return modal.alert()
        .className(this.theme)
        .message('An alert message!')
        .showCloseButton(true);
}
exports.alert = alert;
function prompt(modal) {
    return modal.prompt()
        .className(this.theme)
        .message('Please type a value!')
        .placeholder('This is a placeholder');
}
exports.prompt = prompt;
function confirm(modal) {
    return modal.confirm()
        .className(this.theme)
        .message('Yes or No?')
        .okBtn('Yes')
        .cancelBtn('No');
}
exports.confirm = confirm;
function noButtons(modal) {
    return modal.alert()
        .className(this.theme)
        .showCloseButton(true)
        .isBlocking(true)
        .message('Luckily I have an X button, phew...')
        .okBtn(null)
        .cancelBtn(null);
}
exports.noButtons = noButtons;
function customButtons(modal) {
    return modal.alert()
        .className(this.theme)
        .showCloseButton(true)
        .isBlocking(true)
        .message("Let's show some bootstrap style buttons...")
        .okBtn(null)
        .cancelBtn(null)
        .addButton('btn-primary', 'BTN-PRIMARY', function (cmp, $event) { return cmp.dialog.close('primary'); })
        .addButton('btn-warning', 'BTN-WARNING', function (cmp, $event) { return cmp.dialog.close('warning'); })
        .addButton('btn-success', 'BTN-SUCCESS', function (cmp, $event) { return cmp.dialog.close('success'); });
}
exports.customButtons = customButtons;
function cascading(modal) {
    var presets = [];
    presets.push(alert.call(this, modal));
    presets.push(prompt.call(this, modal));
    presets.push(confirm.call(this, modal));
    presets.push(modal.alert()
        .className(this.theme)
        .message('Cascading modals! Find your way out...'));
    return {
        open: function () {
            var ret = presets.shift().open();
            while (presets.length > 0)
                presets.shift().open();
            return ret;
        }
    };
}
exports.cascading = cascading;
//# sourceMappingURL=presets.js.map