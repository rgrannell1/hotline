
import {loadConfig} from './load-config.js'

interface HotlineArgs {
  config: string | undefined
}

const hotline = async (args:HotlineArgs) => {
  const config = loadConfig(args.config)
}

hotline.preprocess = () => {

}

export default hotline
