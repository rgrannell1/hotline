
import * as fs from 'fs'

try {
  var packageJson = JSON.parse(fs.readFileSync('package.json').toString())
} catch (err) {
  throw new Error('failed to load package.json; is it formatted correctly?')
}

export const constants = {
  packageJson
}
