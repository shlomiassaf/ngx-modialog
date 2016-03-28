
const PRIVATE_PREFIX = '$$';
const RESERVED_REGEX = /^(\$\$).*/;

function validateMethodName(name: string) {
    if (!name) {
        throw new Error(`Illegal method name. Empty method name is not allowed`);
    } else if (name in this) {
        throw new Error(`A member name '${name}' already defined.`);
    }
}

/**
 * Returns a list of assigned property names (non private)
 * @param subject
 * @returns {string[]}
 */
function getAssignedPropertyNames(subject: any): string[] {
    return Object.getOwnPropertyNames(subject)
        .filter(name => RESERVED_REGEX.test(name))
        .map(name => name.substr(2));
}

function privateKey(name: string): string {
    return PRIVATE_PREFIX + name;
}

/**
 * Create a function for setting a value for a property on a given object.
 * @param obj The object to apply the key & setter on.
 * @param propertyName The name of the property on the object
 * @param writeOnce If true will allow writing once (default: false)
 */
export function setAssignMethod<T>(obj: T, propertyName: string, writeOnce: boolean = false): void {
    validateMethodName.call(obj, propertyName);

    Object.defineProperty(obj, propertyName, <any>{
        configurable: false,
        enumerable: false,
        writable: false,
        value: function (value: any) {
            let key = privateKey(propertyName);
            if (writeOnce && this.hasOwnProperty(key)) {
                throw new Error(`Overriding config property '${propertyName}' is not allowed.`);
            }
            this[key] = value;
            return this;
        }
    });
}


/**
 * Describes a fluent assign method.
 * A function that gets a value and returns the instance it works on.
 */
export interface FluentAssignMethod<T, Z> {
    //TODO: Setting 'this' instead of Z does not work, this=ConfigSetter here...
    (value: T): Z;
}


export interface IFluentAssignFactory<Z> {
    fluentAssign: Z;
    setMethod(name: string, defaultValue?: any): IFluentAssignFactory<Z>;
}

/**
 * Represent a fluent API factory wrapper for defining FluentAssign instances.
 */
export class FluentAssignFactory<T> {
    private _fluentAssign: FluentAssign<T>;

    constructor(fluentAssign?: FluentAssign<T>) {
        this._fluentAssign =
            fluentAssign instanceof FluentAssign ? fluentAssign : <any>new FluentAssign();
    }

    /**
     * Create a setter method on the FluentAssign instance.
     * @param name The name of the setter function.
     * @param defaultValue If set (not undefined) set's the value on the instance immediately.
     * @returns {FluentAssignFactory}
     */
    setMethod(name: string, defaultValue: any = undefined): FluentAssignFactory<T> {
        setAssignMethod(this._fluentAssign, name);
        if (defaultValue !== undefined) {
            (<any>this._fluentAssign)[name](defaultValue);
        }
        return this;
    }

    /**
     * The FluentAssign instance.
     * @returns {FluentAssign<T>}
     */
    get fluentAssign(): FluentAssign<T> {
        return this._fluentAssign;
    }
}

/**
 * Represent an object where every property is a function representing an assignment function.
 * Calling each function with a value will assign the value to the object and return the object.
 * Calling 'toJSON' returns an object with the same properties but this time representing the
 * assigned values.
 *
 * This allows setting an object in a fluent API manner.
 * Example:
 let fluent = new FluentAssign<any>(undefined, ['some', 'went']);
 fluent.some('thing').went('wrong').toJSON();
 // { some: 'thing', went: 'wrong' }
 */
export class FluentAssign<T> {

    /**
     *
     * @param defaultValues An object representing default values for the underlying object.
     * @param initialSetters A list of initial setters for this FluentAssign.
     */
    constructor(defaultValues: T = undefined, initialSetters: string[] = undefined) {
        if (defaultValues) {
            Object.getOwnPropertyNames(defaultValues)
                .forEach(name => (<any>this)[privateKey(name)] = (<any>defaultValues)[name]);
        }

        if (Array.isArray(initialSetters)) {
            initialSetters.forEach(name => setAssignMethod(this, name));
        }
    }


    /**
     * Returns a FluentAssignFactory<FluentAssign<T>> ready to define a FluentAssign type.
     * @param defaultValues An object representing default values for the instance.
     * @param initialSetters A list of initial setters for the instance.
     * @returns {FluentAssignFactory<T>}
     */
    static compose<T>(defaultValues: T = undefined,
                      initialSetters: string[] = undefined): FluentAssignFactory<T> {

        return <any>FluentAssign.composeWith<FluentAssign<T>>(
            new FluentAssign<T>(defaultValues, initialSetters));
    }

    /**
     * Returns a FluentAssignFactory<Z> where Z is an instance of FluentAssign<?> or a derived
     * class of it.
     * @param fluentAssign An instance of FluentAssign<?> or a derived class of FluentAssign<?>.
     * @returns {any}
     */
    static composeWith<Z>(fluentAssign: Z): IFluentAssignFactory<Z> {
        return <any>new FluentAssignFactory<any>(<any>fluentAssign);
    }

    toJSON(): T {
        return getAssignedPropertyNames(this)
            .reduce((obj: T, name: string) => {
                (<any>obj)[name] = (<any>this)[privateKey(name)];
                return obj;
            }, <T><any>{});
    }
}
