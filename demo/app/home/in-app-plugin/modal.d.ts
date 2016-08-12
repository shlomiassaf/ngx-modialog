import { ResolvedReflectiveProvider as RRP } from '@angular/core';
import { Maybe, Overlay, DialogRef, Modal as Modal_ } from '../../../../components/angular2-modal';
import { InAppModalContextBuilder } from './modal-context';
export declare class Modal extends Modal_ {
    constructor(base: Overlay);
    alert(): InAppModalContextBuilder;
    protected create(dialogRef: DialogRef<any>, type: any, bindings?: RRP[]): Maybe<DialogRef<any>>;
}
