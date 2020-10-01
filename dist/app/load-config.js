import * as os from 'os';
import * as fs from 'fs';
import * as path from 'path';
import { MissingConfigError, InvalidConfigError } from '../commons/errors.js';
import yaml from 'yaml';
const sortConfig = (data0, data1) => {
    return data0.id > data1.id ? 1 : -1;
};
export const loadConfig = async (fpath) => {
    // -- poor workaround for snapcraft masking $HOME
    const configPath = os.homedir().includes('snap')
        ? path.join(`/home/${process.env.USER}`, '.hotline')
        : path.join(os.homedir(), '.hotline');
    path.join(os.homedir(), '.hotline');
    const targetPath = fpath ?? configPath;
    try {
        await fs.promises.stat(targetPath);
    }
    catch (err) {
        if (err.code === 'ENOENT') {
            console.log(`creating ${configPath}...`);
        }
        await fs.promises.writeFile(configPath, '');
    }
    const content = await fs.promises.readFile(targetPath);
    const contentText = content.toString();
    if (!contentText) {
        let message = `no hotline configuration found in "${targetPath}"`;
        if (targetPath.includes('/root')) {
            message += '. Are you intentionally using the root user?';
        }
        throw new MissingConfigError(message);
    }
    try {
        const entries = yaml.parse(contentText).sort(sortConfig);
        return {
            path: targetPath,
            entries
        };
    }
    catch (err) {
        throw new InvalidConfigError(`failed to parse ${targetPath}: ${err.message}`);
    }
};
