import {ModalOpenContext, ModalOpenContextBuilder} from '../../models/modal-open-context';
import {FluentAssignMethod} from './../../framework/fluent-assign';
import {extend, arrayUnion} from './../../framework/utils';

const DEFAULT_VALUES = {
    className: <VEXBuiltInThemes>'default'
};

const DEFAULT_SETTERS = [
    'className'
];

export type VEXBuiltInThemes
    = 'default' | 'os' | 'plain' | 'wireframe' | 'flat-attack' | 'top' | 'bottom-right-corner';

export class VEXModalContext extends ModalOpenContext {
    /**
     * Set the built in schema to use.
     */
    className: VEXBuiltInThemes;
}

export class VEXModalContextBuilder<T extends VEXModalContext> extends ModalOpenContextBuilder<T> {

    constructor(
        defaultValues: T = undefined,
        initialSetters: string[] = undefined,
        baseType: new () => T = undefined
    ) {
        super(
            extend<any>(DEFAULT_VALUES, defaultValues || {}),
            arrayUnion<string>(DEFAULT_SETTERS, initialSetters || []),
            baseType || <any>VEXModalContext // https://github.com/Microsoft/TypeScript/issues/7234
        );
    }

    /**
     * Set the built in schema to use.
     */
    className: FluentAssignMethod<VEXBuiltInThemes, this>;

}

