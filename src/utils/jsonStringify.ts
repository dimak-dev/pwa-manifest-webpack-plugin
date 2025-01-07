/**
 * Wrapper for the JSON.stringify function.
 *
 * @param {T extends Object} object Object to stringify
 * @param {boolean} minify Minify the output.
 *
 * @returns {string} Serialized object.
 */
export function jsonStringify<T extends Object>(object: T, minify: boolean = false): string {
    return JSON.stringify(object, null, minify ? 0 : 4);
}