import { loadConfig } from './load-config.js';
import findPattern from './find-pattern.js';
import exportConfig from './export-config.js';
import performSubstitutions from './perform-substitutions.js';
import openBrowser from './open-browser.js';
const showConfig = async (config) => {
    const maxLength = config.entries.reduce((max, data) => {
        return Math.max(max, data.id.length);
    }, 0);
    for (const entry of config.entries) {
        let message = entry.id.padEnd(maxLength + 4) + entry.url;
        console.log(message);
    }
};
const hotline = async (args) => {
    const config = await loadConfig(args.config);
    if (args.show) {
        showConfig(config);
        process.exit(0);
    }
    else if (args.export) {
        exportConfig(config, args.format);
        process.exit(0);
    }
    const pattern = findPattern(config, args);
    const link = performSubstitutions(pattern.url, args);
    return openBrowser(link);
};
hotline.preprocess = (args) => {
    return args;
};
export default hotline;
