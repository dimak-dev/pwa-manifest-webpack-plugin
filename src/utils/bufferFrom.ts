/**
 * Wrapper for Buffer.from function.
 *
 * @param {string} input Input string.
 * @returns {Buffer} Buffer.
 */
export function bufferFrom(input: string): Buffer {
    return Buffer.from(input, "utf-8");
}