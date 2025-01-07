import {bufferFrom} from "./bufferFrom";

describe('utils/bufferFrom', () => {
    test('should be instance of Buffer', () => {
        const actual = bufferFrom('test');

        expect(actual).toBeInstanceOf(Buffer);
    });

    test('should be strict equal to the same buffer', () => {
        const actual = bufferFrom('test');

        expect(actual).toStrictEqual(Buffer.from('test'));
    });
});