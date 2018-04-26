const persistence = (num, acc = 0) => {
  if (num < 10) {
    return acc;
  }
  const result = String(num).split('').reduce((a, b) => a * b);
  return persistence(result, acc + 1);
};

export default persistence;
