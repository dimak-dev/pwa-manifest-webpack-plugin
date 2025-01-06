import crypto from 'crypto';

/**
 * Calculate hash using internal crypto provider and sha256 hash.
 *
 * @param {Buffer} buffer Input buffer.
 * @returns {string} Hash.
 */
export function calculateHash(buffer: Buffer): string {
    return crypto
        .createHash('sha256')
        .update(buffer)
        .digest('hex');
}