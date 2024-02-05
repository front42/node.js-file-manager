import { access, constants } from 'fs/promises';
import path from 'path';

import { pathObject } from './index.js';

const checkPath = async (pathToCheck) => {
  try {
    await access(pathToCheck, constants.F_OK);
    return pathToCheck;
  } catch (error) {
    await access(path.join(pathObject.currentPath, pathToCheck), constants.F_OK);
    return path.join(pathObject.currentPath, pathToCheck);
  }
};

export default checkPath;
