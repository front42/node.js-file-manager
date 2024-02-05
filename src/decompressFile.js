import fs from 'fs';
import zlib from 'zlib';

import checkPath from './checkPath.js';
import { pathObject } from './index.js';

const decompressFile = async (line) => {
  try {
    let [pathToZip, pathToFile] = line.slice(11).trim().split(' ');
    pathToZip = await checkPath(pathToZip);

    const readableStream = fs.createReadStream(pathToZip);
    const writableStream = fs.createWriteStream(pathToFile);

    const brotli = zlib.createBrotliDecompress();

    const stream = readableStream.pipe(brotli).pipe(writableStream);
    stream.on('finish', () => {
      console.log('Success!');
      console.log(`You are currently in ${pathObject.currentPath}`);
    });
  } catch (error) {
    console.log('Check paths');
    console.log('Operation failed');
    console.log(`You are currently in ${pathObject.currentPath}`);
  }
};

export default decompressFile;
