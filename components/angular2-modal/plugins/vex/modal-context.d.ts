import { ModalOpenContext, ModalOpenContextBuilder } from '../../models/modal-open-context';
import { FluentAssignMethod } from './../../framework/fluent-assign';
export declare type VEXBuiltInThemes = 'default' | 'os' | 'plain' | 'wireframe' | 'flat-attack' | 'top' | 'bottom-right-corner';
export declare class VEXModalContext extends ModalOpenContext {
    /**
     * Set the built in schema to use.
     */
    className: VEXBuiltInThemes;
    overlayClassName: string;
    contentClassName: string;
    closeClassName: string;
    showCloseButton: boolean;
}
export declare class VEXModalContextBuilder<T extends VEXModalContext> extends ModalOpenContextBuilder<T> {
    /**
     * Set the built in schema to use.
     */
    className: FluentAssignMethod<VEXBuiltInThemes, this>;
    overlayClassName: FluentAssignMethod<string, this>;
    contentClassName: FluentAssignMethod<string, this>;
    closeClassName: FluentAssignMethod<string, this>;
    showCloseButton: FluentAssignMethod<boolean, this>;
    constructor(defaultValues?: T, initialSetters?: string[], baseType?: new () => T);
    /**
     *
     * @aliasFor isBlocking
     */
    overlayClosesOnClick(value: boolean): this;
}
