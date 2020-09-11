
import {loadConfig} from './load-config.js'
import findPattern from './find-pattern.js'
import performSubstitutions from './perform-substitutions.js'
import openBrowser from './open-browser.js'

import {
  HotlineArgs,
  RawHotlineArgs
} from '../commons/types'

const hotline = async (args:HotlineArgs) => {
  const config = await loadConfig(args.config)

  const pattern = findPattern(config, args)
  const link = performSubstitutions(pattern.url, args)

  return openBrowser(link)
}

hotline.preprocess = (args:RawHotlineArgs) => {
  return args
}

export default hotline
