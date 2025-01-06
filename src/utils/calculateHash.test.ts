import {calculateHash} from "./calculateHash";

describe('utils/calculateHash', () => {
    test('sha256 of \'test string\' is \'d5579c46dfcc7f18207013e65b44e4cb4e2c2298f4ac457ba8f82743f31e930b\'', () => {
        const buffer = Buffer.from('test string', 'utf-8');
        const expected = 'd5579c46dfcc7f18207013e65b44e4cb4e2c2298f4ac457ba8f82743f31e930b';

        expect(calculateHash(buffer))
            .toEqual(expected);
    });
});