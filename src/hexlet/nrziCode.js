export default (nrzi) => {
  if (nrzi === '|') {
    return '';
  }
  let result = '';
  for (let i = 0; i <= nrzi.length - 1;) {
    if (nrzi[i] === '¯' || nrzi[i] === '_') {
      result += 0;
      i += 1;
    } else if (nrzi[i] === '|') {
      result += 1;
      i += 2;
    }
  }
  return result;
};
