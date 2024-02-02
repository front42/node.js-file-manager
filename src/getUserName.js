const getUserName = () => {
  return process.argv[2]?.startsWith('--username=') && process.argv[2].slice(11).trim()
    ? process.argv[2].slice(11).replace(/\s+/g, ' ').trim()
    : 'dear guest';
};

export default getUserName;
