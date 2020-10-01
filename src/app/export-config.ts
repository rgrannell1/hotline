
import {
  Config,
  ExportFormat
} from '../commons/types.js'

import Pattern from './pattern.js'
import openBrowser from './open-browser.js'

import * as fs from 'fs'

class ChromeEngine {
  id: string
  url: string
  constructor (id:string, url:string) {
    this.id = id
    this.url = url
  }
  toString () {

  }
}

const exportChromeConfig = (config:Config) => {
  const patterns = config.entries
    .map(entry => new Pattern(entry.id, entry.url))
    .filter(entry => entry.arity() <= 1)
    .map(data => {
      return {
        id: data.googleId(),
        url: data.googleUrl()
      }
    })

  const script = `
  let data = ${ JSON.stringify(patterns, null, 2) }
  data.map(data => {
    chrome.send('searchEngineEditStarted', [-1])
    chrome.send('searchEngineEditCompleted', [data.id, data.id, data.url])

    console.info('added search engine ' + data.id + ' ' + data.url)
  })
  `

  const html = `
  <html>
  <h1>Hotline Export</h1>
  <p>Chrome makes it difficult to automatically import search-engines, so this is a workaround.

  - Open chrome://settings/searchEngines
  - Open DevTools (F12)
  -

  <pre>
  <code>${script}</code>
  </pre>

  <script>${script}</script>
  </html>
  `

  const tmpPath = `/tmp/open-page-${Date.now()}.html`
  fs.writeFileSync(tmpPath, html)

  const message = [
    '☎️ Open the following URL to automatically import Chrome search-engines hotline links.',
    '',
    `    file://${tmpPath}`,
    '',
    'the following search-engines will be added.',
    '',
    patterns.map(pattern => `    ${pattern.id}: ${pattern.url}`).join('\n'),
    '',
    'type the speed-dial id into Chrome to either search (if one parameter is present) or open the site',
    '',
    'multi-parameter sites are excluded.',
    ''
  ].join('\n')

  console.log(message)
}

const exportConfig = (config:Config, exportFormat:ExportFormat) => {
  if (exportFormat === ExportFormat.Chrome) {
    exportChromeConfig(config)
  }
}

export default exportConfig
