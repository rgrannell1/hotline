
import app from '../app/hotline.js'
import {
  RawHotlineArgs
} from '../commons/types'

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
    throw new Error('id was not provided.')
  }

  return args
}

export default callApp
