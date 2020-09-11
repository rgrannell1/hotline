
import open from 'open'

const openBrowser = (link:string) => {
  console.log(`☎️  opening ${link}...`)
  return open(link, {
    wait: false
  })
}

export default openBrowser
