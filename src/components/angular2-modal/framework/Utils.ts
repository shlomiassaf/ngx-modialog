/**
 * Simple object extend
 * @param m1
 * @param m2
 * @returns {{}}
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
 * @returns {T[]|any[]|any[][]|any[]}
 */
export function arrayUnion<T>(arr1: any[], arr2: any[]): T[] {
    return arr1
        .concat(arr2.filter(v => arr1.indexOf(v) === -1));

}
