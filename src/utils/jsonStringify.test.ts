import {jsonStringify} from "./jsonStringify";

describe('utils/jsonStringify', () => {
    test('should returns an empty string', () => {
        expect(jsonStringify('')).toEqual('""');
    });

    test('should returns an empty object', () => {
        expect(jsonStringify({})).toEqual('{}');
    });

    test('should returns a minified object', () => {
        expect(jsonStringify({foo: 'bar', bar: 'foo'}, true)).toEqual('{"foo":"bar","bar":"foo"}');
    });

    test('should returns an unminified object', () => {
        expect(jsonStringify({foo: 'bar', bar: 'foo'})).toEqual('{\n    "foo": "bar",\n    "bar": "foo"\n}');
    });
});