import { rename, access, constants } from 'fs';
import path from 'path';

import { pathObject } from './index.js';

const renameFile = line => {
  const [oldPath, newFileName] = line.slice(3).trim().split(' ');
  access(path.join(path.dirname(oldPath), newFileName), constants.F_OK, (error) => {
    if (error) {
      console.log('Success!');
      console.log(`You are currently in ${pathObject.currentPath}`);
      rename(oldPath, path.join(path.dirname(oldPath), newFileName), (error) => {
        if (error) {
          console.log('No file to rename');
          console.log('Operation failed');
          console.log(`You are currently in ${pathObject.currentPath}`);
        }});
    } else {
      console.log('File already exists');
      console.log('Operation failed');
      console.log(`You are currently in ${pathObject.currentPath}`);
    }
  });
};

export default renameFile;
