import { ExportFormat } from '../commons/types.js';
import * as fs from 'fs';
class ChromeEngine {
    constructor(id, url) {
        this.id = id;
        this.url = url;
    }
    toString() {
    }
}
const exportChromeConfig = (config) => {
    const engines = config.entries.map(({ id, url }) => {
        return new ChromeEngine(id, url);
    });
    const html = `
  <html>
  <h1>Hotline Export</h1>
  <p>Chrome makes it difficult to automatically import search-engines, so this is a workaround.

  <script>

  </script>
  </html>
  `;
    const tmpPath = `/tmp/open-page-${Date.now()}.html`;
    fs.writeFileSync(tmpPath, html);
    const message = [
        '☎️ Open the following URL to automatically import Chrome search-engines hotline links.',
        '',
        `    file://${tmpPath}`,
        '',
        'the following search-engines will be added.',
        '',
        engines.map(engine => `    ${engine.id}: ${engine.url}`).join('\n'),
        '',
        'type the speed-dial id into Chrome to either search (if one parameter is present) or open the site',
        '',
        'multi-parameter sites are excluded.',
        ''
    ].join('\n');
    console.log(message);
};
const exportConfig = (config, exportFormat) => {
    if (exportFormat === ExportFormat.Chrome) {
        exportChromeConfig(config);
    }
};
export default exportConfig;
