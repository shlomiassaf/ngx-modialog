/**
 * Simple object extend
 * @param m1
 * @param m2
 * @returns {{}}
 */
export declare function extend<T>(m1: any, m2: any): T;
/**
 * Simple, not optimized, array union of unique values.
 * @param arr1
 * @param arr2
 * @returns {T[]|any[]|any[][]|any[]}
 */
export declare function arrayUnion<T>(arr1: any[], arr2: any[]): T[];
/**
 * Returns true if the config supports a given key.
 * @param key
 * @returns {boolean}
 */
export declare function supportsKey(keyCode: number, config: Array<number>): boolean;
/**
 * Given an object representing a key/value map of css properties, returns a valid css string
 * representing the object.
 * Example:
 * console.log(toStyleString({
 *     position: 'absolute',
 *     width: '100%',
 *     height: '100%',
 *     top: '0',
 *     left: '0',
 *     right: '0',
 *     bottom: '0'
 * }));
 * // position:absolute;width:100%;height:100%;top:0;left:0;right:0;bottom:0
 * @param obj
 * @returns {string}
 */
export declare function toStyleString(obj: any | CSSStyleDeclaration): string;
export declare class PromiseCompleter<R> {
    promise: Promise<R>;
    resolve: (value?: R | PromiseLike<R>) => void;
    reject: (error?: any, stackTrace?: string) => void;
    constructor();
}
export interface Class<T> {
    new (...args: any[]): T;
}
export declare type Maybe<T> = T | Promise<T>;
export declare function noop(): void;
