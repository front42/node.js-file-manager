import path from 'path';
import { pathObject } from './index.js';

const goUp = () => {
  pathObject.currentPath = path.resolve(pathObject.currentPath, '..');
  console.log(`You are currently in ${pathObject.currentPath}`);
};

export default goUp;
