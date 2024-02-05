import fs from 'fs';
import { createHash } from 'crypto';

import checkPath from './checkPath.js';
import { pathObject } from './index.js';

const calcHash = async line => {
  try {
    let pathToReadFile = await checkPath(line.slice(5).trim());
    const hash = createHash('sha256');
    let readableStream = fs.createReadStream(pathToReadFile);
    readableStream.on('data', chunk => hash.update(chunk));
    readableStream.on('end', () => console.log(hash.digest('hex')));
    console.log(`You are currently in ${pathObject.currentPath}`);
  } catch (error) {
    console.log('Check paths');
    console.log('Operation failed');
    console.log(`You are currently in ${pathObject.currentPath}`);
    console.log(error);
  }
};

export default calcHash;
