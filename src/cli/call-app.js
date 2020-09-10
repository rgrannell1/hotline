
const app = require('../app/hotline')

const callApp = rawArgs => app(callApp.preprocess(rawArgs))

callApp.preprocess = rawArgs => {
  return {
    version: rawArgs['--version'],
    config: rawArgs['--config'],
    id: rawArgs['<id>'],
    args: rawArgs['<args>']
  }
}

module.exports = callApp