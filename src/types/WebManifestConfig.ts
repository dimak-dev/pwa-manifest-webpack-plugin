import {EWebManifestCategory} from "./EWebManifestCategory";


/**
 * @property {string} backgroundColor A string that specifies a valid color value.
 * @property {Array<EWebManifestCategory | string>} categories An array of strings, where each string represents a category name.
 * @property {string} description A string that describes your web app.
 */
export interface WebManifestConfig {
    /**
     * The `background_color` manifest member is used to specify an initial background color for your web application.
     * This color appears in the application window before your application's stylesheets have loaded.
     *
     * **Limited compatibility**:
     * {@link https://developer.mozilla.org/en-US/docs/Web/Manifest/background_color#browser_compatibility|Browser compatibility (MDN)}
     *
     * @example <caption>Using named color</caption>
     * {
     *     // ...
     *     backgroundColor: "aliceblue"
     * }
     *
     * @example <caption>Using hexadecimal value</caption>
     * {
     *     // ...
     *     backgroundColor: "#f0fbff"
     * }
     *
     * @example <caption>Using RGB value</caption>
     * {
     *     // ...
     *     backgroundColor: "rgb(240 248 255)"
     * }
     *
     */
    backgroundColor: string;

    /**
     * The `categories` manifest member lets you specify one or more classifications for your web application.
     * These categories help users discover your app in app stores.
     *
     * {@link EWebManifestCategory} contains a list of standardized categories.
     *
     * @example <caption>Single category, using EPWAManifestCategory</caption>
     * {
     *     // ...
     *     categories: [EWebManifestCategory.EDUCATION]
     * }
     *
     * @example <caption>Single category, using string</caption>
     * {
     *     // ...
     *     categories: ['education']
     * }
     *
     * @example <caption>Multiple categories</caption>
     * {
     *     // ...
     *     categories: [EWebManifestCategory.PRODUCTIVITY, 'utilities', 'social']
     * }
     */
    categories: Array<EWebManifestCategory | string>;

    /**
     * The `description` manifest member is used to explain the core features or functionality of your web application.
     * This text helps users understand your app's purpose when viewing it in an app store.
     *
     * **Limited compatibility**:
     * {@link https://developer.mozilla.org/en-US/docs/Web/Manifest/description#browser_compatibility|Browser compatibility (MDN)}
     *
     * @example
     * {
     *     // ...
     *     description: "Track your daily tasks and plan your projects efficiently."
     * }
     */
    description: string;
}

