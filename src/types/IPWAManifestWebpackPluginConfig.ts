import {WebManifestConfig} from "./WebManifestConfig";

/**
 * Configuration of PWAManifestWebpackPlugin.
 */
export interface IPWAManifestWebpackPluginConfig {
    /**
     * The asset name of the manifest file that will be created by this plugin.
     */
    outputFile: string;

    /**
     * The configuration of manifest.
     */
    manifest: WebManifestConfig;
}