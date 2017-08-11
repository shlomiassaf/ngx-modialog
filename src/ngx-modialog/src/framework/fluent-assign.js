var PRIVATE_PREFIX = '$$';
var RESERVED_REGEX = /^(\$\$).*/;
function validateMethodName(name) {
    if (!name) {
        throw new Error("Illegal method name. Empty method name is not allowed");
    }
    else if (name in this) {
        throw new Error("A member name '" + name + "' already defined.");
    }
}
/**
 * Returns a list of assigned property names (non private)
 * @param subject
 * @returns {string[]}
 */
function getAssignedPropertyNames(subject) {
    return Object.getOwnPropertyNames(subject)
        .filter(function (name) { return RESERVED_REGEX.test(name); })
        .map(function (name) { return name.substr(2); });
}
export function privateKey(name) {
    return PRIVATE_PREFIX + name;
}
function objectDefinePropertyValue(obj, propertyName, value) {
    Object.defineProperty(obj, propertyName, {
        configurable: false,
        enumerable: false,
        writable: false,
        value: value
    });
}
/**
 * Given a FluentAssign instance, apply all of the supplied default values so calling
 * instance.toJSON will return those values (does not create a setter function)
 * @param instance
 * @param defaultValues
 */
function applyDefaultValues(instance, defaultValues) {
    Object.getOwnPropertyNames(defaultValues)
        .forEach(function (name) { return instance[privateKey(name)] = defaultValues[name]; });
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
export function setAssignMethod(obj, propertyName, writeOnce) {
    var _this = this;
    if (writeOnce === void 0) { writeOnce = false; }
    validateMethodName.call(obj, propertyName);
    var key = privateKey(propertyName);
    objectDefinePropertyValue(obj, propertyName, function (value) {
        if (writeOnce && _this.hasOwnProperty(key)) {
            throw new Error("Overriding config property '" + propertyName + "' is not allowed.");
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
export function setAssignAlias(obj, propertyName, srcPropertyName, hard) {
    if (hard === void 0) { hard = false; }
    validateMethodName.call(obj, propertyName);
    objectDefinePropertyValue(obj, propertyName, function (value) {
        obj[srcPropertyName](value);
        return obj;
    });
    if (hard === true) {
        var key = privateKey(propertyName), srcKey_1 = privateKey(srcPropertyName);
        Object.defineProperty(obj, key, {
            configurable: false,
            enumerable: false,
            get: function () { return obj[srcKey_1]; }
        });
    }
}
/**
 * Represent a fluent API factory wrapper for defining FluentAssign instances.
 */
var FluentAssignFactory = (function () {
    function FluentAssignFactory(fluentAssign) {
        this._fluentAssign =
            fluentAssign instanceof FluentAssign ? fluentAssign : new FluentAssign();
    }
    /**
     * Create a setter method on the FluentAssign instance.
     * @param name The name of the setter function.
     * @param defaultValue If set (not undefined) set's the value on the instance immediately.
     * @returns {FluentAssignFactory}
     */
    FluentAssignFactory.prototype.setMethod = function (name, defaultValue) {
        if (defaultValue === void 0) { defaultValue = undefined; }
        setAssignMethod(this._fluentAssign, name);
        if (defaultValue !== undefined) {
            this._fluentAssign[name](defaultValue);
        }
        return this;
    };
    Object.defineProperty(FluentAssignFactory.prototype, "fluentAssign", {
        /**
         * The FluentAssign instance.
         * @returns {FluentAssign<T>}
         */
        get: function () {
            return this._fluentAssign;
        },
        enumerable: true,
        configurable: true
    });
    return FluentAssignFactory;
}());
export { FluentAssignFactory };
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
var FluentAssign = (function () {
    /**
     *
     * @param defaultValues An object representing default values for the underlying object.
     * @param initialSetters A list of initial setters for this FluentAssign.
     * @param baseType the class/type to create a new base. optional, {} is used if not supplied.
     */
    function FluentAssign(defaultValues, initialSetters, baseType) {
        if (defaultValues === void 0) { defaultValues = undefined; }
        if (initialSetters === void 0) { initialSetters = undefined; }
        if (baseType === void 0) { baseType = undefined; }
        var _this = this;
        if (Array.isArray(defaultValues)) {
            defaultValues.forEach(function (d) { return applyDefaultValues(_this, d); });
        }
        else if (defaultValues) {
            applyDefaultValues(this, defaultValues);
        }
        if (Array.isArray(initialSetters)) {
            initialSetters.forEach(function (name) { return setAssignMethod(_this, name); });
        }
        if (baseType) {
            this.__fluent$base__ = baseType;
        }
    }
    /**
     * Returns a FluentAssignFactory<FluentAssign<T>> ready to define a FluentAssign type.
     * @param defaultValues An object representing default values for the instance.
     * @param initialSetters A list of initial setters for the instance.
     * @returns {FluentAssignFactory<T>}
     */
    FluentAssign.compose = function (defaultValues, initialSetters) {
        if (defaultValues === void 0) { defaultValues = undefined; }
        if (initialSetters === void 0) { initialSetters = undefined; }
        return FluentAssign.composeWith(new FluentAssign(defaultValues, initialSetters));
    };
    /**
     * Returns a FluentAssignFactory<Z> where Z is an instance of FluentAssign<?> or a derived
     * class of it.
     * @param fluentAssign An instance of FluentAssign<?> or a derived class of FluentAssign<?>.
     * @returns {any}
     */
    FluentAssign.composeWith = function (fluentAssign) {
        return new FluentAssignFactory(fluentAssign);
    };
    FluentAssign.prototype.toJSON = function () {
        var _this = this;
        return getAssignedPropertyNames(this)
            .reduce(function (obj, name) {
            var key = privateKey(name);
            // re-define property descriptors (we dont want their value)
            var propDesc = Object.getOwnPropertyDescriptor(_this, key);
            if (propDesc) {
                Object.defineProperty(obj, name, propDesc);
            }
            else {
                obj[name] = _this[key];
            }
            return obj;
        }, this.__fluent$base__ ? new this.__fluent$base__() : {});
    };
    return FluentAssign;
}());
export { FluentAssign };
//# sourceMappingURL=fluent-assign.js.map