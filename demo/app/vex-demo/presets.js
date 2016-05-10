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
        .message('Yes or No?');
}
exports.confirm = confirm;
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