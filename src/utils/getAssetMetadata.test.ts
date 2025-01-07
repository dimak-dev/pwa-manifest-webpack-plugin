import {calculateHash} from "./calculateHash";
import {getAssetMetadata} from "./getAssetMetadata";
import {Compilation} from "webpack";

jest.mock('./calculateHash');

describe('utils/getAssetMetadata', () => {
    let calculateHashMock: jest.MockedFunction<typeof calculateHash> = calculateHash as jest.MockedFunction<typeof calculateHash>;
    let compilationGetAssetPathWithInfo: jest.MockedFunction<Compilation['getAssetPathWithInfo']>;
    let compilationMock: Compilation;

    beforeEach(() => {
        compilationGetAssetPathWithInfo = jest.fn();
        compilationMock = {getAssetPathWithInfo: compilationGetAssetPathWithInfo} as unknown as Compilation;
    });

    afterEach(() => {
        calculateHashMock.mockReset();
        compilationGetAssetPathWithInfo.mockReset();
    });

    test('should call calculateHash() with content', () => {
        const expectedBuffer = new Buffer('test');

        getAssetMetadata(compilationMock, expectedBuffer, '');

        expect(calculateHashMock)
            .toHaveBeenCalledTimes(1);
        expect(calculateHashMock)
            .toHaveBeenCalledWith(expectedBuffer);
    });

    test('should call compilation.getAssetPathWithInfo() with outputFile', () => {
        getAssetMetadata(compilationMock, new Buffer(''), 'test output file');

        expect(compilationGetAssetPathWithInfo)
            .toHaveBeenCalledTimes(1);
        expect(compilationGetAssetPathWithInfo)
            .toHaveBeenCalledWith('test output file', expect.anything());
    });

    test('should call compilation.getAssetPathWithInfo() with pathData.hash', () => {
        calculateHashMock.mockReturnValue('test hash');

        getAssetMetadata(compilationMock, new Buffer(''), '');

        expect(compilationGetAssetPathWithInfo)
            .toHaveBeenCalledTimes(1);
        expect(compilationGetAssetPathWithInfo)
            .toHaveBeenCalledWith(expect.anything(), expect.objectContaining({'hash': 'test hash'}));
    });

    test('should call compilation.getAssetPathWithInfo() with pathData.filename', () => {
        getAssetMetadata(compilationMock, new Buffer(''), '');

        expect(compilationGetAssetPathWithInfo)
            .toHaveBeenCalledTimes(1);
        expect(compilationGetAssetPathWithInfo)
            .toHaveBeenCalledWith(expect.anything(), expect.objectContaining({'filename': 'app.webmanifest'}));
    });
});