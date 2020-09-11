
import {
  HotlineArgs,
  HotlineConfigEntry
} from '../commons/types'

const findPattern = (config:HotlineConfigEntry[], args:HotlineArgs) => {
  for (const {id, url} of config) {
    if (id === args.id) {
      return {id, url}
    }
  }

  const sorted = config
    .map((data:HotlineConfigEntry) => data.id)
    .sort()

  throw new Error(`no patterns matched id ${args.id}. Available patterns:\n${sorted}\n`)
}

export default findPattern
