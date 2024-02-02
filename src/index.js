import * as readline from 'readline/promises';
import { stdin as input, stdout as output } from 'node:process';

import getHomeDir from './getHomeDir.js';
import getUserName from './getUserName.js';

console.log(`Welcome to the File Manager, ${getUserName()}!`);
console.log(`You are currently in ${getHomeDir()}`);

const rl = readline.createInterface({ input, output });

rl.on('line', value => {
  switch (value) {
    case '.exit':
      rl.close();
      return;
    default:
      console.log('Invalid input');
      console.log(`You are currently in ${getHomeDir()}`);
  }
});

rl.on('close', () => {
  console.log(`Thank you for using File Manager, ${getUserName()}, goodbye!`);
});
