import fs from 'fs';
import path from 'path';

import checkPath from './checkPath.js';
import { pathObject } from './index.js';

const copyFile = async (line) => {
  try {
    let [pathToReadFile, newDirectory] = line.slice(3).trim().split(' ');
    pathToReadFile = await checkPath(pathToReadFile);
    newDirectory = await checkPath(newDirectory);

    const readableStream = fs.createReadStream(pathToReadFile, 'utf-8');
    const writableStream = fs.createWriteStream(path.join(newDirectory, path.basename(pathToReadFile)), { flags: 'ax' });

    readableStream.on('data', chunk => writableStream.write(chunk));

    readableStream.on('end', () => {
      writableStream.end();
      console.log(`You are currently in ${pathObject.currentPath}`);
    });

    readableStream.on('error', () => {
      console.log('Error in reading');
      console.log('Operation failed');
    });

    writableStream.on('error', () => {
      console.log('Error in writing');
      console.log('Operation failed');
    });
  } catch (error) {
    console.log('Check paths');
    console.log('Operation failed');
    console.log(`You are currently in ${pathObject.currentPath}`);
  }
};

export default copyFile;
