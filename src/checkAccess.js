import { access } from 'fs';
import path from 'path';

import { pathObject } from './index.js';

const checkAccess = line => {
  const value = line.slice(3);
  access(path.join(pathObject.currentPath, value), error => {
    if (error) {
      access(value, error => {
        if (error) {
          console.log('Operation failed');
        } else {
          pathObject.currentPath = path.join(value, path.sep);
          console.log(`You are currently in ${pathObject.currentPath}`);
        }
      });
    } else {
      pathObject.currentPath = path.join(pathObject.currentPath, value);
      console.log(`You are currently in ${pathObject.currentPath}`);
    }
  });
};

export default checkAccess;
