const fs = require('node:fs/promises');
const path = require('path');
const { Converter } = require('showdown');

const MAXDEPTH = 50;

/**
 *
 * @param {string} src
 * @param {string} dest
 */
async function markdownToMarkup(src, dest) {
    console.log('md src:', src);
    console.log('html dest:', dest);
    const converter = new Converter();
    return await readDirs(src);

    /**
     * @param {string} rootPath
     * @param {number} depth
     */
    async function readDirs(rootPath, depth = 0) {
        /**@type {Record<string, string | Record<string, string>>}*/
        const localMap = {};
        if (depth >= MAXDEPTH) return {};

        const dir = await fs.opendir(rootPath);

        const destPath = path.join(dest, path.relative(src, rootPath));
        fs.readdir(destPath)
            .catch(e => fs.mkdir(destPath));

        for await (let child of dir) {

            if (child.isDirectory()) {
                localMap[child.name] = await readDirs(path.join(rootPath, child.name), depth + 1);
            }
            else if (child.name.endsWith('.md')) {
                const markdownText = await fs.readFile(path.join(child.path, child.name), { encoding: 'utf8' });
                const htmlText = converter.makeHtml(markdownText);
                await fs.writeFile(path.join(destPath, child.name.slice(0, -2) + 'html'), htmlText, { encoding: 'utf8' });

                localMap[child.name] = path.join(child.path, child.name);
            }
        }
        return localMap;
    }
}

markdownToMarkup(__dirname, path.join(__dirname, '../src/assets/blogs'))
    .then(console.log)
    .catch(console.error);