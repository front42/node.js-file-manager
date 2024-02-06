import fs from 'fs';
import zlib from 'zlib';

import checkPath from './checkPath.js';
import { pathObject } from './index.js';

const compressFile = async (line) => {
  try {
    let [pathToReadFile, pathToZip] = line.slice(9).trim().split(' ');
    pathToReadFile = await checkPath(pathToReadFile);

    const readableStream = fs.createReadStream(pathToReadFile);
    const writableStream = fs.createWriteStream(pathToZip);

    const brotli = zlib.createBrotliCompress();

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

export default compressFile;
