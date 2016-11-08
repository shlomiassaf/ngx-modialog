import {
    Modal,
    JSNativePresetBuilder
} from 'angular2-modal/plugins/js-native';

export { JSNativePresetBuilder } from 'angular2-modal/plugins/js-native';

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
