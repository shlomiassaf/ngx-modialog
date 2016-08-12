import { ResolvedReflectiveProvider as RRP } from '@angular/core';
import 'rxjs/add/operator/first';
import { Maybe, Overlay, DialogRef, Modal as Modal_ } from '../../../angular2-modal';
import { DropInPresetBuilder } from './presets/dropin-preset';
export declare class Modal extends Modal_ {
    constructor(base: Overlay);
    alert(): DropInPresetBuilder;
    prompt(): DropInPresetBuilder;
    confirm(): DropInPresetBuilder;
    protected create(dialogRef: DialogRef<any>, type: any, bindings?: RRP[]): Maybe<DialogRef<any>>;
}
