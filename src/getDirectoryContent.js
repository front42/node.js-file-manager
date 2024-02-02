import { readdir } from 'fs/promises';

import { pathObject } from './index.js';

const getDirectoryContent = async () => {
  try {
    const directories = [];
    const files = [];
    const content = await readdir(pathObject.currentPath, { withFileTypes: true });
    for (let item of content) {
      item.isDirectory()
        ? directories.push({ Name: item.name, Type: 'directory' })
        : files.push({ Name: item.name, Type: 'file' });
    }

    console.table([].concat(directories.sort(), files.sort()));
    console.log(`You are currently in ${pathObject.currentPath}`);
  } catch (error) {
    console.error(error);
  }
};

export default getDirectoryContent;
