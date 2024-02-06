import fs from 'fs/promises';
import path from 'path';

import { pathObject } from './index.js';

const addFile = async line => {
  const pathToNewFile = line.slice(4).trim();
  try {
    await fs.writeFile(path.join(pathObject.currentPath, pathToNewFile), '', { flag: 'ax+' });
    console.log('Success!');
  } catch (error) {
    console.log('File already exists');
    console.log('Operation failed');
  }
  console.log(`You are currently in ${pathObject.currentPath}`);
};

export default addFile;
