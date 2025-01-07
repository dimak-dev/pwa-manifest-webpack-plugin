import type {AssetInfo, Compilation, PathData} from "webpack";
import {sources} from "webpack";

import {calculateHash} from "./calculateHash";

export interface PreparedManifest {
    source: sources.RawSource;
    path: string;
    info: AssetInfo;
}

/**
 * Get metadata for asset by content.
 *
 * @param {Compilation} compilation
 * @param {Buffer} content
 * @param {string} outputFile
 */
export function getAssetMetadata(compilation: Compilation, content: Buffer, outputFile: string): PreparedManifest {
    const pathData: PathData = {
        hash: calculateHash(content),
        filename: 'app.webmanifest',
    }

    return {
        source: new sources.RawSource(content),
        ...compilation.getAssetPathWithInfo(outputFile, pathData),
    };
}