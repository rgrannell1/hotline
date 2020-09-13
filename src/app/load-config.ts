
import * as os from 'os'
import * as fs from 'fs'
import * as path from 'path'

import {
  MissingConfigError
} from '../commons/errors.js'

import {
  Config
} from '../commons/types'


import yaml from 'yaml'

export const loadConfig = async (fpath:string | undefined):Promise<Config> => {
  // -- poor workaround for snapcraft masking $HOME
  const configPath = os.homedir().includes('snap')
    ? path.join(`/home/${process.env.USER}`, '.hotline')
    : path.join(os.homedir(), '.hotline')

  path.join(os.homedir(), '.hotline')

  const targetPath = fpath ?? configPath

  try {
    await fs.promises.stat(targetPath)
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log(`creating ${configPath}...`)
    }

    await fs.promises.writeFile(configPath, '')
  }

  const content = await fs.promises.readFile(targetPath)
  const contentText = content.toString()

  if (!contentText) {
    let message = `no hotline configuration found in "${targetPath}"`

    if (targetPath.includes('/root')) {
      message += '. Are you intentionally using the root user?'
    }

    throw new MissingConfigError(message)
  } else {
    const entries = yaml.parse(contentText)

    return {
      path: targetPath,
      entries
    }
  }
}
