
import {
  Config,
  HotlineConfigEntry,
  HotlineArgs
} from '../commons/types'

import {
  MissingPattern
} from '../commons/errors.js'

const findPattern = (config:Config, args:HotlineArgs) => {
  for (const {id, url} of config.entries) {
    if (id === args.id) {
      return {id, url}
    }
  }

  const sorted = config.entries
    .map((data:HotlineConfigEntry) => data.id)
    .sort()

  const delimited = sorted.join('\n')
  throw new MissingPattern(`no pattern in "${config.path}" matched the provided id "${args.id}". Available patterns:\n${delimited}\n`)
}

export default findPattern
