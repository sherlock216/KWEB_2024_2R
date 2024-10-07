const fs = require('fs');
const path = require('path');
const util = require('util');

const readdir = util.promisify(fs.readdir);
const stat = util.promisify(fs.stat);


async function getFilePaths(start) {
  let results = [];

  const resultReaddir = await readdir(start);
  for (let i of resultReaddir) {
    const filePath = path.join(dir, i);
    const fileStat = await stat(filePath);

    if (fileStat.isDirectory()) {
      // recursively executed
      const otherfilePath = await getFilePaths(filePath);
      results = results.concat(otherfilePath);
    } else {
      results.push(filePath);
    }
  }
  return results;
}




(async () => {
  try {
    const start = 'test';
    const files = await getFilePaths(start);

    // Only js file
    const resultJs = files.filter(file => path.extname(file) === '.js');

    
    resultJs.forEach(file => console.log(file));
  } catch (err) {
    console.error(err);
  }
})();
