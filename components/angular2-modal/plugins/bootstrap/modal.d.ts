import 'rxjs/add/operator/first';
import { ResolvedReflectiveProvider as RRP } from '@angular/core';
import { Maybe, Overlay, DialogRef, Modal as Modal_ } from '../../../angular2-modal';
import { OneButtonPresetBuilder } from './../bootstrap/presets/one-button-preset';
import { TwoButtonPresetBuilder } from './../bootstrap/presets/two-button-preset';
export declare class Modal extends Modal_ {
    constructor(overlay: Overlay);
    alert(): OneButtonPresetBuilder;
    prompt(): OneButtonPresetBuilder;
    confirm(): TwoButtonPresetBuilder;
    protected create(dialogRef: DialogRef<any>, type: any, bindings?: RRP[]): Maybe<DialogRef<any>>;
}
