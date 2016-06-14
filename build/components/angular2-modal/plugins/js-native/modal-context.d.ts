import { DROP_IN_TYPE } from '../../models/tokens';
import { ModalOpenContextBuilder, ModalOpenContext } from '../../models/modal-open-context';
import { FluentAssignMethod } from './../../framework/fluent-assign';
export declare class JSNativeModalContext extends ModalOpenContext {
    promptDefault: string;
    dialogType: DROP_IN_TYPE;
    normalize(): void;
}
export declare class JSNativeModalContextBuilder<T extends JSNativeModalContext> extends ModalOpenContextBuilder<T> {
    /**
     * The default value for the prompt input
     */
    promptDefault: FluentAssignMethod<string, this>;
    constructor(defaultValues?: T, initialSetters?: string[], baseType?: new () => T);
}
