import * as readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

import addFile from './addFile.js';
import changeDirectory from './changeDirectory.js';
import getDirectoryContent from './getDirectoryContent.js';
import getHomeDir from './getHomeDir.js';
import getUserName from './getUserName.js';
import goUp from './goUp.js';
import readFile from './readFile.js';
import renameFile from './renameFile.js';
import copyFile from './copyFile.js';
import moveFile from './moveFile.js';
import removeFile from './removeFile.js';
import getOs from './getOs.js';

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

  if (line.startsWith('rn ') && line.slice(3).trim()) {
    renameFile(line);
    return;
  }

  if (line.startsWith('cp ') && line.slice(3).trim()) {
    copyFile(line);
    return;
  }

  if (line.startsWith('mv ') && line.slice(3).trim()) {
    moveFile(line);
    return;
  }

  if (line.startsWith('rm ') && line.slice(3).trim()) {
    removeFile(line);
    return;
  }

  if (line.startsWith('cd ') && !line.startsWith('cd ..') && line.slice(3).trim()) {
    changeDirectory(line);
    return;
  }

  if (line.startsWith('os --') && line.slice(5).trim()) {
    getOs(line);
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
