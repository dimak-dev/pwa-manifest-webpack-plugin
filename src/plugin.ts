import type {WebpackPluginInstance, Compiler} from 'webpack';
import {IPWAManifestWebpackPluginConfig} from "./types/IPWAManifestWebpackPluginConfig";
import {jsonStringify} from "./utils/jsonStringify";
import {bufferFrom} from "./utils/bufferFrom";
import {getAssetMetadata} from "./utils/getAssetMetadata";

export class PWAManifestWebpackPlugin implements WebpackPluginInstance {
    static PLUGIN_NAME = 'PWAManifestWebpackPlugin';
    private options: IPWAManifestWebpackPluginConfig;

    constructor(options: IPWAManifestWebpackPluginConfig) {
        this.options = options;
    }

    apply(compiler: Compiler): void {
        compiler.hooks.thisCompilation.tap(PWAManifestWebpackPlugin.PLUGIN_NAME, (compilation) => {
            const content = jsonStringify(this.options.manifest);
            const manifestBuffer = bufferFrom(content);

            compilation.hooks.processAssets.tap(PWAManifestWebpackPlugin.PLUGIN_NAME, () => {
                const {path, source, info} = getAssetMetadata(compilation, manifestBuffer, this.options.outputFile);

                compilation.emitAsset(path, source, info);
            });
        });
    }
}