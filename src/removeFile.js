import fs from 'fs/promises';

import checkPath from './checkPath.js';
import { pathObject } from './index.js';

const removeFile = async (line) => {
  try {
    let [pathToRemoveFile] = line.slice(3).trim().split(' ');
    pathToRemoveFile = await checkPath(pathToRemoveFile);
    await fs.unlink(pathToRemoveFile);
    console.log('Success!');
    console.log(`You are currently in ${pathObject.currentPath}`);
  } catch (error) {
    console.log('Check paths');
    console.log('Operation failed');
    console.log(`You are currently in ${pathObject.currentPath}`);
  }
};

export default removeFile;
