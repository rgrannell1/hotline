
import * as fs from 'fs'

export const constants = {
  packageJson: JSON.parse(fs.readFileSync('package.json').toString())
}
