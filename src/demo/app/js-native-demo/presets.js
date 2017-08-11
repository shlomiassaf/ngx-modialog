export { JSNativePresetBuilder } from 'ngx-modialog/plugins/js-native';
export function alert(modal) {
    return modal.alert().message('This is a native alert!');
}
export function prompt(modal) {
    return modal.prompt()
        .message('This is a native prompt!')
        .promptDefault('This is a default value');
}
export function confirm(modal) {
    return modal.confirm().message('Yes or No?');
}
//# sourceMappingURL=presets.js.map