import * as readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

import addFile from './addFile.js';
import changeDirectory from './changeDirectory.js';
import getDirectoryContent from './getDirectoryContent.js';
import getHomeDir from './getHomeDir.js';
import getUserName from './getUserName.js';
import goUp from './goUp.js';
import readFile from './readFile.js';

export const pathObject = { currentPath: getHomeDir() };

console.log(`Welcome to the File Manager, ${getUserName()}!`);
console.log(`You are currently in ${getHomeDir()}`);

const rl = readline.createInterface({ input, output });

rl.on('line', line => {
  if (line.startsWith('add ') && line.slice(4).trim()) {
    addFile(line);
    return;
  }

  if (line.startsWith('cat ') && line.slice(4).trim()) {
    readFile(line);
    return;
  }

  if (line.startsWith('cd ') && !line.startsWith('cd ..') && line.slice(3).trim()) {
    changeDirectory(line);
    return;
  }

  switch (line) {
    case 'ls':
      getDirectoryContent();
      break;
    case 'cd ..':
    case 'up':
      goUp();
      break;
    case '.exit':
      rl.close();
      return;
    default:
      console.log('Invalid input');
      console.log(`You are currently in ${pathObject.currentPath}`);
  }
});

rl.on('close', () => {
  console.log(`Thank you for using File Manager, ${getUserName()}, goodbye!`);
});
