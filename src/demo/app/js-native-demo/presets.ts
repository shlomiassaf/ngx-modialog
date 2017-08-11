import {
    Modal,
    JSNativePresetBuilder
} from 'ngx-modialog/plugins/js-native';

export { JSNativePresetBuilder } from 'ngx-modialog/plugins/js-native';

export function alert(modal: Modal): JSNativePresetBuilder {
    return modal.alert().message('This is a native alert!');
}

export function prompt(modal: Modal): JSNativePresetBuilder {
    return modal.prompt()
        .message('This is a native prompt!')
        .promptDefault('This is a default value');
}

export function confirm(modal: Modal): JSNativePresetBuilder {
    return modal.confirm().message('Yes or No?');
}
