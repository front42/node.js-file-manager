import os from 'os';
import path from 'path';

import getHomeDir from './getHomeDir.js';
import { pathObject } from './index.js';

const getOs = line => {
  const request = line.slice(5).trim();
  switch (request) {
    case 'EOL':
      console.log(JSON.stringify(os.EOL));
      console.log(`You are currently in ${pathObject.currentPath}`);
      break;
    case 'cpus':
      const cpus = os.cpus().map(cpu => ({ Model: cpu.model.trim(), GHz: cpu.speed / 1000 }));
      console.log(`Amount of CPUs: ${cpus.length}`);
      console.table(cpus);
      console.log(`You are currently in ${pathObject.currentPath}`);
      break;
    case 'architecture':
      console.log(os.arch());
      console.log(`You are currently in ${pathObject.currentPath}`);
      break;
    case 'homedir':
      console.log(getHomeDir());
      console.log(`You are currently in ${pathObject.currentPath}`);
      break;
    case 'username':
      console.log(path.basename(getHomeDir()));
      console.log(`You are currently in ${pathObject.currentPath}`);
      break;
    default:
      console.log('Invalid input');
      console.log(`You are currently in ${pathObject.currentPath}`);
  }
};

export default getOs;
