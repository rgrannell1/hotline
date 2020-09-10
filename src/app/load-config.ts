
import * as os from 'os'
import * as fs from 'fs'
import * as path from 'path'

import yaml from 'yaml'

const parseHotlineFile = (content:any[]) => {
  const state:any = {

  }

  for (const elem of content) {
    state[elem.id] = elem
  }

  return state
}

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
  const parsed = yaml.parse(content.toString())
  const hotline = parseHotlineFile(parsed)

  console.log( hotline )
}