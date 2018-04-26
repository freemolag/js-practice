const persistence = (num, acc = 0) => {
  if (num < 10) {
    return acc;
  }
  const mmultiplyNum = String(num).split('').reduce((a, b) => a * b);
  return persistence(mmultiplyNum, acc + 1);
};

export default persistence;
