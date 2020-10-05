
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
  data.map(datum => {
    chrome.send('searchEngineEditStarted', [-1])
    chrome.send('searchEngineEditCompleted', [datum.id, datum.id, datum.url])

    console.info('added search engine ' + datum.id + ' ' + datum.url)
  })
  `

  const html = `
  <html>
  <h1>Hotline Export</h1>
  <p>Chrome makes it difficult to automatically import search-engines, so this is a workaround.

  <ul>
    <li>Open chrome://settings/searchEngines</li>
    <li>Open DevTools (F12)</li>
    <li>Paste and run the following snippet:</li>
  </ul>

  <pre>
  <code>${script}</code>
  </pre>
  </html>
  `

  const tmpPath = `/tmp/export-bookmarks.html`
  fs.writeFileSync(tmpPath, html)

  const message = [
    '☎️ Open this file URL to import Chrome search-engines hotline links.',
    '',
    `    file://${tmpPath}`,
    '',
    'the following search-engines will be added.',
    '',
    patterns.map(pattern => `    ${pattern.id}: ${pattern.url}`).join('\n'),
    '',
    'type the speed-dial id into Chrome to either search (if one parameter is present) or open the site (multi-parameter sites are excluded.)',
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
