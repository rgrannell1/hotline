import open from 'open';
const openBrowser = (link) => {
    console.log(`☎️  opening ${link}...`);
    return open(link, {
        wait: false
    });
};
export default openBrowser;
