import type {WebpackPluginInstance, Compiler} from 'webpack';
import {IPWAManifestWebpackPluginConfig} from "./types/IPWAManifestWebpackPluginConfig";

export class PWAManifestWebpackPlugin implements WebpackPluginInstance {
    static PLUGIN_NAME = 'PWAManifestWebpackPlugin';
    private options: IPWAManifestWebpackPluginConfig;

    constructor(options: IPWAManifestWebpackPluginConfig) {
        this.options = options;
    }

    apply(compiler: Compiler): void {
        const {webpack: {sources: {RawSource}}} = compiler;

        compiler.hooks.thisCompilation.tap(PWAManifestWebpackPlugin.PLUGIN_NAME, (compilation) => {
            const manifestBuffer = Buffer.from(JSON.stringify(this.options.manifest), 'utf-8');

            compilation.hooks.processAssets.tap(PWAManifestWebpackPlugin.PLUGIN_NAME, () => {
                compilation.emitAsset(this.options.outputFile, new RawSource(manifestBuffer));
            });
        });
    }
}