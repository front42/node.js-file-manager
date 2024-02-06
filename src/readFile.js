import fs from 'fs';
import path from 'path';

import { pathObject } from './index.js';

const readFile = line => {
  const pathToReadFile = line.slice(4).trim();
  fs.access(path.join(pathObject.currentPath, pathToReadFile), error => {
    if (error) {
      fs.access(pathToReadFile, error => {
        if (error) {
          console.log(`File doesn't exist or access is restricted`);
          console.log('Operation failed');
        } else {
          const readableStream = fs.createReadStream(pathToReadFile, 'utf-8');
          readableStream.on('data', chunk => console.log(chunk));
          readableStream.on('end', () => console.log(`You are currently in ${pathObject.currentPath}`));
          readableStream.on('error', () => {
            console.log('Operation failed');
            console.log(`You are currently in ${pathObject.currentPath}`);
          });
        }
      });
    } else {
      const readableStream = fs.createReadStream(path.join(pathObject.currentPath, pathToReadFile), 'utf-8');
      readableStream.on('data', chunk => console.log(chunk));
      readableStream.on('end', () => console.log(`You are currently in ${pathObject.currentPath}`));
      readableStream.on('error', () => {
        console.log('Operation failed');
        console.log(`You are currently in ${pathObject.currentPath}`);
      });
    }
  });
};

export default readFile;
