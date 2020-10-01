
import app from '../app/hotline.js'
import {
  ExportFormat,
  RawHotlineArgs
} from '../commons/types.js'

import {
  InvalidInput
} from '../commons/errors.js'

const callApp = async (rawArgs:RawHotlineArgs) => {
  return app(callApp.preprocess(rawArgs))
}

const asFormat = (format:string | undefined):ExportFormat => {
  if (format === 'chrome' || typeof format  === 'undefined') {
    return ExportFormat.Chrome
  } else {
    throw new Error('unsupported format provided')
  }
}

callApp.preprocess = (rawArgs:RawHotlineArgs) => {
  const args = {
    export: rawArgs['--export'],
    format: asFormat(rawArgs['--format']),
    version: rawArgs['--version'],
    config: rawArgs['--config'],
    show: rawArgs['--show'],
    id: rawArgs['<id>'],
    args: rawArgs['<arg>']
  }

  if (!(args.show || args.export) && !args.id) {
    throw new InvalidInput('hotline id was not provided.')
  }

  return args
}

export default callApp
