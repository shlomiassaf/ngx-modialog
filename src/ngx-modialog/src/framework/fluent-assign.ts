import { extend, arrayUnion } from './utils';
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
 */
function getAssignedPropertyNames(subject: any): string[] {
  return Object.getOwnPropertyNames(subject)
    .filter(name => RESERVED_REGEX.test(name))
    .map(name => name.substr(2));
}

export function privateKey(name: string): string {
  return PRIVATE_PREFIX + name;
}

function objectDefinePropertyValue(obj: any, propertyName, value: (value: any) => void): void {
  Object.defineProperty(obj, propertyName, <any>{
    configurable: false,
    enumerable: false,
    writable: false,
    value
  });
}

/**
 * Given a FluentAssign instance, apply all of the supplied default values so calling
 * instance.toJSON will return those values (does not create a setter function)
 * @param instance
 * @param defaultValues
 */
function applyDefaultValues(instance: any, defaultValues: Object): void {
  Object.getOwnPropertyNames(defaultValues)
    .forEach(name => (<any>instance)[privateKey(name)] = (<any>defaultValues)[name]);
}

/**
 * Create a function for setting a value for a property on a given object.
 * @param obj The object to apply the key & setter on.
 * @param propertyName The name of the property on the object
 * @param writeOnce If true will allow writing once (default: false)
 *
 * Example:
 * let obj = new FluentAssign<any>;
 * setAssignMethod(obj, 'myProp');
 * obj.myProp('someValue');
 * const result = obj.toJSON();
 * console.log(result); //{ myProp: 'someValue' }
 *
 *
 * let obj = new FluentAssign<any>;
 * setAssignMethod(obj, 'myProp', true); // applying writeOnce
 * obj.myProp('someValue');
 * obj.myProp('someValue'); // ERROR: Overriding config property 'myProp' is not allowed.
 */
export function setAssignMethod<T>(obj: T, propertyName: string, writeOnce: boolean = false): void {
  validateMethodName.call(obj, propertyName);

  const key = privateKey(propertyName);
  objectDefinePropertyValue(obj, propertyName, (value: any) => {
    if (writeOnce && this.hasOwnProperty(key)) {
      throw new Error(`Overriding config property '${propertyName}' is not allowed.`);
    }
    obj[key] = value;
    return obj;
  });
}

/**
 * Create a function for setting a value that is an alias to an other setter function.
 * @param obj The object to apply the key & setter on.
 * @param propertyName The name of the property on the object
 * @param srcPropertyName The name of the property on the object this alias points to
 * @param hard If true, will set a readonly property on the object that returns
 *        the value of the source property. Default: false
 *
 * Example:
 * let obj = new FluentAssign<any> ;
 * setAssignMethod(obj, 'myProp');
 * setAssignAlias(obj, 'myPropAlias', 'myProp');
 * obj.myPropAlias('someValue');
 * const result = obj.toJSON();
 * console.log(result); //{ myProp: 'someValue' }
 * result.myPropAlias // undefined
 *
 *
 * let obj = new FluentAssign<any> ;
 * setAssignMethod(obj, 'myProp');
 * setAssignAlias(obj, 'myPropAlias', 'myProp', true); // setting a hard alias.
 * obj.myPropAlias('someValue');
 * const result = obj.toJSON();
 * console.log(result); //{ myProp: 'someValue' }
 * result.myPropAlias // someValue
 */
export function setAssignAlias<T>(obj: T, propertyName: string,
                                  srcPropertyName: string,
                                  hard: boolean = false): void {
  validateMethodName.call(obj, propertyName);

  objectDefinePropertyValue(obj, propertyName, (value: any) => {
    obj[srcPropertyName](value);
    return obj;
  });

  if (hard === true) {
    const key = privateKey(propertyName),
      srcKey = privateKey(srcPropertyName);

    Object.defineProperty(obj, key, <any>{
      configurable: false,
      enumerable: false,
      get: () => obj[srcKey]
    });
  }
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
  private __fluent$base__: new () => T;

  /**
   * Returns a FluentAssignFactory<FluentAssign<T>> ready to define a FluentAssign type.
   * @param defaultValues An object representing default values for the instance.
   * @param initialSetters A list of initial setters for the instance.
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
   */
  static composeWith<Z>(fluentAssign: Z): IFluentAssignFactory<Z> {
    return <any>new FluentAssignFactory<any>(<any>fluentAssign);
  }

  /**
   *
   * @param defaultValues An object representing default values for the underlying object.
   * @param initialSetters A list of initial setters for this FluentAssign.
   * @param baseType the class/type to create a new base. optional, {} is used if not supplied.
   */
  constructor(defaultValues: T | T[] = undefined,
              initialSetters: string[] = undefined,
              baseType: new () => T = undefined) {
    if (Array.isArray(defaultValues)) {
      (defaultValues as Array<any>).forEach(d => applyDefaultValues(this, d));
    } else if (defaultValues) {
      applyDefaultValues(this, defaultValues);
    }

    if (Array.isArray(initialSetters)) {

      initialSetters.forEach(name => setAssignMethod(this, name));
    }

    if (baseType) {
      this.__fluent$base__ = baseType;
    }
  }

  toJSON(): T {
    return getAssignedPropertyNames(this)
      .reduce((obj: T, name: string) => {
        const key = privateKey(name);
        // re-define property descriptors (we dont want their value)
        let propDesc = Object.getOwnPropertyDescriptor(this, key);
        if (propDesc) {
          Object.defineProperty(obj, name, propDesc);
        } else {
          (<any>obj)[name] = (<any>this)[key];
        }
        return obj;
      }, this.__fluent$base__ ? new this.__fluent$base__() : <any>{});
  }
}
