import { ResolvedReflectiveProvider as RRP } from '@angular/core';
import { DialogRef, Maybe, Overlay, Modal as Modal_ } from '../../../../components/angular2-modal';
import { JSNativePresetBuilder } from './presets/js-native-preset';
export declare class Modal extends Modal_ {
    constructor(overlay: Overlay);
    alert(): JSNativePresetBuilder;
    prompt(): JSNativePresetBuilder;
    confirm(): JSNativePresetBuilder;
    protected create(dialogRef: DialogRef<any>, type: any, bindings?: RRP[]): Maybe<DialogRef<any>>;
}
