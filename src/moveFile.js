import removeFile from './removeFile.js';
import copyFile from './copyFile.js';

const moveFile = async (line) => {
  await copyFile(line);
  await removeFile(line);
};

export default moveFile;
