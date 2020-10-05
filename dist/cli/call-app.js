import app from '../app/hotline.js';
import { ExportFormat } from '../commons/types.js';
import { InvalidInput } from '../commons/errors.js';
const callApp = async (rawArgs) => {
    return app(callApp.preprocess(rawArgs));
};
const asFormat = (format) => {
    if (format === 'chrome' || typeof format === 'undefined') {
        return ExportFormat.Chrome;
    }
    else {
        throw new Error('unsupported format provided');
    }
};
callApp.preprocess = (rawArgs) => {
    const args = {
        export: rawArgs['--export'],
        format: asFormat(rawArgs['--format']),
        version: rawArgs['--version'],
        config: rawArgs['--config'],
        show: rawArgs['--show'],
        id: rawArgs['<id>'],
        args: rawArgs['<arg>']
    };
    if (args.show || args.export) {
        return args;
    }
    if (!args.id) {
        throw new InvalidInput('hotline id was not provided.');
    }
    return args;
};
export default callApp;
