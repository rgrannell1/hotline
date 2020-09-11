
import * as os from 'os'
import * as fs from 'fs'
import * as path from 'path'

import yaml from 'yaml'

export const loadConfig = async (fpath:string | undefined) => {
  const configPath = path.join(os.homedir(), '.hotline')
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
  return yaml.parse(content.toString())
}
