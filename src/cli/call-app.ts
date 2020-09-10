
import app from '../app/hotline.js'

interface RawHotlineArgs {
  '--version': any,
  '--config': any,
  '<id>': any,
  '<args>': any
}

const callApp = async (rawArgs:RawHotlineArgs) => {
  return app(callApp.preprocess(rawArgs))
}

callApp.preprocess = (rawArgs:any) => {
  return {
    version: rawArgs['--version'],
    config: rawArgs['--config'],
    id: rawArgs['<id>'],
    args: rawArgs['<args>']
  }
}

export default callApp
