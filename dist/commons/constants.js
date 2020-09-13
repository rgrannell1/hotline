import * as url from 'url';
import * as fs from 'fs';
import * as path from 'path';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const location = path.join(__dirname, '../../package.json');
try {
    var packageJson = JSON.parse(fs.readFileSync(location).toString());
}
catch (err) {
    throw new Error(`failed to load package.json "${location}"; is it formatted correctly?`);
}
export const constants = {
    packageJson
};
