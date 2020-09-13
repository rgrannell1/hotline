
import app from '../app/hotline.js'
import {
  RawHotlineArgs
} from '../commons/types'

import {
  InvalidInput
} from '../commons/errors.js'

const callApp = async (rawArgs:RawHotlineArgs) => {
  return app(callApp.preprocess(rawArgs))
}

callApp.preprocess = (rawArgs:RawHotlineArgs) => {
  const args = {
    version: rawArgs['--version'],
    config: rawArgs['--config'],
    id: rawArgs['<id>'],
    args: rawArgs['<arg>']
  }

  if (!args.id) {
    throw new InvalidInput('hotline id was not provided.')
  }

  return args
}

export default callApp
