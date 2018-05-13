/**
 * Simple object extend
 * @param m1
 * @param m2
 */
export function extend<T>(m1: any, m2: any): T {
  var m: T = <T>{};
  for (var attr in m1) {
    if (m1.hasOwnProperty(attr)) {
      (<any>m)[attr] = (<any>m1)[attr];
    }
  }

  for (var attr in m2) {
    if (m2.hasOwnProperty(attr)) {
      (<any>m)[attr] = (<any>m2)[attr];
    }
  }

  return m;
}

/**
 * Simple, not optimized, array union of unique values.
 * @param arr1
 * @param arr2
 */
export function arrayUnion<T>(arr1: any[], arr2: any[]): T[] {
  return arr1
    .concat(arr2.filter(v => arr1.indexOf(v) === -1));

}

/**
 * Returns true if the config supports a given key.
 * @param key
 */
export function supportsKey(keyCode: number, config: Array<number>): boolean {
  if (!Array.isArray(config)) return config === null ? false : true;
  return config.indexOf(keyCode) > -1;
}

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
 */
export function toStyleString(obj: any | CSSStyleDeclaration): string {
  return Object.getOwnPropertyNames(obj)
    .map(k => `${k}:${obj[k]}`)
    .join(';');

  // let objStr = JSON.stringify(obj);
  // return objStr.substr(1, objStr.length - 2)
  //     .replace(/,/g, ';')
  //     .replace(/"/g, '');
}

export class PromiseCompleter<R> {
  promise: Promise<R>;
  resolve: (value?: R|PromiseLike<R>) => void;
  reject: (error?: any, stackTrace?: string) => void;

  constructor() {
    this.promise = new Promise((res, rej) => {
      this.resolve = res;
      this.reject = rej;
    });
  }
}

export interface Class<T> {
  new(...args: any[]): T;
}

export function noop() { }
